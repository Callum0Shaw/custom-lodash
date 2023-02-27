const find = require('../../arrays/find');

describe('find', () => {
  const array = [1, 6, 3, 9, 5, 7, 2];

  test('should return first element that returns truthy', () => {
    const res = find(array, (x) => x > 6);
    expect(res).toStrictEqual(9);
  });

  test('should return undefined if no matches', () => {
    const res = find(array, (x) => x > 10);
    expect(res).toStrictEqual(undefined);
  });
});
