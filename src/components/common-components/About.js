import React, { useEffect, useState } from "react";
import Section_heading from "./Section_heading";
import ProfileImage from '../../images/banner-img.jpg';
import resume from '../../docs/Prakash_Parmar_Resume.pdf';








function About() {



    return (

        <>




            <section className="about gp sky-bg overlay over-hidden relative">
                <div className="container">
                    <Section_heading
                        heading='About Me'
                        subHeading='Why Choose Me ?'
                    />
                    <div className=" ">
                        <div class="card">
                            <div className="card-inner">
                                {/* <h1 class="title">Designed For Work</h1> */}

                                <p class="subtitle">I’ve been working from 1.8+ year as a
                                    Frontend Developer. During that time
                                    I’ve been trained software platforms
                                    and systems. I have experience in
                                    React js, WordPress, HTML5, CSS3,
                                    SCSS, Jquery, Javascript and
                                    Bootstrap. I am Passionate about
                                    implementing and launching new
                                    projects. Looking to start the career as
                                    Full-Stack Frontend Developer with a
                                    reputed firm driven by technology.
                                    </p>
                                {/* <ul className="about-skill d-flex">
                                    <li>the first ever</li>
                                    <li>the first ever</li>
                                    <li>the first ever</li>
                                    <li>the first ever</li>
                                    <li>the first ever</li>
                                    <li>the first ever</li>

                                </ul> */}
                                <div className="btn-group-two">


                                    <a className="primary-btn" href="tel:8866808798">Hire Me</a>
                                    <a target="_blank" className="primary-btn two" href={resume}>Download CV</a>
                                </div>

                            </div>
                            <div className="profile-image">


                                <img src={ProfileImage} alt="Profile Image" />
                            </div>
                        </div>

                        <div class="blob"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;