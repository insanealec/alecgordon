import { setActivePinia, createPinia } from 'pinia';
import { describe, expect, test, beforeEach, vi } from 'vitest';
import { generateSecretKey, getPublicKey } from 'nostr-tools/pure';
import { npubEncode } from 'nostr-tools/nip19';
import { useNostrStore } from '@/stores/nostr';

// A real npub, since the store rejects keys that don't decode
const TEST_HEXKEY = getPublicKey(generateSecretKey());
const TEST_NPUB = npubEncode(TEST_HEXKEY);

describe('Nostr Store', () => {
  beforeEach(() => {
    localStorage.clear();
    setActivePinia(createPinia());
  });

  test('should initialize with default relays', () => {
    const store = useNostrStore();
    expect(store.relays).not.toBeUndefined();
    expect(store.relays.length).toBeGreaterThan(0);
  });

  test('should add author correctly', () => {
    const store = useNostrStore();
    
    // Should add author and decode its hex key
    store.addAuthor(TEST_NPUB);
    expect(store.authors[TEST_NPUB]).toEqual({ pubkey: TEST_NPUB, hexkey: TEST_HEXKEY });
    
    // Should not add duplicate author
    const initialAuthorsCount = Object.keys(store.authors).length;
    store.addAuthor(TEST_NPUB);
    expect(Object.keys(store.authors).length).toBe(initialAuthorsCount);
  });

  test('should ignore keys that are not valid npubs', () => {
    const store = useNostrStore();
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    store.addAuthor('not-a-real-key');
    expect(store.authors['not-a-real-key']).toBeUndefined();
    expect(Object.keys(store.authors)).toHaveLength(0);

    consoleError.mockRestore();
  });

  test('should remove author correctly', () => {
    const store = useNostrStore();
    
    // Add author first
    store.addAuthor(TEST_NPUB);
    expect(store.authors[TEST_NPUB]).not.toBeUndefined();
    
    // Remove author
    store.removeAuthor(TEST_NPUB);
    expect(store.authors[TEST_NPUB]).toBeUndefined();
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