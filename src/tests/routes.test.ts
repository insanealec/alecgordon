import { describe, it, expect } from 'vitest';
import { createRouter, createMemoryHistory } from 'vue-router';
import routes from '@/routes';

const makeRouter = () => createRouter({ history: createMemoryHistory(), routes });

describe('routes', () => {
  it('resolves the homepage', async () => {
    const router = makeRouter();
    await router.push('/');

    expect(router.currentRoute.value.name).toBe('home');
  });

  it.each(['/demo/betterlist', '/does-not-exist', '/a/b/c'])('redirects %s home', async (path) => {
    const router = makeRouter();
    await router.push(path);

    expect(router.currentRoute.value.name).toBe('home');
    expect(router.currentRoute.value.fullPath).toBe('/');
  });
});
