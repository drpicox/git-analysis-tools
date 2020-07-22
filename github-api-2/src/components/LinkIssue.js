import React from "react";
import { Link } from "react-router-dom";

export function LinkIssue({ issue, pre } = { issue: null, pre: "" }) {
  if (!issue) return null;

  return (
    <Link
      to={`/repos/${issue.repository.name}/issues/${issue.number}`}
      title={issue.title}
    >
      {pre}
      {issue.repository.name.split("-").slice(-1)[0]}#{issue.number}
    </Link>
  );
}
