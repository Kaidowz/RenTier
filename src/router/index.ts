import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Createpost from '../views/CreatePost.vue'
import Bhlist from '../views/Bhlist.vue'
import Bhinfo from '../views/Bhinfo.vue'
import Bhinfo2 from '../views/Bhinfo2.vue'
import Savechanges from '../views/Savechanges.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/createpost',
    name: 'Createpost',
    component: Createpost
  },
  {
    path: '/bhlist',
    name: 'Bhlist',
    component: Bhlist
  },
  {
    path: '/bhinfo',
    name: 'Bhinfo',
    component: Bhinfo
  },
  {
    path: '/bhinfo2',
    name: 'Bhinfo2',
    component: Bhinfo2
  },
  {
    path: '/savechanges',
    name: 'Savechanges',
    component: Savechanges
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
