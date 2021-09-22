import React from "react";

const Header = ()=>{
    return (
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start left-container-style">
                        <h1 className="display-2">
                            Online Payments Made <br/> Easy for You
                        </h1>
                        <p className="pl-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h3>Get early access for you</h3>
                        <div className="input-group mt-3">
                            <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter Your Email"/>
                            <div className='input-group-button'>Get it now</div>
                        </div>
                    </div>
                    {/* ---------------- main header right side ----------------- */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                        <img src="https://www.picsum.photos/400/500" alt="firstimage" className="img-fluid"></img>
                        <img src="https://www.picsum.photos/200/200" alt="secondimage" className="img-fluid min-hero-img2"></img>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header;