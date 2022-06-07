<template>
  <div class="container">
    <div class="main">
      <img class="main__logo" src="../assets/Logo.png" alt="Logo" />
      <div class="section">
        <h1>Thank you, {{ lsUsername }}!</h1>
        <div class="section__addTodo">
          <input
            v-model.trim="newTodo"
            type="text"
            placeholder="Enter To Do"
            class="section__input"
          />
          <button type="submit" class="section__addButton" @click="addTodo()">+</button>
        </div>

        <div>{{lsTodos}}</div>
        <div class="section__todos" v-for="(todo, index) in todos" :key="index">
          <h5>{{ todo.name }}</h5>

          <div class="todos__buttons">
            <button class="" @click="editTodo(index)">edit</button>
            <button class="" @click="deleteTodo(index)">delete</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "todo-component",

  data() {
    return {
      lsUsername: "",
      lsTodos:[],
      username: this.lsUsername ? JSON.parse(this.lsUsername) : {},
      newTodo: "",
      indexEditTodo: null,
      tempNameTodo: "",
      todos: this.lsTodos ? JSON.parse(this.lsTodos) : [],
    };
  },

  mounted() {
    this.lsUsername = localStorage.getItem("username");
    this.lsTodos = localStorage.getItem("lsTodos")
    console.log(this.lsTodos)
  },

  methods: {
    addTodo() {
      if (this.newTodo.length === 0) return;
      if (this.indexEditTodo === null) {
        this.todos.push({
          name: this.newTodo,
        });
        localStorage.setItem("lsTodos",JSON.stringify(this.todos))
      } else {
        this.todos[this.indexEditTodo].name = this.newTodo;
        this.indexEditTodo = null;
      }
      this.newTodo = "";
    },
    editTodo(index) {
      this.newTodo = this.todos[index].name;
      this.indexEditTodo = index;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
}

.main {
  width: 100%;
  height: 75vh;
  background: linear-gradient(#00afed 0%, #00569a 100%);
  position: relative;
}

.main__logo {
  margin-top: 3%;
}

.section {
  position: absolute;
  background-color: #fff;
  width: 70%;
  height: 65vh;
  margin-top: 5vh;
  margin-left: 15%;
}

.footer {
  background-color: #e5e5e5;
  height: 25vh;
  width: 100%;
}

.section__addButton{
  background-color: #00569a;
  border-color:transparent;
  margin-left: 15px;
}

.section__todos{
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>