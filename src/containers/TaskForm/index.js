import { Box, Button, Grid, withStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import * as modalAction from "../../actions/modal";
import * as taskAction from "../../actions/task";
import renderSelectField from "../../components/FormHelper/Select";

import renderTextField from "../../components/FormHelper/TextField/index.js";
import styles from "./style.js";
import validate from "./validate";

class TaskForm extends React.Component {
  renderStatusSelection = () => {
    let xhtml = null;
    const { taskEditing } = this.props;

    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          label="Status"
          name="status"
          component={renderSelectField}
          type="select"
        >
          <option value={0}>Ready</option>
          <option value={1}>Inprogress</option>
          <option value={2}>Done</option>
        </Field>
      );
    }
    return xhtml;
  };

  handleSubmitForm = (data) => {
    const { taskActionCreator, taskEditing } = this.props;
    const { addTask, updateTask } = taskActionCreator;
    if (taskEditing && taskEditing.id) {
      //update
      updateTask(data.title, data.description, parseInt(data.status));
    } else {
      addTask(data.title, data.description);
    }
  };

  render() {
    const {
      modelActionCreator,
      handleSubmit,
      invalid,
      submitting,
      taskEditing,
    } = this.props;
    const { hideModal } = modelActionCreator;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Field
              label="Title"
              name="title"
              component={renderTextField}
              type="text"
              value={taskEditing ? taskEditing.title : ""}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              label="Description"
              name="description"
              component={renderTextField}
              type="text"
              value={taskEditing ? taskEditing.description : ""}
            />
          </Grid>
          <Grid item md={12}>
            {this.renderStatusSelection()}
          </Grid>
          <Grid item md={12}>
            <Box flexDirection="row-reverse" display="flex">
              <Button color="primary" variant="contained" onClick={hideModal}>
                Cancel
              </Button>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={invalid || submitting}
              >
                OK
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing
        ? state.task.taskEditing.description
        : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : 0,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modelActionCreator: bindActionCreators(modalAction, dispatch),
    taskActionCreator: bindActionCreators(taskAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReduxForm = reduxForm({ form: "TaskForm", validate });
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
