// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/profilepage.vue')
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('../views/settingpage.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/FormPage.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/FormPage.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/settingpage.vue')
  },
   {
    path: '/count1',
    name: 'Count1',
    component: () => import('../views/countpage1.vue')
  },
  {
    path: '/api',
    name: 'API',
    component: () => import('../views/API.vue')
  },
{
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotfoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
