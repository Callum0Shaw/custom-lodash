const pick = require('../../objects/pick');

describe('pick', () => {
  const obj = { a: 1, b: '2', c: 3 };
  test('should create new object from specified keys', () => {
    const res = pick(obj, ['a', 'c']);
    expect(res).toStrictEqual({ a: 1, c: 3 });
  });
});
