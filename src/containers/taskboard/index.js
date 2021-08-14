import { Box, Button, Grid, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalAction from "../../actions/modal";
import * as taskAction from "../../actions/task";
import SearchBox from "../../components/SearchBox";
import TaskForm from "../TaskForm/index.js";
import TaskList from "../../components/TaskList/index.js";
import { STATUS } from "../../constants/index.js";
import styles from "./style.js";

class TaskBoard extends React.Component {
  handleOpen = () => {
    const { taskActionCreator } = this.props;
    const { setTaskEditing } = taskActionCreator;
    setTaskEditing(null);

    const { modelActionCreator } = this.props;
    const { showModal, changeModalTitle, changeModalContent } =
      modelActionCreator;
    showModal();
    changeModalTitle("Add new task");
    changeModalContent(<TaskForm />);
  };

  renderBoard = () => {
    var { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {STATUS.map((status, index) => {
          var taskFilter = listTask.filter((task) => {
            return task.status === status.value;
          });
          return (
            <TaskList
              tasks={taskFilter}
              status={status}
              key={index}
              onClickEdit={this.handleEdit}
              onClickDelete={this.showModalDelete}
            />
          );
        })}
      </Grid>
    );

    return xhtml;
  };

  handleEdit = (task) => {
    const { taskActionCreator } = this.props;
    const { setTaskEditing } = taskActionCreator;
    setTaskEditing(task);

    const { modelActionCreator } = this.props;
    const { showModal, changeModalTitle, changeModalContent } =
      modelActionCreator;
    showModal();
    changeModalTitle("Update");
    changeModalContent(<TaskForm />);
  };

  showModalDelete = (task) => {
    const { modelActionCreator, classes } = this.props;
    const { showModal, changeModalTitle, changeModalContent, hideModal } =
      modelActionCreator;
    showModal();
    changeModalTitle("Xoa Task");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Ban co muon xoa{" "}
          <span className={classes.confirmTextBold}>{task.title}</span>
        </div>
        <Box display="flex" flexDirection="row-reverse">
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
              Cancel
            </Button>
          </Box>
          <Box ml={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDeleteTask(task)}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </div>
    );
  };

  handleDeleteTask = (task) => {
    const { taskActionCreator, taskEditing } = this.props;
    const { deleteTask } = taskActionCreator;
    deleteTask(task.id);
  };

  loadData = () => {
    const { taskActionCreator } = this.props;
    const { fetchAllTask } = taskActionCreator;
    fetchAllTask();
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" onClick={this.handleOpen}>
          <AddIcon />
          Add new task
        </Button>
        <Box ml={1}>
          <Button variant="contained" color="primary" onClick={this.loadData}>
            Load Data
          </Button>
        </Box>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }

  onFilter = (event) => {
    var value = event.target.value;
    const { taskActionCreator } = this.props;
    const filterTask = taskActionCreator.filterTask;
    filterTask(value);
  };

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox onFilter={this.onFilter} />;
    return xhtml;
  };

  componentDidMount() {
    const { taskActionCreator } = this.props;
    const fetchAllTask = taskActionCreator.fetchAllTask;
    fetchAllTask();
  }
}

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreator: bindActionCreators(taskAction, dispatch),
    modelActionCreator: bindActionCreators(modalAction, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
