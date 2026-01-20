import CardStandardization from './components/projects/CardStandardization.vue';
import PaginationProject from './components/projects/PaginationProject.vue';
import MiscIbotta from './components/projects/MiscIbotta.vue';
import BetterLayout from './components/betterlist/BetterLayout.vue';
import BetterList from './components/betterlist/BetterList.vue';
import CategoryManager from './components/betterlist/CategoryManager.vue';
import DeliveryMap from './components/map/DeliveryMap.vue';
import MeetAndEat from './components/food/MeetAndEat.vue';
import CaesarCypher from './components/challenges/CaesarCypher.vue';
import FormAdmin from './components/form-builder/FormAdmin.vue';
import HomePage from './components/HomePage.vue';

export default [
  { name: 'home', path: '/', component: HomePage },
  // Projects: will just be top-level
  { path: '/card-standardization', component: CardStandardization },
  { path: '/pagination', component: PaginationProject },
  { path: '/misc', component: MiscIbotta },
  // Demo programs
  {
    name: 'betterlist',
    path: '/betterlist',
    component: BetterLayout,
    children: [
      {
        path: '',
        name: 'default',
        component: BetterList,
      },
      {
        path: 'categories',
        component: CategoryManager,
      },
    ],
  },
  {
    name: 'delivery',
    path: '/delivery',
    component: DeliveryMap,
  },
  {
    name: 'meet-and-eat',
    path: '/meet-and-eat',
    component: MeetAndEat,
  },
  {
    name: 'cypher',
    path: '/cypher',
    component: CaesarCypher,
  },
  {
    name: 'form-builder',
    path: '/form-builder',
    component: FormAdmin,
  },
];

