const fetch = require("node-fetch");
const process = require("process");

export async function getText(url, options = {}) {
  let headers = {
    Authorization: process.env.GITHUB_TOKEN
      ? "token " + process.env.GITHUB_TOKEN
      : "Basic " + process.env.GITHUB_AUTH,
    Accept: "application/vnd.github.diff",
    ...options.headers
  };

  const response = await fetch(url, {
    ...options,
    headers
  });

  return await response.text();
}
