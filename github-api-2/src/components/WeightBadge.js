import React from "react";
import { Badge } from "react-bootstrap";

export function WeightBadge({ weight }) {
  let variant = "light";
  if (weight >= 1) variant = "dark";
  if (weight >= 3) variant = "secondary";
  if (weight >= 5) variant = "primary";
  if (weight >= 8) variant = "success";
  if (weight >= 13) variant = "warning";
  if (weight >= 20) variant = "danger";

  return <Badge variant={variant}>{weight}</Badge>;
}
