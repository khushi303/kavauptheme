"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { DropDownBtn, HeaderArrow, Logo } from "./common/Icons";
import ThemeDropdown from "./common/UseTheme";
import CommonBtn from "./common/CommonBtn";
import Image from "next/image";
import phoneimg from '../../public/assets/images/png/headerphoneimg.png'

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
            <div className="container xl:max-w-[1190px]">
                <div className="flex items-center justify-between lg:py-6 py-2">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                    <ul className={`${isOpen ? "left-0" : "left-[-100%]"} flex max-lg:fixed max-lg:top-0 max-lg:h-full z-50 max-lg:w-full max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-white max-lg:min-h-screen max-lg:flex-col gap-10 items-center justify-center`}>
                        <Link href={'/'} className="text-sm font-medium text-navtextcolor leading-xsm hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer">Home</Link>
                        <li className="flex items-center gap-2 leading-xsm cursor-pointer"><a href="#app" className="text-sm font-medium text-navtextcolor hover:text-navtexthover transition-all duration-300 ease-linear">Apps</a><span className="pb-1"><DropDownBtn /></span></li>
                        <Link href={'./Solutions'} className="flex items-center gap-2 leading-xsm text-sm font-medium text-navtextcolor hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer">Solutions <span className="pb-1"><DropDownBtn /></span></Link>
                        <Link href={'./Solutions'} className="flex items-center gap-2 leading-xsm text-sm font-medium text-navtextcolor hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer">Services <span className="pb-1"><DropDownBtn /></span></Link>
                        <Link href={'./Solutions'} className="flex items-center gap-2 leading-xsm text-sm font-medium text-navtextcolor hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer">Contact Us</Link>
                    </ul>
                    <div onClick={() => setOpen(!isOpen)} className='lg:hidden w-[28px] h-[20px] relative z-50 flex justify-between flex-col cursor-pointer'>
                        <span className={`${isOpen ? 'rotate-[50deg] translate-y-[14px]' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                        <span className={`${isOpen ? 'hidden' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                        <span className={`${isOpen ? 'rotate-[-50deg] translate-y-[-50%]' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                    </div>
                </div>
            </div>
            <div className="container xl:max-w-[1800px] mt-5">
                <div className="bg-bgheader rounded-xxl flex items-center justify-end xl:px-16 xl:py-10 py-6 2xl:pt-0 px-6">
                    <div className="flex flex-wrap flex-row items-center xl:ml-4 xl:max-w-[1389px]">
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
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}