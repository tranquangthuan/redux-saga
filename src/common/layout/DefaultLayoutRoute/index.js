import { withStyles } from "@material-ui/core";
import React from "react";
import styes from "./style.js";
import { Route } from "react-router-dom";
import Dashboard from "../../../components/Dashboard/index";

class DefaultLayoutRoute extends React.Component {
  render() {
    const { component: Component, name, ...remainProp } = this.props;
    return (
      <Route
        {...remainProp}
        render={(routeProps) => {
          return <Component {...routeProps} />;
        }}
      />
    );
  }
}

export default withStyles(styes)(DefaultLayoutRoute);
