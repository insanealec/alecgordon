import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import CategoryCard from '@/components/betterlist/CategoryCard.vue';
import { useListStore, type Category, DEFAULT_CATEGORY } from '@/stores/list';
import { describe, expect, test, beforeEach } from 'vitest';

describe('CategoryCard', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('renders a category card', () => {
    const category: Category = {
      id: '123',
      name: 'Test Category',
    };
    const wrapper = mount(CategoryCard, {
      props: {
        category
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe('useListStore', () => {
  test('adds a category', () => {
    const store = useListStore();
    store.addCategory('Test Category');
    expect(store.categoryTerms['Test Category']).not.toBeUndefined();
  });
});