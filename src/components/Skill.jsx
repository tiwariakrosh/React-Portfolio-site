import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Skill() {
    const skillList = [
        {
            id: 1,
            title: "HTML/CSS",
            progress: 85
        },
        {
            id: 2,
            title: "Javascript",
            progress: 65
        },
        {
            id: 3,
            title: "Bootstrap",
            progress: 85
        },
        {
            id: 4,
            title: "React JS",
            progress: 65
        },
        {
            id: 5,
            title: "Wordpress",
            progress: 55
        }
    ]
    return (
        <div className='skillMain' id='skill'>
            <h2 className='secTitle'>Skills</h2>
            <div className="skillContainer">
                {skillList.map((d) => (
                    <div key={d.id} className='circleBox'>
                        <CircularProgressbar
                            value={d.progress}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '18px',
                                pathTransitionDuration: 0.4,
                                pathColor: 'rgb(247 110 29)',
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                        <h5>{d.progress}%</h5>
                        <h4>{d.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
