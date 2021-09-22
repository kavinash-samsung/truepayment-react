import React from "react";
import { NavLink } from "react-router-dom";


const Error404 = () =>{
    return (
        <>
            <div id="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>We Are Sorry Page Not Found!</h2>
                <p>The page you are looking for might 
                    have been removed had its name changed 
                    or is temporarily unavailable. 
                </p>
                <NavLink to="/" className="btn btn-style">Back To Homepage</NavLink>
            </div>
        </>
    );
}

export default Error404;