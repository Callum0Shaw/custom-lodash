const zip = require('../../arrays/zip');

describe('zip', () => {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  test('should zip arrays together', () => {
    const res = zip(array1, array2, array3);
    expect(res).toStrictEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });
});
