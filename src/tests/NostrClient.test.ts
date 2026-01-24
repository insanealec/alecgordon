import { setActivePinia, createPinia } from 'pinia';
import { describe, expect, test, beforeEach } from 'vitest';
import { useNostrStore } from '@/stores/nostr';

describe('Nostr Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('should initialize with default relays', () => {
    const store = useNostrStore();
    expect(store.relays).not.toBeUndefined();
    expect(store.relays.length).toBeGreaterThan(0);
  });

  test('should add author correctly', () => {
    const store = useNostrStore();
    
    // Should add author (using a basic string since we're not testing key validation)
    store.addAuthor('test-author-key');
    expect(store.authors['test-author-key']).not.toBeUndefined();
    
    // Should not add duplicate author
    const initialAuthorsCount = Object.keys(store.authors).length;
    store.addAuthor('test-author-key');
    expect(Object.keys(store.authors).length).toBe(initialAuthorsCount);
  });

  test('should remove author correctly', () => {
    const store = useNostrStore();
    
    // Add author first
    store.addAuthor('test-author-key');
    expect(store.authors['test-author-key']).not.toBeUndefined();
    
    // Remove author
    store.removeAuthor('test-author-key');
    expect(store.authors['test-author-key']).toBeUndefined();
  });

  test('should add relay correctly', () => {
    const store = useNostrStore();
    const testRelay = 'wss://test.relay.com';
    
    // Should add relay
    store.addRelay(testRelay);
    expect(store.relays).toContain(testRelay);
    
    // Should not add duplicate relay
    const initialRelaysCount = store.relays.length;
    store.addRelay(testRelay);
    expect(store.relays.length).toBe(initialRelaysCount);
  });

  test('should remove relay correctly', () => {
    const store = useNostrStore();
    const testRelay = 'wss://test.relay.com';
    
    // Add relay first
    store.addRelay(testRelay);
    expect(store.relays).toContain(testRelay);
    
    // Remove relay
    store.removeRelay(testRelay);
    expect(store.relays).not.toContain(testRelay);
  });
});