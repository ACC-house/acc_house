import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardWorks from '../views/CardWorksView.vue'
import ContactForm from '../views/ContactForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/card',
      name: 'Card',
      component: CardWorks
    },
    {
      path: '/contact',
       name: 'Contact',
       component: ContactForm
     },

  ]
})

export default router
