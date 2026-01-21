import BetterLayout from './components/betterlist/BetterLayout.vue';
import BetterList from './components/betterlist/BetterList.vue';
import CategoryManager from './components/betterlist/CategoryManager.vue';
import DeliveryMap from './components/map/DeliveryMap.vue';
import MeetAndEat from './components/food/MeetAndEat.vue';
import CaesarCypher from './components/challenges/CaesarCypher.vue';
import FormAdmin from './components/form-builder/FormAdmin.vue';
import HomePage from './components/HomePage.vue';
import DemoLayout from './components/DemoLayout.vue';

export default [
  { name: 'home', path: '/', component: HomePage },
  // Demo programs
  {
    path: '/demo',
    component: DemoLayout,
    children: [
      {
        name: 'betterlist',
        path: 'betterlist',
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
        path: 'delivery',
        component: DeliveryMap,
      },
      {
        name: 'meet-and-eat',
        path: 'meet-and-eat',
        component: MeetAndEat,
      },
      {
        name: 'cypher',
        path: 'cypher',
        component: CaesarCypher,
      },
      {
        name: 'form-builder',
        path: 'form-builder',
        component: FormAdmin,
      },
    ],
  },
];

