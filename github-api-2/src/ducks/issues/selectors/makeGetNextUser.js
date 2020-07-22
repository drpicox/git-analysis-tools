import { createSelector } from "reselect";
import { listUsers } from "./listUsers";

export function makeGetNextUser() {
  return createSelector(
    listUsers,
    (_, user) => user,
    (users, user) => {
      const index = users.indexOf(user);
      window.us = users;
      window.u = user;
      return users[index + 1];
    }
  );
}
