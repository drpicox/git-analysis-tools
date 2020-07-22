/**
 * @template T
 * @param {T[]} array
 * @param {string | ((item:T)=>string)} keyOrFn
 * @return {{[key:string] : T[]}}
 */
export function groupBy(array, keyOrFn = "id") {
  const keyFn = typeof keyOrFn === "string" ? o => o[keyOrFn] : keyOrFn;
  /** @type {{[key:string] : T[]}} */
  const result = {};
  array.forEach(o => {
    const key = keyFn(o);
    let items = result[key];
    if (!items) {
      items = [];
      result[key] = items;
    }
    items.push(o);
  });
  return result;
}
