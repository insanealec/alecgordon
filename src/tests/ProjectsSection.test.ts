import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProjectsSection from '@/components/ProjectsSection.vue';
import { PROJECTS } from '@/data/profile';

describe('ProjectsSection', () => {
  it('renders a card per project with the featured one first', () => {
    const wrapper = mount(ProjectsSection);
    const names = wrapper.findAll('article h3').map((heading) => heading.text());
    const featured = PROJECTS.filter((project) => project.featured).map((project) => project.name);

    expect(names).toHaveLength(PROJECTS.length);
    expect(names.slice(0, featured.length)).toEqual(featured);
  });

  it('only links source for projects that have it', () => {
    const wrapper = mount(ProjectsSection);
    const sourceLinks = wrapper.findAll('a').filter((link) => link.text().startsWith('Source'));

    expect(sourceLinks).toHaveLength(PROJECTS.filter((project) => project.sourceUrl).length);
  });

  it('opens every external link safely in a new tab', () => {
    const wrapper = mount(ProjectsSection);

    wrapper.findAll('a').forEach((link) => {
      expect(link.attributes('target')).toBe('_blank');
      expect(link.attributes('rel')).toBe('noopener noreferrer');
    });
  });
});
