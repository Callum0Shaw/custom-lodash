const includes = require('../arrays/includes');

function omit(obj, arr) {
  const newObj = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    if (!includes(arr, keys[i])) newObj[keys[i]] = obj[keys[i]];
  }
  return newObj;
}

module.exports = omit;
