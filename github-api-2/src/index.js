import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "bootswatch/dist/minty/bootstrap.css";
// import "bootswatch/dist/darkly/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createAppStore from "./createAppStore";

const issues = JSON.parse(localStorage.getItem("issues") || "[]");
const history = createBrowserHistory();
const store = createAppStore(history);

store.dispatch({ type: "ADD_ISSUES", issues });

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
