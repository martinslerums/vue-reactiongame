import { createRouter, createWebHistory } from 'vue-router';
import ReactionView from '../views/ReactionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/reaction-game',
      name: 'ReactionGame',
      component: ReactionView
    },
  ]
});

export default router;
