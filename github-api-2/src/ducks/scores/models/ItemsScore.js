import { scoreRow } from "./scoreRow";

export class ItemsScore {
  constructor(items, table = [0.2, 0.2, 0.4, 0.2, 0.1, 0.1, 0.05]) {
    /** @type {{score:number}[]} */
    this.items = items;
    this.table = table;

    this.sortedItems = this._computeSortedItems();

    this.score = this._computeScore();
  }

  _computeSortedItems() {
    return this.items.slice().sort((a, b) => b.score - a.score);
  }

  _computeScore() {
    const { sortedItems, table } = this;
    return scoreRow(sortedItems, table);
  }
}
