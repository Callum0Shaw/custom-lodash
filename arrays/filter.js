/**
 * Iterates over elements of collection,
 * returning an array of all elements predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @param  {Array} arr Array to be processed
 * @param  {Function} predicate function to process each element
 */
function filter(arr, predicate) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    if (predicate(element)) newArr[newArr.length] = element;
  }
  return newArr;
}

module.exports = filter;
