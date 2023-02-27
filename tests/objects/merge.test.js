const merge = require('../../objects/merge');

describe('merge', () => {
  const obj1 = {
    a: [{ b: 2 }, { d: 4 }],
  };
  const obj2 = {
    a: [{ c: 3 }, { e: 5 }],
  };
  const obj3 = {
    a: [{ c: 5 }, { e: 7 }],
  };
  const obj4 = {
    a: [{ c: undefined }, { e: 7 }],
  };
  test('should merge two objects together', () => {
    const res = merge(obj1, obj2);
    expect(res).toStrictEqual({ a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] });
  });

  test('should have objects on the right over write properties', () => {
    const res = merge(obj1, obj2, obj3);
    expect(res).toStrictEqual({ a: [{ b: 2, c: 5 }, { d: 4, e: 7 }] });
  });

  test('should ignore undefined/null properties', () => {
    const res = merge(obj1, obj2, obj4);
    expect(res).toStrictEqual({ a: [{ b: 2, c: 3 }, { d: 4, e: 7 }] });
  });
});
