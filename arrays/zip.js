const map = require('./map');
/**
 * Creates an array of grouped elements,
 * the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @param  {Array} ...arrays An array of arrays to be processed
 *
 * @return {Array} array of arrays zipped
 */
function zip(...arrays) {
  const maxLength = Math.max(...map(arrays, (x) => x.length));
  const newArr = [];

  for (let i = 0; i < maxLength; i += 1) {
    const subArray = [];
    for (let j = 0; j < arrays.length; j += 1) {
      subArray[subArray.length] = arrays[j][i];
    }
    newArr[newArr.length] = subArray;
  }
  return newArr;
}

module.exports = zip;
