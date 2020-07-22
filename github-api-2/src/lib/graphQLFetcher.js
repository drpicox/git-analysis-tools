export default graphQLParams => {
  return fetch("https://api.github.com/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: [
        "application/vnd.github.starfire-preview+json",
        "application/vnd.github.starfox-preview+json"
      ].join(","),
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
      // Authorization: `Basic ${process.env.REACT_APP_GITHUB_AUTH}`
    },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
};
