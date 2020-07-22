function getPathType(path) {
  if (/\.md$/.test(path)) return "Markdown";
  if (/Tests?\.java$/.test(path)) return "JavaTest";
  if (/\.java$/.test(path)) return "Java";
  if (/\.spec\.jsx?$/.test(path) && /\/test\//) return "JsTest";
  if (/\.jsx?$/.test(path)) return "Js";
  return "unkown";
}

module.exports = getPathType;
