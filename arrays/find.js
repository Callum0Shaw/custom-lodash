/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @param  {Array} arr Array to be processed
 * @param  {Function} predicate function to check each element against
 *
 * @return {Object} Element that matches predicate or undefined
 */
function find(arr, predicate) {
  let element;
  for (let i = 0; i < arr.length; i += 1) {
    if (predicate(arr[i])) {
      element = arr[i];
      break;
    }
  }
  return element;
}

module.exports = find;
