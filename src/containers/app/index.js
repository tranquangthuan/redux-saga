import React from "react";
import stye from "./style.js";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../common/themes/index.js";
import { Provider } from "react-redux";
import configStore from "../../redux/configStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading/index.js";
import TrainingModal from "../../components/TrainingModal/index.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ADMIN_ROUTES } from "../../constants/index.js";
import AdminLayoutRoute from "../../common/layout/AdminLayoutRoute/index.js";
import { CssBaseline } from "@material-ui/core";

const store = configStore();

class App extends React.Component {
  renderAdminRoutes = () => {
    var xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
          name={route.name}
        />
      );
    });

    return xhtml;
  };
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalLoading />
            <ToastContainer />
            <TrainingModal />
            <Switch>{this.renderAdminRoutes()}</Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(stye)(App);
