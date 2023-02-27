const omit = require('../../objects/omit');

describe('omit', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should removes key/value pairs from object', () => {
    const res = omit(obj, ['a', 'c']);
    expect(res).toStrictEqual({ b: '2' });
  });
});
