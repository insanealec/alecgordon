import AboutMe from '@/components/AboutMe.vue';
import IbottaExperience from '@/components/IbottaExperience.vue';
import TheMcAlearGroup from './components/TheMcAlearGroup.vue';
import CardStandardization from './components/Projects/CardStandardization.vue';

export default [
  { name: 'home', path: '/', component: AboutMe },
  { name: 'ibotta', path: '/ibotta', component: IbottaExperience },
  { name: 'mcalear', path: '/the-mcalear-group', component: TheMcAlearGroup },
  // Projects: will just be top-level
  { path: '/card-standardization', component: CardStandardization },
];

