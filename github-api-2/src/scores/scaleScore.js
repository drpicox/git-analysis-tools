export default function scaleScore(
  score,
  scale = [0, 0.5, 1, 2, 5, 6, 7, 8, 9, 9.5, 10]
) {
  score = Math.max(0, Math.min(score, scale.length - 1));
  const low = Math.floor(score);
  const high = Math.ceil(score);
  const offset = score - low;
  const inverse = 1 - offset;
  return scale[low] * inverse + scale[high] * offset;
}
