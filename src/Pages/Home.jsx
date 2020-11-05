import React from 'react';

import { Helmet } from 'react-helmet';

import ContactForm from '../Contact/index';
import ContactDetails from '../Components/contactDetails';
import Slider from '../Components/HomePageSlider/Slider';
import flatRoof from '../Assets/Images/flatroof.jpg';
import tiledRoof from '../Assets/Images/tiledroof.jpg';
import leadWork from '../Assets/Images/leadwork.jpg';
import fasciasSoffits from '../Assets/Images/fasciasoffits.jpg';
import Guttering from '../Assets/Images/guttering.jpg';
import chimneyWork from '../Assets/Images/chimneywork.jpg';
import contact from '../Assets/Images/contact.jpg';

export const Home = () => {
    return (

        <div id="siteContent">
            <Helmet>
                <title>D Lester Roofing </title>
                <meta name="D Lester Roofing" content="Welcome to D Lester Roofing, Maintenance & Repairs"></meta>

            </Helmet>
            <Slider />
            <div class="container wrapper">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1>D Lester Roofing Maintenance And Repairs</h1>
                        <p class="lead">Based in Ashford Middlesex and covering Staines, Walton, Weybridge, Hampton, Heathrow and surrounding areas.</p>
                        <p>All aspects of roofing maintenance and repairs undertaken at competitive prices.</p>
                        <p>Flat roofs, tiled roofs, lead work, fascias and soffits, guttering and chimney work.</p>
                    </div>
                </div>
            </div>
            <div class="container wrapper">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3 text-center">
                        <div class="serviceBox">
                            <a href="/Services"><img src={flatRoof} alt="Flat Roofs" class="img-fluid" />
                                <div class="serviceBoxInner">
                                    <h3>Flat Roofs</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 text-center">
                        <div class="serviceBox">
                            <a href="/Services"><img src={tiledRoof} alt="Tiled Roofs" class="img-fluid" />
                                <div class="serviceBoxInner">
                                    <h3>Tiled Roofs</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 text-center">
                        <div class="serviceBox">
                            <a href="/Services"><img src={leadWork} alt="Lead Work" class="img-fluid" />
                                <div class="serviceBoxInner">
                                    <h3>Lead Work</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 text-center">
                        <div class="serviceBox">
                            <a href="/Services"> <img src={fasciasSoffits} alt="Fascias & Soffits" class="img-fluid" />
                                <div class="serviceBoxInner">
                                    <h3>Fascias & Soffits</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 text-center">
                        <div class="serviceBox">
                            <a href="/Services"><img src={Guttering} alt="Guttering" class="img-fluid" />
                                <div class="serviceBoxInner">
                                    <h3>Guttering</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 text-center">
                        <div class="serviceBox">
                            <a href="/Services"> <img src={chimneyWork} alt="Chimney Work" class="img-fluid" />
                                <div class="serviceBoxInner">
                                    <h3>Chimney Work</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 text-center">
                        <div class="serviceBox">
                            <a href="/Services"> <img src={contact} alt="Get In Touch" class="img-fluid" />
                                <div class="serviceBoxInner">
                                    <h3>Get In Touch</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container wrapper">
                <div class="row">
                    <div class="col-12 text-center">
                        <p><strong>Established since 1983</strong> and experienced in all types of roofing repairs and maintenance.</p>
                        <p>Reliable and trustworthy.</p>
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





