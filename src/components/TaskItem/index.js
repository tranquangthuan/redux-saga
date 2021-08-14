import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./style.js";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class TaskItem extends React.Component {
  render() {
    const { task, status, classes, onClickEdit, onClickDelete } = this.props;
    const { id, title } = task;
    return (
      <Card key={id}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={() => onClickEdit(task)}
          >
            <EditIcon />
          </Fab>
          <Fab color="primary" aria-label="Delete" size="small" onClick = {() => onClickDelete(task)}>
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
