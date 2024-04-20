"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { DropDownBtn, Logo } from "./common/Icons";

export default function NavBar() {
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
                <div className="flex items-center justify-between lg:py-6 py-4">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                    <ul className={`${isOpen ? "left-0" : "left-[-100%]"} flex max-lg:fixed max-lg:top-0 max-lg:h-full z-50 max-lg:w-full max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-bgprocess max-lg:min-h-screen max-lg:flex-col gap-10 items-center justify-center`}>
                        <Link href={'/'} className="text-sm font-medium text-navtextcolor leading-xsm hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer">Home</Link>
                        <li className="flex items-center gap-2 leading-xsm cursor-pointer"><a href="#app" className="text-sm font-medium text-navtextcolor hover:text-navtexthover transition-all duration-300 ease-linear">Apps</a><span className="pb-1"><DropDownBtn /></span></li>
                        <Link href={'./Solutions'} className="flex items-center gap-2 leading-xsm text-sm font-medium text-navtextcolor hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer">Solutions <span className="pb-1"><DropDownBtn /></span></Link>
                        <Link href={'./Services'} className="flex items-center gap-2 leading-xsm text-sm font-medium text-navtextcolor hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer">Services <span className="pb-1"><DropDownBtn /></span></Link>
                        <Link href={'./Solutions'} className="flex items-center gap-2 leading-xsm text-sm font-medium text-navtextcolor hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer">Contact Us</Link>
                    </ul>
                    <div onClick={() => setOpen(!isOpen)} className='lg:hidden w-[28px] h-[20px] relative z-50 flex justify-between flex-col cursor-pointer'>
                        <span className={`${isOpen ? 'rotate-[50deg] translate-y-[14px]' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                        <span className={`${isOpen ? 'hidden' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                        <span className={`${isOpen ? 'rotate-[-50deg] translate-y-[-50%]' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                    </div>
                </div>
            </div>
        </>
    )
}