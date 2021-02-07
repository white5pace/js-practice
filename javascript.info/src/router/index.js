import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../pages/HomePage';
import IntroductionPage from '../pages/IntroductionPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/introduction',
    component: IntroductionPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
