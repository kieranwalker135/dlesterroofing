import React from 'react'
import { Helmet } from 'react-helmet'
import CForm from '../Components/Cform';
import contactHero from '../Assets/Images/contactslide.jpg'
import ContactForm from '../Contact/index';
import ContactDetails from '../Components/contactDetails';

export const Contact = () => {
    return (
        <div id="siteContent">
            <Helmet>
                <title>Contact </title>
                <meta name="D Lester Roofing | Contact" content="Get in touch today, and I will get back to you as soon as possible"></meta>
                
            </Helmet>
            <div className="wrapper">
                <img src={contactHero} alt="" class="img-fluid innerPageSlide" />
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1>Contact</h1>
                            <p class="lead">Dont hesitate to get in touch, I will get back to you as soon as possible</p>
                            <ContactDetails />
                        </div>
                    </div>
                </div>
                <div id="contactForm">
                <CForm />
                </div>
            </div>
        </div>
    )
}
