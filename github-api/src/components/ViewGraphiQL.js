import React from "react";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";
import graphQLFetcher from "../graphQLFetcher";

export default () => <GraphiQL fetcher={graphQLFetcher} />;
