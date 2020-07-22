import React from "react";
import { Route, Switch, Link } from "react-router-dom"; // react-router v4/v5
import { Navbar, Nav } from "react-bootstrap"; // react-router v4/v5
import "./App.css";
import {
  HomePage,
  ReposRepoPage,
  ReposPage,
  IssuesPage,
  IssuesDupPRPage,
  IssuesOrphansPage,
  ReposRepoIssuesNumberPage,
  UsersAliasPage,
  UsersPage,
  ScoresPage,
  ScoresTablePage,
  GraphiQLPage,
  CarouselPage
} from "./pages";
import { PunchcardBoxes } from "./components";

const notes = (
  <div style={{ background: "white", padding: "0 .5em" }}>
    <PunchcardBoxes scores={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
  </div>
);

const NavLink = ({ to, children }) => (
  <Link className="nav-link" to={to}>
    {children}
  </Link>
);

function App() {
  return (
    <>
      <Navbar bg="primary">
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/repos">Repos</NavLink>
          <NavLink to="/issues">Issues</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/graphiql">GraphiQL</NavLink>
          <NavLink>{notes} </NavLink>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/carousel" component={CarouselPage} />
        <Route exact path="/repos" component={ReposPage} />
        <Route exact path="/repos/:name" component={ReposRepoPage} />
        <Route
          exact
          path="/repos/:name/issues/:number"
          component={ReposRepoIssuesNumberPage}
        />
        <Route exact path="/issues" component={IssuesPage} />
        <Route exact path="/issues/duppr" component={IssuesDupPRPage} />
        <Route exact path="/issues/orphans" component={IssuesOrphansPage} />
        <Route exact path="/scores" component={ScoresPage} />
        <Route exact path="/scores-table" component={ScoresTablePage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/users/:alias" component={UsersAliasPage} />
        <Route exact path="/graphiql" component={GraphiQLPage} />
        <Route render={() => <div>Miss</div>} />
      </Switch>
    </>
  );
}

export default App;
