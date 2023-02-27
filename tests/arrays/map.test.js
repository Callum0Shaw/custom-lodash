const map = require('../../arrays/map');

describe('map', () => {
  const array = [1, 2, 3, 4, 5, 6];

  test('should map values into new array', () => {
    const res = map(array, (x) => x * x);
    expect(res).toStrictEqual([1, 4, 9, 16, 25, 36]);
  });
});
