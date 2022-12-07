import React from 'react'
import proimg from '../image/programming_bg.jpg'

export default function Project(props) {

    const openInNewTab = url => {
        // 👇️ setting target to _blank with window.open
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const portfolioList = [
        {
            id: 1,
            title: "Cakehops",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: proimg,
            link: 'www.cakehops.com'
        },
        {
            id: 2,
            title: "Hopmeds",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: proimg,
            link: 'www.hopmeds.com'
        },
        {
            id: 3,
            title: "Computers Nepal",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: proimg,
            link: 'www.hopmeds.com'
        },
        {
            id: 4,
            title: "Hopkins IT Lab",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: proimg,
            link: 'www.hopkinsit.com'
        }
    ]
    return (
        <div className='projectmain' id='project'>
            <h2 className='secTitle'>Projects {props.name}</h2>
            <div className="projectContainer">
                {portfolioList.map((d) => (
                    <div key={d.id} className="projectCard">
                        <div className="projectDesc">
                            <h3>{d.title}</h3>
                            <p>{d.proDesc}</p>
                            <button className='proBtn' onClick={() => openInNewTab(d.link)}>Live Demo</button>
                        </div>
                        <div className="projectImg">
                            <figure>
                                <img src={d.img} alt="" />
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
