export default reporter => {
  const cache = new WeakMap();
  return object => {
    if (!object) return null;
    if (cache.has(object)) return cache.get(object);
    const result = reporter(object);
    cache.set(object, result);
    return result;
  };
};
