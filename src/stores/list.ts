import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

interface Item {
  id: string;
  name: string;
  categoryID: string;
  isAssumedCategory: boolean;
}
// "DB" for all items
interface ItemList {
  [id: string]: Item;
}
// "DB" for terms
interface TermList {
  [name: string]: string;
}
// Type for active list of items
interface ListGroup {
  [id: string]: string;
}

interface Category {
  id: string;
  name: string;
}
// TODO: Be able to fill out category and attach to Items
interface CategoryList {
  [id: string]: Category;
}
export const DEFAULT_CATEGORY: Category = {
  id: '0000-0000-0000-0000-0000',
  name: 'No Category',
}
const DEFAULT_LIST = ['Pharmacy', 'Frozen', 'Household', 'Dairy', 'Bread'].reduce((acc, name) => {
  const id = crypto.randomUUID();
  return { ...acc, [id]: { id, name }};
}, { [DEFAULT_CATEGORY.id]: DEFAULT_CATEGORY} as CategoryList);

// Grouping type exports
export type {
  Item,
  ItemList,
  TermList,
  ListGroup,
  Category,
  CategoryList,
};

export const useListStore = defineStore('list', () => {
  const termList = useStorage('termList', {} as TermList);
  const itemList = useStorage('itemList', {} as ItemList);
  const readyList = useStorage('readyList', {} as ListGroup);
  const completeList = useStorage('completeList', {} as ListGroup);
  const categoryList = useStorage('categoryList', DEFAULT_LIST);

  const addTerm = (term: string, selectedCategory: string) => {
    // No empty list terms
    if (!term) return;
    // Check if Item term already exists
    let item: Item;
    if (termList.value[term]) {
      item = itemList.value[termList.value[term]];
    } else {
      item = {
        id: crypto.randomUUID(),
        name: term,
        categoryID: selectedCategory,
        isAssumedCategory: true,
      };
      itemList.value[item.id] = item;
      termList.value[term] = item.id;
    }
    // Lists can have multiples of the item
    readyList.value[crypto.randomUUID()] = item.id;
  }

  const addReady = (key: string) => {
    readyList.value[key] = completeList.value[key];
    delete completeList.value[key];
  }

  const addComplete = (key: string) => {
    completeList.value[key] = readyList.value[key];
    delete readyList.value[key];
  }

  const deleteCategory = (id: string) => {
    delete categoryList.value[id];
  }

  const updateCategory = (category: Category) => {
    categoryList.value[category.id] = category;
  }

  return {
    termList,
    itemList,
    readyList,
    completeList,
    categoryList,
    addTerm,
    addReady,
    addComplete,
    deleteCategory,
    updateCategory,
  };
});
