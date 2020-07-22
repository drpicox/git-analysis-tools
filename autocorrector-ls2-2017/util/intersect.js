export function intersect(v1, v2) {
  let a, set;
  if (v1.length <= v2.length) {
    a = v1;
    set = new Set(v2);
  } else {
    a = v2;
    set = new Set(v1);
  }

  return a.filter(x => set.has(x));
}
