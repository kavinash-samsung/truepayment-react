import React from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
    let data = {
        "firstname":"",
        "lastname" :"",
        "phone":"",
        "email":"",
        "address":"",
        "message":"",
        };
    const [userData, setUserData] = useState(data);
    
   
    const postUserData = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        setUserData({...userData,[name]:value});
    }

    const submitData = async (event) =>{
        event.preventDefault();
        const {firstname, lastname, phone, email, address, message} = userData;
        if(firstname!=="" && lastname!=="" && phone!=="" && email!=="" && address!=="" && message!==""){
            const response = fetch(
                "https://truepayments-d84e7-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
                        firstname,
                        lastname,
                        phone,
                        email,
                        address,
                        message,
                        }),
                }
                );
            
                setUserData(data);
                alert("Data stored in DB");
                    
            }
            else{
                
                alert("Fill all details");
                }

    }

    return(
        <>
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="contact-leftside col-12 col-lg-5">
                                <h1 className="main-header fw-bold">Connect With Our <br/> Sales Team.</h1>
                                <p className="main-hero-para">Lorem ipsum, dolor sit amet consectetur dolor sit amet,consectetur dolor sit amet consectetur</p>
                                <figure>
                                    <img src="https://www.picsum.photos/200/300" alt="contactUsImg" className="img-field"></img>
                                </figure>
                            </div>
                            <div className="contact-rightside col-12 col-lg-7">
                                <form method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input 
                                                type="text" 
                                                name="firstname" 
                                                id=""
                                                className="form-control" 
                                                placeholder="First Name"
                                                value={userData.firstname}
                                                onChange = {postUserData}
                                            />
                                            <input 
                                                type="text" 
                                                name="lastname" 
                                                id=""
                                                className="form-control" 
                                                placeholder="Last Name"
                                                value={userData.lastname}
                                                onChange = {postUserData}
                                            />
                                             
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input 
                                                type="text" 
                                                name="phone" 
                                                id=""
                                                className="form-control" 
                                                placeholder="Phone No"
                                                value={userData.phone}
                                                onChange = {postUserData}
                                            />
                                            <input 
                                                type="text" 
                                                name="email" 
                                                id=""
                                                className="form-control" 
                                                placeholder="Email ID"
                                                value={userData.email}
                                                onChange = {postUserData}
                                            />
                                             
                                        </div>
                                    </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input 
                                                    type="text" 
                                                    name="address" 
                                                    id=""
                                                    className="form-control" 
                                                    placeholder="Add Address"
                                                    value={userData.address}
                                                onChange = {postUserData}
                                                /> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input 
                                                    type="text" 
                                                    name="message" 
                                                    id=""
                                                    className="form-control" 
                                                    placeholder="Enter Your Message"
                                                    value={userData.message}
                                                    onChange = {postUserData}
                                                /> 
                                            </div>
                                        </div>
                                        <div className="form-check form-checkbox-style">
                                            <input 
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label className="form-check-label main-hero-para" for="flexCheckChecked">
                                                I agree that the True payments may contact me at the email address or phone number above.
                                            </label>

                                        </div>
                                        <button type="submit" className="btn btn-style w-100" onClick={submitData}>Submit</button>
                                    </form>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </section>
        </>
    );
}

export default Contact;