import decreasing from "../lib/decreasing";

export default function scoreWeek(scores, weights = [0.8, 0.15, 0.05]) {
  return scores
    .slice(0, weights.length)
    .sort(decreasing)
    .reduce((t, s, index) => t + s * weights[index], 0);
}
