import React from 'react'

export default function Navbar() {
    return (
        <div className='NavMain'>
            <div className="logo"><a href="#home">AKROSH</a></div>

            <div className="nav">
                <div className="hamburger" id='menuToggle'>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className='navItem'>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#skill">Skill</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
