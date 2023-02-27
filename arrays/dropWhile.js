const drop = require('./drop');
/**
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 *
 * @param  {Array} arr array to be processed
 * @param  {Function} predicate function that processes each element
 *
 * @return {Array} array of left over element
 */
function dropWhile(arr, predicate) {
  let index;
  for (let i = 0; i < arr.length; i += 1) {
    if (predicate(arr[i])) {
      index = i;
      break;
    }
  }
  return drop(arr, index);
}
module.exports = dropWhile;
