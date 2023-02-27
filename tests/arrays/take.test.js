const take = require('../../arrays/take');

describe('take', () => {
  const array = [1, 2, 3, 4, 5, 6];

  test('should return first x elements', () => {
    const res = take(array, 3);
    expect(res).toStrictEqual([1, 2, 3]);
  });

  test('should return first element if no value is given', () => {
    const res = take(array);
    expect(res).toStrictEqual([1]);
  });
});
