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
            proDesc: "Ecommerce website where users can buy and sell cake items. Technologies use HTML, CSS, Javascript, Bootstrap, Jquery and Media Queries",
            img: cakehops,
            link: 'https://cakehops.com/'
        },
        {
            id: 2,
            title: "Hopmeds",
            proDesc: "Ecommerce website where users can buy and sell medicines and medical equipments. Technologies use HTML, CSS, Javascript, Bootstrap, Jquery and Media Queries",
            img: hopmeds,
            link: 'https://hopmeds.com/'
        },
        {
            id: 3,
            title: "Computers Nepal",
            proDesc: "Ecommerce website where users can buy computer releted items. Technologies use HTML, CSS, Javascript, Bootstrap, Jquery and Media Queries",
            img: keshab,
            link: 'https://computersnepal.com/'
        },
        {
            id: 4,
            title: "Hopkins IT Lab",
            proDesc: "IT Company website. It's a completely responsive, user-friendly, and cross-browser compatibility supports.Technologies use HTML, CSS, Javascript, Bootstrap, Jquery and Media Queries",
            img: hopkins,
            link: 'https://hopkinsit.com.np/'
        },
        {
            id: 5,
            title: "R.P. Foundation",
            proDesc: "Organization website where users can buy and sell cake items. Technologies use HTML, CSS, Javascript, Bootstrap, Jquery and Media Queries",
            img: rpFoundation,
            link: 'https://rpfoundation.com.np/'
        },
        {
            id: 6,
            title: "Fashion Store",
            proDesc: "Ecommerce website where users can buy and sell Fashion items. Technologies use WordPress, WooCommerce, WPForms,and Elementer",
            tools: 'Wordpress, WooCommwece, Whistify, ',
            img: fashionStore,
            link: 'https://ecommerce-store.lovestoblog.com/'
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
                            <button className='proBtn' onClick={() => openInNewTab(d.link)}>Visit Site</button>
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
