import HomePage from './components/HomePage.vue';

export default [
  { name: 'home', path: '/', component: HomePage },
  // Anything else, including old demo links, goes home
  { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
];
