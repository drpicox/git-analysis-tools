import { sum } from "./sum";

export function median(v) {
  const m0 = Math.floor(v.length / 2);
  const m1 = Math.ceil(v.length / 2);
  return (v[m0] + v[m1]) / 2;
}
