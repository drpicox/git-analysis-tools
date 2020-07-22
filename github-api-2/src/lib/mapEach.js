/**
 * @template I,O
 * @param {{[key: string]: I}} ob
 * @param {(item:I, key:string, object:{[key: string]: I}) => O} mapFn
 * @returns {{[key: string]: O}}
 */
export function mapEach(ob, mapFn) {
  /** @type {{[key: string]: O}} */
  const result = {};
  Object.keys(ob).forEach(key => {
    result[key] = mapFn(ob[key], key, ob);
  });
  return result;
}
