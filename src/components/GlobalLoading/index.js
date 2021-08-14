import { withStyles } from "@material-ui/core";
import React from "react";
import stye from "./style.js";
import LoadingIcon from "../../assets/image/loading.gif";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as uiActions from "../../actions/ui";

class GlobalLoading extends React.Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(stye), withConnect)(GlobalLoading);
