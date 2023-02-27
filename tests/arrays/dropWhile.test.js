const dropWhile = require('../../arrays/dropWhile');

describe('dropWhile', () => {
  const array = [1, 2, 3, 4, 5, 6];
  
  test('elements are dropped when predicate returns falsey', () => {
    const res = dropWhile(array, (x) => x === 4);
    expect(res).toStrictEqual([4, 5, 6]);
  });
});
