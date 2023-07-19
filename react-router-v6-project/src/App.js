import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home, About, ContactUs } from "./Components";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";
import NoMatchExample from "./NoMatchExample";
import User from "./User";
import { BrowserRouter, Navigate, Outlet, Routes, redirect, useNavigate } from "react-router-dom";
import LoginForm from "./login/LoginForm";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from "react-router-dom";

import Navbar from "./Navbar";

import NoMatch from "./NoMatch";
import Logout from "./Logout";

function App() {
  const navigate = useNavigate();
  //<PrivateRoute> </PrivateRoute>
  return (
      <Routes>
        <Route path="/login" element= {<LoginForm/>}>
        </Route>        
        <Route path="/" element = {<Navbar />}>
          
          <Route path="/about" element={<About />}>  
          </Route>
          <Route path="/contactus" element={<ContactUs />}>
          </Route>

          <Route path="/user/:username" element={<User/>} />
          <Route path="/courses" element={<Courses />}>
            <Route path={`:courseId`} element={<CourseDetail/>}/>        
          </Route>
          <Route
            path="/logout"
            element={<Logout/>}
          ></Route>
      </Route>
      <Route path="*" component={NoMatch}></Route>
      </Routes>
    
  );
}
function PrivateRoute(props) {
  console.log("props vallue is ", props);
  let { children, ...rest } = props;
  console.log(children, rest);
  console.log("User-->", window.localStorage.getItem("user"));
  console.log(window.localStorage.getItem("user") != null);
  //{...rest}
  return (
    <Outlet
      element={({ location }) =>
        window.localStorage.getItem("user") ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
/*
The state object can be accessed via this.props.location.state in the redirected-to component.
*/
