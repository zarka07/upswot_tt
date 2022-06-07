<template>
  <nav>
    <!-- <login-view v-if="lsAuth"></login-view>

    <to-do-view v-else></to-do-view> -->
    <router-view/>
  </nav>
</template>
<script>
//import LoginView from "./views/LoginView.vue";
//import ToDoView from "./views/ToDoView.vue";
export default {
  name: "app-component",

  data() {
    return {
      //lsAuth: {},
      //auth: this.lsAuth.status ? JSON.parse(this.lsAuth) : {},
    };
  },

  //components: [LoginView, ToDoView],

  mounted() {
    this.lsAuth = localStorage.getItem("auth");
  },
};
</script>
<style>
#app {
  font-family: "Roboto regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #fff;
  text-decoration: none;
}
</style>
ToDoView