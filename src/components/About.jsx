import React from 'react'
import aboutProf from '../image/profile.jpg';

export default function About() {
    return (
        <div className='aboutMain' id='about'>
            <h2 className="secTitle">About Me</h2>
            <div className="aboutContainer">
                <div className="aboutText">
                    {/* <h3>Akrosh Tiwari</h3> */}
                    <p>I am a Front-End developer over 2 years of experience. I’m an enthusiastic, responsible, and hardworking IT person working on different projects. I can work well both in a team environment as well as using my initiative. I can work well under pressure and adhere to strict deadlines.</p>
                </div>
                <div className="aboutProfie">
                    <div className="profBack">
                        <figure className='profileCont'>
                            <img src={aboutProf} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
