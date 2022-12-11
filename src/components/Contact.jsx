import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_itwbbjd', 'template_disapgn', form.current, '2wss9TpJFs0bD4m3S')
            .then((result) => {
                console.log(result.text);
                alert('Message Successfully Sent \n Thank You')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };


    return (
        <div className='contactMain' id='contact'>
            <h2 className='secTitle'>Contact Me</h2>
            <div className="contactContainer">
                <div className="contactForm">
                    <div className="socialLinks">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/akrosh-tiwari-9a1a42167/" target='_blank'><span className=''></span>Linkedin</a></li>
                            <li><a href="https://github.com/tiwariakrosh" target='_blank'><span className=''></span>Github</a></li>
                            <li><a href="https://www.instagram.com/iam_akrosh_tiwari/" target='_blank' ><span className=''></span>Instagram</a></li>
                        </ul>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <span className='topInp'>
                            <input type="text" name="name" placeholder='Full Name' id="fullname" />
                            <input type="email" name="email" id="email" placeholder='Email' required />
                        </span>
                        <input type="text" name="subject" id="subject" placeholder='Subject' />
                        <textarea name="message" id="message" placeholder='Message' rows="7" required></textarea>
                        <button className='formBtn' type="submit" id='button'>Send Message</button>
                    </form>
                </div>
                <div className="contactMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394335.4592587313!2d84.95657967441763!3d27.710262325168358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bbeb021a8c3%3A0xf5da322eefd636cd!2sJorpati%2C%2044600!5e0!3m2!1sen!2snp!4v1658494611111!5m2!1sen!2snp"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <footer>
                <p>Akrosh Tiwari &copy; {getCurrentYear()}, all rights reserved</p>
            </footer>
        </div>
    )
}
