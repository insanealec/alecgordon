import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import WorkExperience from '@/components/WorkExperience.vue';
import { JOBS } from '@/data/profile';

describe('WorkExperience', () => {
  it('renders an entry for each job', () => {
    const wrapper = mount(WorkExperience);
    const companies = wrapper.findAll('h3').map((heading) => heading.text());

    expect(companies).toHaveLength(JOBS.length);
    JOBS.forEach((job, index) => {
      expect(companies[index]).toContain(job.company);
    });
  });

  it('marks only the current role as current', () => {
    const wrapper = mount(WorkExperience);
    const currentCount = JOBS.filter((job) => !job.end).length;

    expect(wrapper.text().match(/Current/g) ?? []).toHaveLength(currentCount);
    expect(wrapper.text()).toContain('–now');
  });

  it('only renders a details toggle for jobs with details', () => {
    const wrapper = mount(WorkExperience);
    const withDetails = JOBS.filter((job) => job.details?.length).length;

    expect(wrapper.findAll('details')).toHaveLength(withDetails);
  });
});
