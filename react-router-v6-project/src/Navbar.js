import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  Route,
  redirect,
} from "react-router-dom";
import { withRouter } from "./withRouter";
import { NavRoutes } from "./NavRoutes";

import "./App.css";
function Navbar() {
  console.log('NavBar component is ....')
  /*
    let loggedInUser  = window.localStorage.getItem("user");
    console.log("loggedInUser" ,loggedInUser);
    let path =  useHistory();
    console.log('Last History is ==> ',path);
    let {previousPath,setPreviousPath} = useState(path);
    */
  return (
    <div>
      <div className="navbar">
        <div className="nav-header">
          <h1> React Router</h1>
        </div>
        <div className="nav-div">
          <ul className="nav-link">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <Link to="/contactus">ContactUs</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
          <Outlet/>
      </div>
    </div>
  );
}
export default withRouter(Navbar);
