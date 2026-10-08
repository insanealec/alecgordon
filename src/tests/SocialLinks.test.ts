import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SocialLinks from '@/components/SocialLinks.vue';
import type { SocialLink } from '@/types/home';

const links: SocialLink[] = [
  {
    url: "https://github.com/insanealec/",
    label: "GitHub",
    icon: "github"
  },
  {
    url: "https://linkedin.com/in/alexanderdevongordon",
    label: "LinkedIn",
    icon: "linkedin"
  }
];

describe('SocialLinks', () => {
  it('renders a link for each entry', () => {
    const wrapper = mount(SocialLinks, { props: { links } });
    const anchors = wrapper.findAll('a');

    expect(anchors).toHaveLength(2);
    expect(anchors[0].attributes('href')).toBe("https://github.com/insanealec/");
    expect(anchors[1].attributes('href')).toBe("https://linkedin.com/in/alexanderdevongordon");
  });

  it('renders accessibility attributes properly', () => {
    const wrapper = mount(SocialLinks, { props: { links } });
    const anchor = wrapper.find('a');

    expect(anchor.attributes('aria-label')).toBe("GitHub");
    expect(anchor.attributes('rel')).toBe("noopener noreferrer");
  });

  it('renders a distinct icon for each link', () => {
    const wrapper = mount(SocialLinks, { props: { links } });
    const paths = wrapper.findAll('path').map((path) => path.attributes('d'));

    expect(paths).toHaveLength(2);
    expect(paths[0]).toBeTruthy();
    expect(paths[1]).toBeTruthy();
    expect(paths[0]).not.toBe(paths[1]);
  });
});
