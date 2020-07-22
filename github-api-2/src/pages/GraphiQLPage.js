import React from "react";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";
import graphQLFetcher from "../lib/graphQLFetcher";

export const GraphiQLPage = () => <GraphiQL fetcher={graphQLFetcher} />;
