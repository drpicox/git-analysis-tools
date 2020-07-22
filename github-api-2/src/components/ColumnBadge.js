import React from "react";
import { Badge } from "react-bootstrap";

export function ColumnBadge({ column }) {
  let variant;
  switch (column) {
    case "backlog":
      variant = "info";
      break;
    case "develop":
      variant = "danger";
      break;
    case "review":
      variant = "warning";
      break;
    case "done":
      variant = "dark";
      break;
    default:
      variant = "light";
  }

  return (
    <Badge variant={variant} pill>
      {column}
    </Badge>
  );
}
