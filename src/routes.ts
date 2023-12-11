import AboutMe from '@/components/AboutMe.vue';
import IbottaExperience from '@/components/IbottaExperience.vue';
import TheMcAlearGroup from './components/TheMcAlearGroup.vue';
import CardStandardization from './components/projects/CardStandardization.vue';
import PaginationProject from './components/projects/PaginationProject.vue';
import MiscIbotta from './components/projects/MiscIbotta.vue';
import BetterLayout from './components/betterlist/BetterLayout.vue';
import BetterList from './components/betterlist/BetterList.vue';
import CategoryManager from './components/betterlist/CategoryManager.vue';

export default [
  { name: 'home', path: '/', component: AboutMe },
  { name: 'ibotta', path: '/ibotta', component: IbottaExperience },
  { name: 'mcalear', path: '/the-mcalear-group', component: TheMcAlearGroup },
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
        component: BetterList,
      },
      {
        path: 'categories',
        component: CategoryManager,
      },
    ],
  },
];

