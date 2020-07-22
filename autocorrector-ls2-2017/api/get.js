const fetch = require("node-fetch");
const process = require("process");

export async function get(url, options = {}) {
  let headers = {
    Authorization: process.env.GITHUB_TOKEN
      ? "token " + process.env.GITHUB_TOKEN
      : "Basic " + process.env.GITHUB_AUTH,
    Accept: "application/json",
    "Content-Type": "application/json",
    ...options.headers
  };

  const response = await fetch(url, {
    responseType: "json",
    ...options,
    headers
  });

  let nextResult = null;
  const link = response.headers.get("Link");
  const match = link && link.match(/<([^>]+)>; rel="next"/);
  const nextUrl = match && match[1];
  if (nextUrl) {
    nextResult = await get(nextUrl, { ...options });
  }

  const result = await response.json();
  if (nextResult) {
    return [...result, ...nextResult];
  }
  return result;
}
