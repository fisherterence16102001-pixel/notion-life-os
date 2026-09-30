import { IdCache } from '../utils/idCache';

describe('IdCache', () => {
  it('should store and read a value', () => {
    const cache = new IdCache('/tmp/notion-cache-test.json');
    cache.set('db:test', 'abc123');
    expect(cache.get('db:test')).toBe('abc123');
  });
});
