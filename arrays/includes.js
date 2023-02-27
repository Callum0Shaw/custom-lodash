/**
 * Checks if it is a string, if it is checks for substring
 * Else searches array for element and return true/false
 *
 * @param  {Array} arr Array to be proccessed
 * @param  {Object} element element for search for
 *
 * @return {Boolean} Whether ths array contains item
 */
function includes(arr, element) {
  if (typeof arr === 'string') {
    const regex = new RegExp(element, 'g');
    if (arr.search(regex) === -1) return false;
    return true;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (element === arr[i]) return true;
  }
  return false;
}

module.exports = includes;
