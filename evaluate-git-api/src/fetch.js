const git = require("./git");

async function coverage(req, res) {
  const { repo } = req.params;

  await git.fetch(repo);
  res.json({ ok: true });
}

module.exports = coverage;
