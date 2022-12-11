import React from 'react'
import coding from '../image/coding.png';
import designing from '../image/graphic-design.png';
import wordpres from '../image/wordpress-logo.png';
import seo from '../image/seo.png';
export default function Service() {
    const serviceList = [
        {
            id: 1,
            title: 'Frontend Design',
            tools: 'HTML5, CSS3, JavaScript, ES6, ReactJs, Bootstrap, and Jquery.',
            brefDesc: 'Responsive websites built for an optimal user experience that aachives your business goals.',
            img: coding
        },
        {
            id: 2,
            title: 'Graphic Design',
            tools: 'Figma, Adobe XD, Canva, Sketch, and Adobe Photoshop.',
            brefDesc: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
            img: designing
        },
        {
            id: 3,
            title: 'Wordpress Design',
            tools: 'Elementor, WPForms, and WooCommerce.',
            brefDesc: 'Updating and maintaining your wordpress websites and custon wordpress theme development as well as WordPress CMS.',
            img: wordpres
        },
        {
            id: 4,
            title: 'SEO',
            tools: 'Google Analytics, Seobility, and W3c Validator.',
            brefDesc: 'Increasing the visibility of a website in search engine results, number of visitors to the website, and overall quality of the website.',
            img: seo
        },
    ]
    return (
        <div className='serviceMain' id='service'>
            <h2 className='secTitle'>Services</h2>
            <div className="serviceContainer">
                {serviceList.map((data) => (
                    <div key={data.id} className="serviceCard">
                        <div className="serviceImg">
                            <img src={data.img} alt="" />
                        </div>
                        <h4>{data.title}</h4>
                        <p><strong>Tools Use : </strong>{data.tools}</p>
                        <p>{data.brefDesc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
