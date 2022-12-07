import React from 'react'
import aboutProf from '../image/profile.png';

export default function About() {
    return (
        <div className='aboutMain' id='about'>
            <h2 className="secTitle">About Me</h2>
            <div className="aboutContainer">
                <div className="aboutText">
                    <h3>Akrosh Tiwari</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quis provident saepe voluptatem similique quos obcaecati dolorem vero adipisci consequuntur culpa sit perspiciatis quisquam sed quas illum officia, ipsa ut.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum perferendis vero iusto est. Reiciendis.</p>
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
