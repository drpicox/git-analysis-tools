/**
 * @param {Array<Number>} array
 * @param {number} index
 * @returns {number}
 */
export default function scoreTable(array, index) {
  if (index >= array.length) index = array.length - 1;

  return array[index];
}
