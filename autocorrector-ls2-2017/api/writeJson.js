const writeFile = require("fs-writefile-promise");

export async function writeJson(path, object) {
  const string = JSON.stringify(object, null, 2);
  await writeFile(path, string);
}
