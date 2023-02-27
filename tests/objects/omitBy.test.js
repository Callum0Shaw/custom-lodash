const omitBy = require('../../objects/omitBy');

describe('omitBy', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should omits values that return truthy from predicate', () => {
    const res = omitBy(obj, (x) => typeof x === 'number');
    expect(res).toStrictEqual({ b: '2' });
  });
});
