import ducksReducer from "ducks-reducer";
import ducksMiddleware from "ducks-middleware";
import { createStore, applyMiddleware, compose } from "redux";

import * as currentRepo from "./currentRepo";
import * as repoIssues from "./repoIssues";
import * as view from "./view";

const ducks = { currentRepo, repoIssues, view };
const appReducer = ducksReducer(ducks);
const appMiddleware = ducksMiddleware(ducks);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default (initialState, ...middleware) => {
  return {
    ...createStore(
      appReducer,
      initialState,
      composeEnhancers(applyMiddleware(appMiddleware, ...middleware))
    )
  };
};
