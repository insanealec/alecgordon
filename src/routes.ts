import AboutMe from '@/components/AboutMe.vue';
import IbottaExperience from '@/components/IbottaExperience.vue';

export default [
  { name: 'home', path: '/', component: AboutMe },
  { name: 'ibotta', path: '/ibotta', component: IbottaExperience },
  { name: 'mcalear', path: '/the-mcalear-group', component: AboutMe },
];

