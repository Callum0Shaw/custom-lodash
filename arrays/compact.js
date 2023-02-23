/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param  {Array} arr array to be processed
 *
 * @return {Array} array missing all falsy values
 */
function compact(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i]) newArr = [...newArr, arr[i]];
  }
  return newArr;
}
module.exports = compact;
