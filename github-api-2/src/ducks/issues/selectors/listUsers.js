import { createWeakSelector } from "../../createWeakSelector";
import { getUsers } from "./getUsers";

export const listUsers = createWeakSelector(state =>
  Object.values(getUsers(state))
);
