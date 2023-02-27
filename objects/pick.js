const includes = require('../arrays/includes');

function pick(obj, paths) {
  const newObj = {};
  for (const key in obj) {
    if (includes(paths, key)) newObj[key] = obj[key];
  }
  return newObj;
}
module.exports = pick;
