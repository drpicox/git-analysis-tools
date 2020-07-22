const makeWeakQuery = require("./makeWeakQuery");

function fetchCommitHistory(commit) {
  return new Promise((resolve, reject) => {
    const eventEmitter = commit.history();
    eventEmitter.on("end", resolve);
    eventEmitter.on("error", reject);
    eventEmitter.start();
  });
}

module.exports = makeWeakQuery(fetchCommitHistory);
