/**
 * Creates a slice of array with n elements taken from the beginning.
 *
 * @param  {Array} arr array to be processed
 * @param  {Number} n=1 size of the slice to be returned
 *
 * @return {Array} slice of x number from beginning
 */
function take(arr, n = 1) {
  const newArr = [];
  for (let i = 0; i < n; i += 1) {
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}

module.exports = take;
