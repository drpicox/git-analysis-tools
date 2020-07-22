const readFile = require("fs-readfile-promise");

export async function readText(path) {
  const buffer = await readFile(path);
  const string = buffer.toString();
  return string;
}
