import React from "react";
import { Badge } from "react-bootstrap";
import { css } from "emotion";
import { LinkIssue } from "./LinkIssue";

export function ReviewIssueBadge({ review }) {
  if (!review) return null;

  let variant;
  switch (review.state.toLowerCase()) {
    case "pending":
      variant = "warning";
      break;
    case "commented":
      variant = "info";
      break;
    case "approved":
      variant = "success";
      break;
    case "changes_required":
      variant = "danger";
      break;
    default:
      variant = "light";
  }

  return (
    <Badge
      variant={variant}
      pill
      className={css`
        a {
          color: inherit;
        }
      `}
    >
      <a href={review.url} target="_blank" rel="noopener noreferrer">
        {review.state}
      </a>{" "}
      for <LinkIssue issue={review.issue} />
    </Badge>
  );
}
