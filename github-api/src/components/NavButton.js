import React from "react";
import { connect } from "react-redux";
import { setView } from "../ducks/view";

const NavButton = ({ children, view, dispatch, disabled }) => (
  <button onClick={() => dispatch(setView(view))} disabled={disabled}>
    {children}
  </button>
);

export default connect()(NavButton);
