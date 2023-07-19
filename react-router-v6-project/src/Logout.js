import React ,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(){
    // /logout => rendering => Nothing rendering 
    // we are doing logout function calling, redirecting to login page.
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("Logout Called");
        window.localStorage.removeItem("user");
        return navigate("/login");
    },[]);

    return <></>;
}

export default Logout;