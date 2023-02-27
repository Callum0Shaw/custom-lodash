function omitBy(obj, predicate) {
  const newObj = {};
  for (const key in obj) {
    if (!predicate(obj[key])) newObj[key] = obj[key];
  }
  return newObj;
}

module.exports = omitBy;
