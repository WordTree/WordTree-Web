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
    component: Home,
    meta:{
      // 页面标题title
      title: 'WordTree'
    }

  },
  {
    path: "/login",
    name:'Login',
    component: Login,
    meta:{
      // 页面标题title
      title: '登录 - WordTree'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta:{
      // 页面标题title
      title: '注册 - WordTree'
    }
  },
  {
    path:"/settings",
    name: 'Settings',
    component:Settings,
    meta:{
      // 页面标题title
      title: '个人设置 - WordTree'
    }
  },
  {
    path: "/learning",
    name: 'Learning',
    component: Learning,
    meta:{
      // 页面标题title
      title: '记忆 - WordTree'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
