/**
 * Creates an array of values by running each element in collection thru iteratee.
 * The iteratee is invoked with three arguments:(value, index|key, collection).
 *
 * @param  {} arr
 * @param  {} func
 *
 * @return {Array} array of mapped values
 */
function map(arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[newArr.length] = func(arr[i]);
  }
  return newArr;
}
module.exports = map;
