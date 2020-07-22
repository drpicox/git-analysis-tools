async function asyncMap(array, fn) {
  return Promise.all((await array).map(fn));
}

module.exports = asyncMap;
