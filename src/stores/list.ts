import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

interface Item {
  id: string;
  name: string;
}
// "DB" for all items
interface ItemList {
  [id: string]: Item;
}
// "DB" for terms
interface TermList {
  [name: string]: string;
}
// Unique itemID instances attached to categories
interface ListGroup {
  [key: string]: string;
}
// Type for active list of items
interface CategoryItems {
  [categoryID: string]: ListGroup;
}

interface Category {
  id: string;
  name: string;
}
interface CategoryList {
  [id: string]: Category;
}
export const DEFAULT_CATEGORY: Category = {
  id: '0000-0000-0000-0000-0000',
  name: 'No Category',
}
const STARTER_NAMES = ['Pharmacy', 'Frozen', 'Household', 'Dairy', 'Bread'];
const DEFAULT_NAMES = {} as TermList;
const DEFAULT_LIST = { [DEFAULT_CATEGORY.id]: DEFAULT_CATEGORY} as CategoryList;
STARTER_NAMES.forEach((name) => {
  const id = crypto.randomUUID();
  DEFAULT_LIST[id] = { id, name };
  DEFAULT_NAMES[name] = id;
})

// Grouping type exports
export type {
  Item,
  ItemList,
  TermList,
  ListGroup,
  CategoryItems,
  Category,
  CategoryList,
};

export const useListStore = defineStore('list', () => {
  const termList = useStorage('termList', {} as TermList);
  const itemList = useStorage('itemList', {} as ItemList);
  const readyList = useStorage('readyList', {} as CategoryItems);
  const completeList = useStorage('completeList', {} as CategoryItems);
  const categoryList = useStorage('categoryList', DEFAULT_LIST);
  const categoryTerms = useStorage('categoryTerms', DEFAULT_NAMES); // set

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
      };
      itemList.value[item.id] = item;
      termList.value[term] = item.id;
    }
    // Lists can have multiples of the item, even in separate categories
    readyList.value[selectedCategory] = {
      ...(readyList.value[selectedCategory] ?? {}), [crypto.randomUUID()]: item.id,
    };
  }

  const addReady = (categoryID: string, key: string) => {
    readyList.value[categoryID] = {
      ...(readyList.value[categoryID] ?? {}), [key]: completeList.value[categoryID][key],
    };
    delete completeList.value[categoryID][key];
  }

  const addComplete = (categoryID: string, key: string) => {
    completeList.value[categoryID] = {
      ...(completeList.value[categoryID] ?? {}), [key]: readyList.value[categoryID][key],
    };
    delete readyList.value[categoryID][key];
  }

  const addCategory = (name: string) => {
    // Currently only has a name, so only check if the name is already there
    if (!name || categoryTerms.value[name]) return;
    const id = crypto.randomUUID();
    categoryList.value[id] = {
      id, name
    };
    categoryTerms.value[name] = id;
  }

  const deleteCategory = (categoryID: string, keepItems: boolean = false) => {
    if (keepItems) {
      // Can I make this move to the default category recreate it if deleted, or make it protected?
      readyList.value[DEFAULT_CATEGORY.id] = readyList.value[categoryID];
      completeList.value[DEFAULT_CATEGORY.id] = completeList.value[categoryID];
    }
    // Delete everything from the lists for this category
    delete readyList.value[categoryID];
    delete completeList.value[categoryID];
    // Finally delete the category
    delete categoryList.value[categoryID];
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
    addCategory,
    deleteCategory,
    updateCategory,
  };
});
