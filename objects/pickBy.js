function pickBy(obj, predicate) {
  const newObj = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    if (predicate(obj[keys[i]])) newObj[keys[i]] = obj[keys[i]];
  }
  return newObj;
}

module.exports = pickBy;
