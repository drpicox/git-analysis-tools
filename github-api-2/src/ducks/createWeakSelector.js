let memoizedBase = {};
let reverse = new WeakMap();

const attach = (value, base) => {
  if (!value || typeof value !== "object" || reverse.get(value)) return;

  reverse.set(value, base);
  Object.values(value).forEach(v => attach(v, base));
};

const getBase = valueOrState => {
  if (
    valueOrState.issues === memoizedBase.issues &&
    valueOrState.commits === memoizedBase.commits
  )
    return memoizedBase;

  const base = reverse.get(valueOrState);
  if (base) return base;

  console.assert(valueOrState.issues);
  console.assert(valueOrState.commits);
  console.assert(valueOrState.router);

  memoizedBase = { issues: valueOrState.issues, commits: valueOrState.commits };
  reverse = new WeakMap();
  attach(memoizedBase, memoizedBase);

  return memoizedBase;
};

/*
 * @template T
 * @param {(...args: any[]) => string} [computeKey]
 * @param {(state:any, ...args: any[]) => T} computeValue
 * @returns {T}
 */
export function createWeakSelector(computeKey, computeValue) {
  if (!computeValue) {
    // @ts-ignore
    computeValue = computeKey;
    computeKey = () => "default";
  }

  const caches = new WeakMap();

  function selector(valueOrState, ...args) {
    const base = getBase(valueOrState);
    const key = computeKey(...args);

    let cache = caches.get(base);
    if (!cache) {
      cache = {};
      caches.set(base, cache);
    }

    let value = cache[key];
    if (!(key in cache)) {
      value = computeValue(base, ...args);
      cache[key] = value;
      attach(value, base);
    }

    return value;
  }
  return selector;
}
