import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/todo',
    name: 'todoPage',
    component: () => import(/* webpackChunkName: "ToDoPage" */ '../views/ToDoView.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
