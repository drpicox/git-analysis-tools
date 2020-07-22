import indexBy from "./lib/indexBy";

const students = `
Group	Name	Alias
Neptune		drpicox	who
`
  .toLowerCase()
  .split("\n")
  .filter(Boolean)
  .map(x => x.split("\t"))
  .map(([team, name, login, alias]) => ({ team, name, login, alias }));

const studentsByLogin = indexBy(students, "login");
const studentsByAlias = indexBy(students, "alias");

if (Object.keys(studentsByLogin).length > Object.keys(studentsByAlias).length)
  throw new Error("Repeated Student Alias");

export function getAliasForLogin(login) {
  login = login.toLowerCase();
  if (!studentsByLogin[login]) throw new Error(`Unknown login "${login}"`);
  return studentsByLogin[login].alias;
}

export function getLoginForAlias(alias) {
  alias = alias.toLowerCase();
  if (!studentsByAlias[alias]) throw new Error(`Unknown alias "${alias}"`);
  return studentsByAlias[alias].login;
}
