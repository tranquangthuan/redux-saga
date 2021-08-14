import { withStyles } from "@material-ui/core";
import React from "react";
import styles from "./style.js";
import Header from "./Header/index.js";
import TSidebar from "./TSidebar/index.js";
import { compose, bindActionCreators } from "redux";
import * as uiAction from "../../actions/ui";
import { connect } from "react-redux";
import classNames from "classnames";

class Dashboard extends React.Component {
  onToggleSidebar = (value) => {
    const { uiActionCreator } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreator;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };

  render() {
    const { children, classes, name, showSidebar } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header
          name={name}
          onToggleSidebar={this.onToggleSidebar}
          showSidebar={showSidebar}
        />
        <div className={classes.wrapper}>
          <TSidebar
            showSidebar={showSidebar}
            onToggleSidebar={this.onToggleSidebar}
          />
          <div
            className={classNames(classes.wrapperContent, {
              [classes.shiftLeft]: showSidebar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.ui.showSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreator: bindActionCreators(uiAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
