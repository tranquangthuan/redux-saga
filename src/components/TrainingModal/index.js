import React from "react";
import { Modal, withStyles } from "@material-ui/core";
import stye from "./style.js";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalAction from "../../actions/modal";

class TrainingModal extends React.Component {
  render() {
    const { classes, component, modelActionCreator, open, title } = this.props;
    const { showModal, hideModal, changeModalTitle, changeModalContent } =
      modelActionCreator;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modelActionCreator: bindActionCreators(modalAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(stye), withConnect)(TrainingModal);
