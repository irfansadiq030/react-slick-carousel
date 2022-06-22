import React, { useState } from 'react'
import Slider from "react-slick";
import Slide from './Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderStyle.css'

const slideData = [
    {
        image: 'https://picsum.photos/400/350?img=4444'
    },
    {
        image: 'https://picsum.photos/400/350?img=4244'
    },
    {
        image: 'https://picsum.photos/400/350?img=476'
    },
    {
        image: 'https://picsum.photos/400/350?img=41'
    },
    {
        image: 'https://picsum.photos/400/350?img=421'
    },
    {
        image: 'https://picsum.photos/400/350?img=431'
    },
    {
        image: 'https://picsum.photos/400/350?img=471'
    }
]

const CarouselContainer = () => {
    const [sliderRef, setSliderRef] = useState(null)

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <>
            <div className="btnContainer">
                <button onClick={sliderRef?.slickPrev}><i className="fa-solid fa-angle-left"></i></button>
                <button onClick={sliderRef?.slickNext}><i className="fa-solid fa-angle-right"></i></button>
            </div>
            <div className="container">
                <Slider ref={setSliderRef} {...settings}>
                    {
                        slideData.map((item, index) => <Slide key={index} item={item} />)
                    }
                </Slider>
            </div>
            <span>
                Designed By - irfansadiq
            </span>
        </>
    )
}

export default CarouselContainer