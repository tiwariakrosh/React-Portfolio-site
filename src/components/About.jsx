import React from 'react'
import aboutProf from '../image/profile.png';

export default function About() {
    return (
        <div className='aboutMain' id='about'>
            <h2 className="secTitle">About Me</h2>
            <div className="aboutContainer">
                <div className="aboutText">
                    <p>I am a Front-End developer passionate about the latest technology and interactive design. I develop Websites and web applications using HTML, CSS, Bootstrap, Javascript, ReactJs, WordPress, PHP, Laravel, and MySQL. I have Knowledge in Responsive design, Cross Browser Compatibility, Code Optimization to improve performance, and fixing UI bugs.</p>
                </div>
                <div className="aboutProfie">
                    <div className="profBack">
                        <figure className='profileCont'>
                            <img src={aboutProf} alt="Akrosh Tiwari profile" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
