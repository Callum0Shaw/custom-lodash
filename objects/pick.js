const includes = require('../arrays/includes');

function pick(obj, paths) {
  const newObj = {};

  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    if (includes(paths, keys[i])) newObj[keys[i]] = obj[keys[i]];
  }
  return newObj;
}
module.exports = pick;
