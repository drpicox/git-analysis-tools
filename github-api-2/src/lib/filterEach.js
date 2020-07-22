function filterEach(ob, filterFn) {
  const result = {};
  Object.keys(ob).forEach(key => {
    if (filterFn(ob[key], key, ob))
      result[key] = ob;
  });
  return result;
}

export default filterEach;
