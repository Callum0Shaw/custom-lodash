/**
 *
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param  {Array} arr array to process
 * @param  {Number} [size=1] length chunks
 *
 * @return {Array} An array of chunks
 */

function chunk(arr, size = 1) {
  let newArr = [];
  let tempArr = [];

  for (let i = 1; i <= arr.length; i += 1) {
    tempArr = [...tempArr, arr[i - 1]];
    if (i % size === 0 || i === arr.length) {
      newArr = [...newArr, tempArr];
      tempArr = [];
    }
  }
  return newArr;
}

module.exports = chunk;
