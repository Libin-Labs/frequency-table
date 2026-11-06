import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('aggregates duplicate labels', () => {
  assert.deepEqual(api.frequencyTable(['a', 'b', 'a']), [
    { value: 'a', count: 2 },
    { value: 'b', count: 1 },
  ]);
});
test('orders ties lexically', () => {
  assert.deepEqual(api.frequencyTable(['z', 'a']), [
    { value: 'a', count: 1 },
    { value: 'z', count: 1 },
  ]);
});
test('preserves exact case', () => {
  assert.equal(api.frequencyTable(['A', 'a']).length, 2);
});
test('preserves empty category', () => {
  assert.deepEqual(api.frequencyTable(['']), [{ value: '', count: 1 }]);
});
test('handles empty collection', () => {
  assert.deepEqual(api.frequencyTable([]), []);
});
test('rejects non-string category', () => {
  assert.throws(() => api.frequencyTable([1]), TypeError);
});
