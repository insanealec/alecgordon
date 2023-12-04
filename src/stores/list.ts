import { defineStore } from 'pinia';

export const useListStore = defineStore('list', {
  state: () => {
    return {
      list: [] as string[],
    };
  },
  actions: {
    add(item: string) {
      this.list.push(item);
    },
    remove(index: number) {
      this.list.splice(index, 1);
    },
  }
});
