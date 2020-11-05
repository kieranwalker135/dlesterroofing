import React from 'react'
import { Helmet } from 'react-helmet'
import ContactForm from '../Contact/index';
import ContactDetails from '../Components/contactDetails';
import servicesHero from '../Assets/Images/services.jpg'
import chimney from '../Assets/Images/chimneys.jpg'

export const Services = () => {
    return (
        <div id="siteContent">
        <Helmet>
                <title>Services</title>
                <meta name="D Lester Roofing | Contact" content="All aspects of roofing maintenance and repairs are undertaken, from Flat Roofs, Tiled Roofs, Guttering, Chimneys, Lead Work & Fascias"></meta>
                
            </Helmet>
            <div className="wrapper">
                <img src={servicesHero} alt="Roofing Services" class="img-fluid innerPageSlide" />
                <div class="wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h1>Services</h1>
                                <p class="lead">All aspects of roofing maintenance and repairs are undertaken.</p>
                            </div>
                        </div>
                    </div></div>
                <div class="wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <ul>
                                            <li>Flat roofs</li>
                                            <li>Tiled roofs</li>
                                            <li>Lead work</li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <ul>
                                            <li>Guttering</li>
                                            <li>Fascias and soffits</li>
                                            <li>Chimneys taken down or re pointed</li>
                                        </ul>
                                    </div>
                                    <div class="col-12">
                                        <p><strong>No job is too small</strong></p>
                                    </div>
                                </div>

                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                                <img src={chimney} alt="Chimney" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="green-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Get In Touch</h2>
                            <p class="lead">Get in touch, and I will get back to you as soon as possible.</p>
                            <ContactDetails />
                        </div>
                    </div>
                </div>
                <div id="quick_contact">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
