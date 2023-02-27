const drop = require('../../arrays/drop');

describe('drop', () => {
  const arr = [0, 1, 2, 3, 4, 5];

  test('should return array missing first 3 elements', () => {
    const res = drop(arr, 3);
    expect(res).toStrictEqual([3, 4, 5]);
  });

  test('should reove first element if no value is given', () => {
    const res = drop(arr);
    expect(res).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
