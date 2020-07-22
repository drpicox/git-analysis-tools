/**
 * @template T
 * @param {T[]} array
 * @param {{ (i: T): JSX.Element }} mapFn
 */
export default function commatize(array, mapFn) {
  var result = [];
  array.forEach(e => {
    if (result.length > 0) result.push(", ");
    result.push(mapFn(e));
  });
  if (result.length > 2) result[result.length - 2] = " and ";
  return result;
}
