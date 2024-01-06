import { createRouter, createWebHistory } from 'vue-router'
import Orders from '../views/Orders.vue';
import Payment from '../views/Payment.vue';
import Profile from '../views/Profile.vue';
import Functions from '../views/Functions.vue';
import History from '../views/History.vue';
import Information from '../views/Information.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/orders',
      component: Orders
    },
    {
      path: '/payment',
      component: Payment
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/functions',
      component: Functions
    },
    {
      path: '/history',
      component: History
    },
    {
      path: '/information',
      component: Information
    }
  ]
})

export default router
