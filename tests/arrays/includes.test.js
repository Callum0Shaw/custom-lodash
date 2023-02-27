const includes = require('../../arrays/includes');

describe('includes', () => {
  const array = [1, 6, 3, 9, 5, 7, 2];
  const string = 'abcd';

  test('should return true if value is in array', () => {
    const res = includes(array, 3);
    expect(res).toStrictEqual(true);
  });

  test('should return false if value is not in array', () => {
    const res = includes(array, 4);
    expect(res).toStrictEqual(false);
  });

  test('should check for substring in input is a string', () => {
    const res = includes('abcd', 'bc');
    expect(res).toStrictEqual(true);
  });

  test('should return false in substring not present', () => {
    const res = includes('abcd', 'ed');
    expect(res).toStrictEqual(false);
  });
});
