import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Settings from "../views/Settings.vue"
import Learning from '../views/Leaning.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name:'Login',
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path:"/settings",
    name: 'Settings',
    component:Settings
  },
  {
    path: "/learning",
    name: 'Learning',
    component: Learning
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
