import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import GradientBackground from '@/components/GradientBackground.vue';

describe('GradientBackground', () => {
  it('renders slot content', () => {
    const wrapper = mount(GradientBackground, {
      slots: { default: '<p class="content">Hello</p>' },
    });

    expect(wrapper.find('.content').text()).toBe('Hello');
  });

  it('hides the decorative glow from assistive tech', () => {
    const wrapper = mount(GradientBackground);

    expect(wrapper.find('.glow').attributes('aria-hidden')).toBe('true');
  });
});
