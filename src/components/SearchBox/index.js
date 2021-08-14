import { withStyles } from "@material-ui/core";
import React from "react";
import styles from "./style.js";
import TextField from "@material-ui/core/TextField";

class SearchBox extends React.Component {
  render() {
    const { classes, onFilter } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          label="Standard"
          onChange={onFilter}
          autoComplete="off"
        />
      </form>
    );
  }
}

export default withStyles(styles)(SearchBox);
