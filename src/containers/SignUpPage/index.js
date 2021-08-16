import {
  Checkbox,
  FormControlLabel,
  TextField,
  withStyles,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import styes from "./style.js";

class SignUpPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">Sigup</Typography>
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
                  <TextField
                    id="cpassword"
                    label="cpassword"
                    type="password"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                  ></TextField>
                  <FormControlLabel
                    control={<Checkbox value="agree" />}
                    label="Dong y dieu khoan"
                    className={classes.fullWidth}
                  ></FormControlLabel>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Singup
                  </Button>
                  <div className="pt-1 text-md-center">
                    <Link to="/login">
                      <Button>Login</Button>
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

export default withStyles(styes)(SignUpPage);
