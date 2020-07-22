import { createSelector } from "reselect";
import { listUsers } from "./listUsers";

export function makeGetPrevUser() {
  return createSelector(
    listUsers,
    (_, user) => user,
    (users, user) => {
      const index = users.indexOf(user);
      return users[index - 1];
    }
  );
}
