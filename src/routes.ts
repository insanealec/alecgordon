import AboutMe from '@/components/AboutMe.vue';
import IbottaExperience from '@/components/IbottaExperience.vue';
import TheMcAlearGroup from './components/TheMcAlearGroup.vue';
import CardStandardization from './components/projects/CardStandardization.vue';
import PaginationProject from './components/projects/PaginationProject.vue';
import MiscIbotta from './components/projects/MiscIbotta.vue';

export default [
  { name: 'home', path: '/', component: AboutMe },
  { name: 'ibotta', path: '/ibotta', component: IbottaExperience },
  { name: 'mcalear', path: '/the-mcalear-group', component: TheMcAlearGroup },
  // Projects: will just be top-level
  { path: '/card-standardization', component: CardStandardization },
  { path: '/pagination', component: PaginationProject },
  { path: '/misc', component: MiscIbotta },
];

