import React from 'react'
import cakehops from '../image/cakehops.webp'
import hopmeds from '../image/hopmeds.webp'
import keshab from '../image/keshabIntl.webp'
import rpFoundation from '../image/R.P._foundation.webp'
import hopkins from '../image/hopkinst.webp'
import fashionStore from '../image/Fashion_store.webp'


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
            img: cakehops,
            link: 'www.cakehops.com'
        },
        {
            id: 2,
            title: "Hopmeds",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: hopmeds,
            link: 'www.hopmeds.com'
        },
        {
            id: 3,
            title: "Computers Nepal",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: keshab,
            link: 'www.hopmeds.com'
        },
        {
            id: 4,
            title: "Hopkins IT Lab",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: hopkins,
            link: 'www.hopkinsit.com'
        },
        {
            id: 5,
            title: "R.P. Foundation",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: rpFoundation,
            link: 'www.hopkinsit.com'
        },
        {
            id: 6,
            title: "Fashion Store",
            proDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia optio maiores totam error. Dolores autem similique magni rerum laborum!",
            img: fashionStore,
            link: 'www.hopkinsit.com'
        }
    ]
    return (
        <div className='projectmain' id='project'>
            <h2 className='secTitle'>Recent Projects</h2>
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
                                <img src={d.img} alt={d.title} />
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
