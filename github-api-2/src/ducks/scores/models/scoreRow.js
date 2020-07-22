/**
 * @param {Array<{score: number}>} scores
 * @param {Array<number>|null} table
 * @returns {number}
 */
export function scoreRow(scores, table) {
  if (typeof table === "number" && scores.length) {
    return (
      scores
        .slice()
        .sort((a, b) => b.score - a.score)
        .slice(0, table)
        .reduce((a, s) => a + s.score, 0) / Math.min(table, scores.length)
    );
  }

  let score = 0;

  for (let i = 0; i < scores.length && i < table.length; i += 1) {
    score += scores[i].score * table[i];
  }

  const lastPco = table[table.length - 1];
  for (let i = table.length; i < scores.length; i += 1) {
    score += scores[i].score * lastPco;
  }

  return Math.min(1, score);
}
