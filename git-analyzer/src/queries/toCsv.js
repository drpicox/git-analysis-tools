function toCsv(array) {
  const columns = [];

  array.forEach(item =>
    Object.keys(item).map(key => {
      if (!columns.includes(key)) columns.push(key);
    })
  );

  columns.sort();

  return [
    columns.join(","),
    ...array.map(item =>
      columns.map(column => JSON.stringify(item[column])).join(",")
    )
  ].join("\n");
}

module.exports = toCsv;
