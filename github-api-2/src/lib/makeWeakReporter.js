/**
 * @template {{}} I
 * @template T
 * @param {(object: I) => T} reporterFn
 * @returns {(object: I) => T}
 */
export default function makeWeakReporter(reporterFn) {
  const cache = new WeakMap();
  return object => {
    if (!object) return null;
    if (cache.has(object)) return cache.get(object);
    const result = reporterFn(object);
    cache.set(object, result);
    return result;
  };
}
