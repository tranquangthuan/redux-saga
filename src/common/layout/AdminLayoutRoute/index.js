import { withStyles } from "@material-ui/core";
import React from "react";
import styes from "./style.js";
import { Route } from "react-router-dom";
import Dashboard from "../../../components/Dashboard/index";

class AdminLayoutRoute extends React.Component {
  render() {
    const { component: Component, name, ...remainProp } = this.props;
    return (
      <Route
        {...remainProp}
        render={(routeProps) => {
          return (
            <Dashboard name={name}>
              <Component {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}

export default withStyles(styes)(AdminLayoutRoute);
