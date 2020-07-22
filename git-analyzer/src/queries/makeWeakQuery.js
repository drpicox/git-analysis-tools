function makeWeakReporter(query) {
  const cache = new WeakMap();
  return function(object) {
    if (cache.has(object)) return cache.get(object);

    const result = query(object);
    cache.set(object, result);
    return result;
  };
}

module.exports = makeWeakReporter;
