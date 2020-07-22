import React from "react";
import NavButton from "./NavButton";
import RepoSelector from "./RepoSelector";

const mainViews = ["issues", "orphans", "users", "graphiql"];

export default () => (
  <div>
    <RepoSelector />
    {mainViews.map(main => (
      <NavButton key={main} view={{ main }}>
        {main}
      </NavButton>
    ))}
    <NavButton view={{ main: "issueEdit", index: 0 }}>edits</NavButton>
  </div>
);
