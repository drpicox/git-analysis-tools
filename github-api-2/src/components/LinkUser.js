import React from "react";
import { Link } from "react-router-dom";
import { getAliasForLogin } from "../students";

export function LinkUser({ login }) {
  if (!login) return null;
  const alias = getAliasForLogin(login);
  return <Link to={`/users/${alias}`}>@{alias}</Link>;
}
