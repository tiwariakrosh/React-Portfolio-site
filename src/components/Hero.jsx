import React from 'react';
// import profile from '../image/profile.png'

export default function Hero() {
    return (
        <div className='HeroMain'>
            <div className="heroText">
                <h2>Hello,</h2>
                <h1>I'm Akrosh Tiwari<br />Front-End Developer</h1>
                <button className='resumeDownload'>Download Resume</button>
            </div>
            {/* <div className="heroProfile">
                <div className="imgContainer">
                    <img src={profile} alt="Akrosh Profile" />
                </div>
            </div> */}
        </div>
    )
}
