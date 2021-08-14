import React from "react";
import { Box, Grid, withStyles } from "@material-ui/core";
import stye from "./style.js";
import TaskItem from "../TaskItem/index.js";

class TaskList extends React.Component {
  render() {
    const { classes, tasks, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Grid item md={4} xs={12} key={status}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div>
          {tasks.map((task, index) => {
            return (
              <TaskItem
                task={task}
                key={task.id}
                status={status}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(stye)(TaskList);
