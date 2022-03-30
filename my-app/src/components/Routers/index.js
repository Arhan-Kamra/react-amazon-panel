import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Error404 from "../../pages/Error404/index";
import Header from "../Header/index";
import React from "react";
import SignIn from "../../pages/SignIn/index";
import SignUp from "../../pages/SignUp/index";
import Styles from "./style.module.scss";

const Routers = () => {
  return (
    <div>
      <Router>
        <ul className={`${Styles.navLinks} fixed top-0`}>
          <NavLink to='/sign-in' activeClassName={Styles.active}>
            Sign In
          </NavLink>
          <NavLink to='/sign-up' activeClassName={Styles.active}>
            Sign Up
          </NavLink>
        </ul>
        <Header />
        <Switch>
          <Route path='/reactjs-proj' exact>
            <SignUp />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
