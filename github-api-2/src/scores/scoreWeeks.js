import scaleScore from "./scaleScore";

export default function scoreWeeks(
  scores,
  weights = [0.1, 0.2, 0.4, 0.2, 0.2, 0.1],
  scale
) {
  const selection = scores
    .slice()
    .concat(weights.map(_ => 0))
    .sort((a, b) => b - a)
    .map(s => scaleScore(s, scale))
    .slice(0, weights.length);

  const weighteds = selection.map((x, index) => x * weights[index]);

  return selection.reduce((a, b, index) => a + b * weights[index], 0);
}
