import React, { Component } from "react";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import createDucksStore from "./ducks/createDucksStore";
import MainView from "./components/MainView";
import ViewIssues from "./components/ViewIssues";
import ViewIssueEdit from "./components/ViewIssueEdit";
import ViewGraphiQL from "./components/ViewGraphiQL";
import ViewMarkdown from "./components/ViewMarkdown";
import ViewUsers from "./components/ViewUsers";
import ViewOrphanIssues from "./components/ViewOrphanIssues";

const store = createDucksStore();
const components = {
  issues: ViewIssues,
  issueEdit: ViewIssueEdit,
  orphans: ViewOrphanIssues,
  users: ViewUsers,
  graphiql: ViewGraphiQL,
  markdown: ViewMarkdown,
  "": ViewGraphiQL
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ width: "100%" }}>
          <NavBar />
          <MainView components={components} />
        </div>
      </Provider>
    );
  }
}

export default App;
