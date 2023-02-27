const compact = require('../../arrays/compact');

describe('compact', () => {
  const arr = [0, 1, false, 3, 4, '', NaN, undefined, null];
  test('should remove falsy values', () => {
    const res = compact(arr);
    expect(res).toStrictEqual([0, 1, 3, 4]);
  });
});
