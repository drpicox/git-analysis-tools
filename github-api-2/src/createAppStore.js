import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import createAppReducer from "./createAppReducer";
import { commitsMiddleware } from "./ducks";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createAppStore = (history, preloadedState) =>
  createStore(
    createAppReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        commitsMiddleware,
        thunk
        // ... other middlewares ...
      )
    )
  );

export default createAppStore;
