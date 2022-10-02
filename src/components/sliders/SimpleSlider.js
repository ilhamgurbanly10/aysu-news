import React from 'react';
import Slider from "react-slick";

function SimpleSlider(props) {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: "3000",
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return <Slider {...settings}>{props.children}</Slider> 
}
  
export default SimpleSlider;