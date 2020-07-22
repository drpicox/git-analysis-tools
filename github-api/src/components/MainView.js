import React from "react";
import { connect } from "react-redux";
import { getView } from "../ducks/view";

const MainView = ({ view, components }) => {
  const Component = components[view.main];
  if (!Component)
    return <div>Unknown view: "{JSON.stringify(view.main)}".</div>;

  return <Component {...view} />;
};

export default connect(state => ({ view: getView(state) }))(MainView);
