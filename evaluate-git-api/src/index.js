const PORT = 3999;
const WD = "/Volumes/Projects/tecnocampus/LS2/planets-game";

const express = require("express");
const wrap = require("./wrap");

process.chdir(WD);
const app = express();
app.get("/api/diff/:from/:to", wrap(require("./diff")));
app.get("/api/coverage/:sha", wrap(require("./coverage")));
app.get("/api/fetch/:repo", wrap(require("./fetch")));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
