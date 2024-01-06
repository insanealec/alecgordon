import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface Person {
  name: string;
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
      }
      people.value.push(person);
      return len;
    }
    return len - 1;
  }

  return {
    people,
    addPerson,
  };
});

