const chunk = require('../../arrays/chunk');

describe('chunk', () => {
  const array = [0, 1, 2, 3, 4, 5];

  test('should return chunked arrays', () => {
    const res = chunk(array, 2);
    expect(res).toStrictEqual([[0, 1], [2, 3], [4, 5]]);
  });

  test('should return remaining elements as last chunk', () => {
    const res = chunk(array, 4);
    expect(res).toStrictEqual([[0, 1, 2, 3], [4, 5]]);
  });

  test('should make chunks of one if no value is entered', () => {
    const res = chunk(array);
    expect(res).toStrictEqual([[0], [1], [2], [3], [4], [5]]);
  });
});
