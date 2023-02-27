const map = require('../arrays/map');

/* eslint-disable no-restricted-syntax */
/**
 *
 * I removed this rule as the task restricted us using Object methods,
 * such as Object.keys, to iterate over keys
 *
* */

function merge(obj, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] == null) continue;
      obj[key] = swapValues(obj[key], source[key]);
    }
  }
  return obj;
}

function isObject(obj) {
  return obj ? obj.constructor === {}.constructor : false;
}

function swapValues(value, newValue) {
  if (Array.isArray(value) && Array.isArray(newValue)) {
    // return newValue.map((x, i) => swapValues(value[i], x));
    let index = -1;
    return map(newValue, (x) => {
      index += 1;
      return swapValues(value[index], x);
    });
  } if (isObject(value) && isObject(newValue)) {
    return merge(value, newValue);
  }
  return newValue;
}

module.exports = merge;
