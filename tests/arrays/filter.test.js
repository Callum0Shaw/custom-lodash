const filter = require('../../arrays/filter');

describe('filter', () => {
  const array = [1, 6, 3, 9, 5, 7, 2];

  test('should remove all elements that the predicate returns falsey', () => {
    const res = filter(array, (x) => x < 6);
    expect(res).toStrictEqual([1, 3, 5, 2]);
  });
});
