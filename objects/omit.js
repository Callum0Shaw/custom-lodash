const includes = require('../arrays/includes');

function omit(obj, arr) {
  const newObj = {};
  for (const key in obj) {
    if (!includes(arr, key)) newObj[key] = obj[key];
  }
  return newObj;
}

module.exports = omit;
