import makeWeakReporter from "./makeWeakReporter";
import isBodyComplete from "./isBodyComplete";

const NOBODY = { author: "nobody", body: "" };

export default makeWeakReporter(issue => {
  if (!issue) return NOBODY;

  const author = issue.author.login;
  const body = issue.body;
  const edits = issue.userContentEdits.nodes;
  if (edits.length === 0) return { author, body };

  const firstEditComplete = edits
    .slice()
    .reverse()
    .filter(({ diff }) => isBodyComplete(diff))[0];
  if (!firstEditComplete) return { author, body };

  const firstAuthor = firstEditComplete.editor.login;
  const lastAuthorBody = edits.filter(
    ({ editor }) => editor.login === firstAuthor
  )[0].diff;

  return { author: firstAuthor, body: lastAuthorBody };
});
