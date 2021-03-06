const readFile = require("fs-readfile-promise");

module.exports = async function readJson(path) {
  const buffer = await readFile(path);
  const string = buffer.toString();
  const json = JSON.parse(string);
  return json;
};
