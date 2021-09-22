import React from "react";

import Navbar from "../navbar";
import Error404 from "../Error404";
import Footer from "../Footer";

const Error = ()=>{
    return (
        <>
        <Navbar/>
        <Error404/>
        <Footer/>
        </>
    );
}

export default Error;