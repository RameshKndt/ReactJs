import React from 'react';
import {Link,Switch,Route,useLocation, Outlet} from 'react-router-dom';
import CourseDetail from './CourseDetail';
function Courses(props){
    const { pathname } = useLocation();
  
    console.log("Path is-->",pathname) ; 
    console.log(props);
    return (
        <div>
            <Link to="/courses/reactjs"><h1> React JS</h1></Link>
            <Link to="/courses/angular"><h1> Angular JS</h1></Link>
            <Link to="/courses/vue"><h1> Vue JS</h1></Link>
            <Link to="/courses/es"><h1> ECMA SCRIPT6 </h1></Link>
            <Outlet/>
         </div>
    );   
}

export default Courses;

    