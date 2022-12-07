import React from 'react'
import simg from '../image/profile.png';
export default function Service() {
    const serviceList = [
        {
            id: 1,
            title: 'Frontend Design',
            brefDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis eaque reprehenderit cum beatae ratione eum! Temporibus expedita doloribus tempora asperiores?',
            img: simg
        },
        {
            id: 2,
            title: 'Graphic Design',
            brefDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis eaque reprehenderit cum beatae ratione eum! Temporibus expedita doloribus tempora asperiores?',
            img: simg
        },
        {
            id: 3,
            title: 'Wordpress Design',
            brefDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis eaque reprehenderit cum beatae ratione eum! Temporibus expedita doloribus tempora asperiores?',
            img: simg
        },
        {
            id: 4,
            title: 'Branding',
            brefDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis eaque reprehenderit cum beatae ratione eum! Temporibus expedita doloribus tempora asperiores?',
            img: simg
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
                        <p>{data.brefDesc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
