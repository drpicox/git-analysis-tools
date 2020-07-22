import React from "react";
import { connect } from "react-redux";
import { setCurrentRepo, getCurrentRepo } from "../ducks/currentRepo";

const repos = [
  "adventure-game-athens",
  "adventure-game-berlin",
  "adventure-game-cardiff",
  "adventure-game-dublin"
];

const RepoSelector = ({ currentRepo, dispatch }) => (
  <select
    value={currentRepo}
    onChange={({ target: { value } }) => dispatch(setCurrentRepo(value))}
  >
    {!currentRepo && <option value="" />}
    {repos.map(repo => (
      <option value={repo} key={repo}>
        {repo}
      </option>
    ))}
  </select>
);

export default connect(state => ({ currentRepo: getCurrentRepo(state) }))(
  RepoSelector
);
