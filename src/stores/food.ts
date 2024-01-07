import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Person {
  name: string;
  cuisines: string[];
}

export type {
  Person,
}

// TODO: don't just take these from a delivery app like I did
const CUISINES = [
  'Breakfast',
  'Burgers',
  'Pizza',
  'Sushi',
  'Mexican',
  'Italian',
  'Chinese',
];

const INITIAL_PERSON: Person = {
  name: 'Person 1',
  cuisines: [],
}
const MAX_PEOPLE = 10;

export {
  CUISINES,
}

export const useFoodStore = defineStore('food', () => {
  const people = ref([INITIAL_PERSON] as Person[]);

  const addPerson = (): number => {
    const len = people.value.length;
    if (len < MAX_PEOPLE) {
      const person: Person = {
        name: `Person ${len+1}`,
        cuisines: [],
      }
      people.value.push(person);
      return len;
    }
    return len - 1;
  }

  const matches = () => {
    // Mark each instance of a chosen cuisine
    const instances: { [name: string]: number } = {};
    for (const person of people.value) {
      for (const cuisine of person.cuisines) {
        if (!instances[cuisine]) instances[cuisine] = 0;
        instances[cuisine]++;
      }
    }
    console.log(instances)
    return instances;
  }

  return {
    people,
    addPerson,
    matches,
  };
});

