import { TextField, withStyles } from "@material-ui/core";
import React from "react";
import styes from "./style.js";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">Login</Typography>
                  <TextField
                    id="email"
                    label="email"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                  ></TextField>
                  <TextField
                    id="password"
                    label="password"
                    type="password"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                  ></TextField>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Login
                  </Button>
                  <div className="pt-1 text-md-center">
                    <Link to="/signup">
                      <Button>Dang Ki tai khoan</Button>
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styes)(LoginPage);
