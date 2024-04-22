"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrustedSlides } from "./common/MapData";

export default function TrustedSliders(props) {
    const { color } = props
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="xl:max-w-[1180px] container xl:py-24 xl:my-1 py-16">
                <h4 className="text-xmd text-center font-semibold leading-xl xl:mb-12 mb-8" style={{ color: props.color }}>Our Trusted Partners</h4>
                <Slider {...settings}>
                    {TrustedSlides.map((e, id) => {
                        return (
                            <div key={id}>
                                <div className="h-8 flex items-center justify-center">
                                    {e.imgsvg}
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}