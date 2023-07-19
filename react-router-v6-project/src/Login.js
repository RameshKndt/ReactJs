import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import LoginForm from './login/LoginForm';
function Login({props}){
    let navigate = useNavigate();
    console.log("Location is ",navigate);
    //console.log(history.location.state);
        

    return (
        <>
        <div>
          <LoginForm/>
        <h1>Login</h1>
        </div>
        <div>
        <button onClick={()=> {
            window.localStorage.setItem("user","Raju");
            navigate("/");
            }
        }> Login</button>
        </div>
        </>
    );

}
export default Login;