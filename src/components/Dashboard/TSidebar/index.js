import { Drawer, withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { ADMIN_ROUTES } from "../../../constants/index";
import styles from "./style.js";
import { NavLink } from "react-router-dom";

class TSidebar extends React.Component {
  toggleDrawer = (value) => {
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  };

  renderList = () => {
    let xhtml = null;
    const { classes } = this.props;

    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((route) => {
            return (
              <NavLink
                key={route.path}
                to={route.path}
                exact={route.exact}
                className={classes.menuLink}
                activeClassName={classes.menuActive}
              >
                <ListItem key={route.path} className={classes.menuItem} button>
                  {route.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );

    return xhtml;
  };

  render() {
    const { classes, showSidebar } = this.props;
    return (
      <Drawer
        open={showSidebar}
        onClose={() => this.toggleDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

export default withStyles(styles)(TSidebar);
