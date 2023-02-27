const pickBy = require('../../objects/pickBy');

describe('pickBy', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should remove elements that do not statisfy predicate', () => {
    const res = pickBy(obj, (x) => typeof x === 'number');
    expect(res).toStrictEqual({ a: 1, c: 3 });
  });
});
