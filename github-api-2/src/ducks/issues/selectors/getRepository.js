import { createWeakSelector } from "../../createWeakSelector";
import { getRepositories } from "./getRepositories";

export const getRepository = createWeakSelector(
  name => name,
  (state, name) => getRepositories(state)[name]
);
