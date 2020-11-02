import React from 'react'
import servicesHero from '../Assets/Images/slide1.jpg'

export const Services = () => {
    return(
        <div className="wrapper">
        <img src={servicesHero} alt="" class="img-fluid innerPageSlide"/>
            <div class="container wrapper">
                <div class="row">
                    <div class="col-12">
                        <h1>Services</h1>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
