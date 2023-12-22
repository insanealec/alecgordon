import AboutMe from '@/components/AboutMe.vue';
import WorkExperience from './components/WorkExperience.vue';
import CardStandardization from './components/projects/CardStandardization.vue';
import PaginationProject from './components/projects/PaginationProject.vue';
import MiscIbotta from './components/projects/MiscIbotta.vue';
import BetterLayout from './components/betterlist/BetterLayout.vue';
import BetterList from './components/betterlist/BetterList.vue';
import CategoryManager from './components/betterlist/CategoryManager.vue';
import DeliveryMap from './components/map/DeliveryMap.vue';

export default [
  { name: 'home', path: '/', component: AboutMe },
  { name: 'experiences', path: '/experiences', component: WorkExperience },
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
];

