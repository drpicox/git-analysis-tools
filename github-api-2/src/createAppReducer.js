import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { issuesReducer, commitsReducer } from "./ducks";

const createAppReducer = history =>
  combineReducers({
    router: connectRouter(history),
    issues: issuesReducer,
    commits: commitsReducer
  });

export default createAppReducer;
