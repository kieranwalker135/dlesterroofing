import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import slideInfo from './SlideData'


export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3500,
            cssEase: "linear"
        };

        return (
            <div className="portfolioSlider">
                <Slider {...settings}>
                    {slideInfo.map((slideInfo) => {
                        return (
                            <div class="singleSlide">
                                <img src={slideInfo.image} alt={slideInfo.imgAlt} class={slideInfo.imgClass} /><div class="container">
                                <div class={slideInfo.captionClass}>
                                    

                                        <div class="row">
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <h2>{slideInfo.sliderCaption}</h2>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-sm-8 col-md-4">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <a href={slideInfo.btnLink} class={slideInfo.btnClass}>{slideInfo.btnText}</a>
                                                    </div>
                                                    <div class="col-6">
                                                        <a href={slideInfo.btnLink2} class={slideInfo.btnClass2}>{slideInfo.btnText2}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}
