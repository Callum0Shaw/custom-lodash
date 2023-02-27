/**
 * Creates a slice of array with n elements dropped from the beginning.
 *
 * @param  {Array} arr array to be processed
 * @param  {Number} n=1 length of items to be dropped from the start
 *
 * @return {Array} array excluding first n items
 */
function drop(arr, n = 1) {
  const newArr = [];
  for (let i = n; i < arr.length; i += 1) {
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}
module.exports = drop;
