import { createWeakSelector } from "../../createWeakSelector";
import { getUsers } from "./getUsers";

export const getUser = createWeakSelector(
  login => login,
  (state, login) => getUsers(state)[login]
);
