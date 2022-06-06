<template>
  <nav>
    <div v-if="lsAuth">
      <LoginView />
    </div>
      <div v-else>
      <ToDoView />
      </div>
  </nav>
</template>
<script>
import LoginView from './views/LoginView.vue';
import ToDoView from './views/ToDoView.vue';
export default {
  name:'app-component',

  data(){
    return{
      lsAuth: {},
      auth: this.lsAuth?JSON.parse(this.lsAuth) : {}
    }
  },

  components:[LoginView, ToDoView],

  mounted(){
    this.lsAuth = localStorage.getItem('auth')
  }
}
</script>
<style>
#app {
  font-family: 'Roboto regular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}



nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #FFF;
  text-decoration: none;
}
</style>
ToDoView