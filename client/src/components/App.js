import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Beach from "../pages/Beach";
import AddFavorite from "../pages/AddFavorite";
import UserDashboard from "../pages/UserDashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/NoMatch";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCogs, faMinus, faBell } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCogs, faMinus, faBell);
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/beach/:id" component={Beach} />
          <Route path="/AddFavorite/:id" component={AddFavorite} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={UserDashboard} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
