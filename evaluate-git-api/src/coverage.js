const fs = require("fs");
const git = require("./git");

const { exec } = require("child_process");

async function execAsync(cmd) {
  return new Promise(function(resolve) {
    exec(cmd, function(err, stdout, stderr) {
      resolve({ stdout, stderr, err });
    });
  });
}

async function mvnTest() {
  const { stdout, stderr } = await execAsync(
    // "rm -fr target; mvn test | grep -E '\\[[^]]+\\] Tests run: .* in com.drpicox.game'"
    "rm -fr target src/test/java/com/drpicox/game/BlogTest.java; mvn '-Dtest=*' -Dmaven.test.failure.ignore=true test | grep -E '\\[[^]]+\\] Tests run:'"
  );
  const [total, passed] = (stdout + "\n" + stderr)
    .split("\n")
    .map(l =>
      l.match(
        /Tests run: (\d+), Failures: (\d+), Errors: (\d+), Skipped: (\d+)/
      )
    )
    .filter(Boolean)
    .map(([, total, failures, errors, skipped]) => [
      +total,
      total - failures - errors - skipped
    ])
    .slice(-1)[0] || [0, 0];

  return { total, passed };
}

async function readJacoco(total) {
  if (!total)
    return {
      lines: { found: 1, hit: 0 },
      branches: { found: 1, hit: 0 }
    };

  return new Promise((resolve, reject) => {
    fs.readFile("target/site/jacoco/jacoco.csv", "utf8", function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  }).then(data => {
    const [branchMissed, branchCovered, lineMissed, lineCovered] = data
      .split("\n")
      .slice(1)
      .filter(Boolean)
      .map(l =>
        l
          .split(",")
          .slice(5, 9)
          .map(x => +x)
      )
      .reduce(
        ([a0, a1, a2, a3], [b0, b1, b2, b3]) => [
          a0 + b0,
          a1 + b1,
          a2 + b2,
          a3 + b3
        ],
        [0, 0, 0, 0]
      );
    return {
      lines: { found: lineMissed + lineCovered, hit: lineCovered },
      branches: { found: branchMissed + branchCovered, hit: branchCovered }
    };
  });
}

async function yarnTest() {
  const { stderr } = await execAsync(
    "rm -fr coverage; yarn; CI=1 yarn test -i --coverage --coveragePathIgnorePatterns 'src/www/__test__'"
  );

  const result = stderr
    .split("\n")
    .filter(l => l.startsWith("Tests:"))
    .slice(-1)[0];

  const passed = +(result.match(/(\d+) passed/) || [0, 0])[1];
  const total = +result.match(/(\d+) total/)[1] || 1;
  return { total, passed };
}

async function readJestCoverage() {
  return new Promise((resolve, reject) => {
    fs.readFile("coverage/lcov.info", "utf8", function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  })
    .then(data => {
      return data
        .split("\n")
        .filter(l => l.match(/^(BRF|BRH|LF|LH):/))
        .map(l => l.split(":"))
        .reduce((r, [k, n]) => ((r[k] += +n), r), {
          BRF: 0,
          BRH: 0,
          LF: 0,
          LH: 0
        });
    })
    .then(({ BRF, BRH, LF, LH }) => ({
      lines: { found: LF, hit: LH },
      branches: { found: BRF, hit: BRH }
    }));
}

async function coverage(req, res) {
  const { sha } = req.params;

  await git.checkout(sha);
  const javaTests = await mvnTest();
  const javaCoverage = await readJacoco(javaTests.total);
  const jsTests = await yarnTest();
  const jsCoverage = await readJestCoverage();

  res.json({
    java: { ...javaTests, ...javaCoverage },
    js: { ...jsTests, ...jsCoverage }
  });
}

module.exports = coverage;
