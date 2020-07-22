const { exec } = require("child_process");

async function asyncExec(cmd) {
  return new Promise(function(resolve, reject) {
    exec(cmd, function(err, stdout, stderr) {
      if (err)
        return (
          console.log("REJECT", err + "\n" + stdout + "\n" + stderr) ||
          reject(err + "\n" + stdout + "\n" + stderr)
        );
      resolve(stdout);
    });
  });
}

exports.blame = async function(fileName) {
  let output;
  try {
    output = await asyncExec(`git blame -t -l -e '${fileName}'`);
  } catch (err) {
    if (`${err}`.includes("no such path")) {
      return null;
    }
    throw err;
  }

  return output
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean)
    .map(l => {
      const [, sha, email, ts, text] = l.match(
        /^(.+) .<([^>]+)>[^\d]+(\d+)[^)]+..(.+)$/
      );
      return { sha, email, ts: +ts, text };
    });
};

exports.checkout = async function(sha) {
  return asyncExec(`git checkout -f ${sha}`);
};

exports.diffNumstat = async function(sha) {
  const output = await asyncExec(
    `git diff --numstat ${sha} | grep -v ^- | grep -v deploy/ | grep -E '\.(js|java|md)\}?$'`
  );

  return output
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean)
    .map(l => l.split("\t"))
    .map(([removedLines, addedLines, fileName]) => ({
      addedLines: +addedLines,
      removedLines: +removedLines,
      fileName: fileName.replace(/\{(.*) => .*\}/, "$1")
    }));
};

exports.fetch = async function(repo) {
  return asyncExec(`git fetch ${repo}`);
};
