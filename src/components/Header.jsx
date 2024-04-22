"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { DropDownBtn, HeaderArrow, Logo } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";
import Image from "next/image";
import phoneimg from '../../public/assets/images/webp/headerphoneimg.webp'

export default function Header() {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        if (isOpen === true) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    });
    return (
        <>
            <div className="container xl:max-w-[1820px] mt-5">
                <div className="bg-bgheader rounded-xxl flex items-center justify-end xl:px-16 xl:py-10 py-6 2xl:pt-0 px-6">
                    <div className="flex flex-wrap flex-row items-center xl:max-w-[1459px]">
                        <div className="lg:w-6/12 w-full lg:pr-5">
                            <h2 className="2xl:text-xxl xl:text-xl lg:text-xlg md:text-xxl font-semibold leading-lg sm:text-xlg text-xsmd text-navtextcolor">Custom <span className="text-headingcolor">software development </span>from concept to completion
                                accelerate growth through interactive app development</h2>
                            <div className="flex items-center sm:gap-7 gap-5 2xl:mt-12 mt-8 flex-wrap">
                                <CommonBtn btnname="Start Now" />
                                <a href="tel:+1234567890" className="text-navtextcolor text-nowrap xl:pl-0.5 flex items-center gap-4 text-sm font-semibold leading-xsm">Try it for free <span><HeaderArrow /></span></a>
                            </div>
                        </div>
                        <div className="lg:w-6/12 relative w-full lg:mt-0 mt-8">
                            <Image src={phoneimg} alt="phoneimg" className="w-full relative z-10" />
                            <div className="absolute left-0 right-0 flex items-center justify-center top-0 bottom-0">
                                <div className="2xl:max-w-[661px] 2xl:max-h-[661px] xl:max-w-[530px] xl:max-h-[530px] lg:max-w-[450px] lg:max-h-[450px] max-w-[661px] max-h-[661px]   w-full h-full bg-bgcircle rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </>
    );
}