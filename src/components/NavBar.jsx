// ===========================NavBar==========================//
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { DropDownBtn, Logo } from "./common/Icons";
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const [isOpen, setOpen] = useState(true);
    const currentPath = usePathname();
    const [_document, set_document] = useState(null)
    useEffect(() => {
        set_document(document)
        if (isOpen === false) {
            document.body.classList.add('max-lg:overflow-hidden');
        } else {
            document.body.classList.remove('max-lg:overflow-hidden');
        }
    });
    const [show, setShow] = useState(true)
    return (
        <>
            <div className="container xl:max-w-[1190px] xl:pt-0 pt-10">
                <div className="flex items-center justify-between lg:py-6 py-4">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                    <div className={`${isOpen ? "max-lg:left-[-100%]" : "max-lg:left-0"} flex max-lg:fixed max-lg:top-0 max-lg:h-full z-50 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-bgprocess max-lg:min-h-screen max-lg:flex-col gap-10 items-center justify-center relative max-lg:bottom-0 max-lg:w-full`}>
                        <Link href={'/'} className={`${currentPath === "/" ? "text-navtexthover" : "text-navtextcolor"} text-sm font-medium leading-xsm hover:text-navtexthover transition-all duration-300 ease-linear cursor-pointer`}>Home</Link>
                        <button className="flex items-center gap-2">
                            <Link href={'/webapps'} className={`${currentPath === "/webapps" ? "text-navtexthover" : "text-navtextcolor"} text-sm relative hover:text-navtexthover font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer`}>Apps
                            </Link>
                            <span onClick={() => setShow(!show)} className="pb-1"><DropDownBtn /></span>
                        </button>
                        <button className="flex items-center gap-2">
                            <Link href={'/Solutions'} className={`${currentPath === "/Solutions" ? "text-navtexthover" : "text-navtextcolor"} text-sm relative hover:text-navtexthover font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer`}>Solutions
                            </Link>
                            <span onClick={() => setShow(!show)} className="pb-1"><DropDownBtn /></span>
                        </button>
                        <button className="flex items-center gap-2">
                            <Link href={'/Services'} className={`${currentPath === "/Services" ? "text-navtexthover" : "text-navtextcolor"} text-sm relative hover:text-navtexthover font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer`}>Services
                            </Link>
                            <span onClick={() => setShow(!show)} className="pb-1"><DropDownBtn /></span>
                        </button>
                        <div className={`absolute lg:top-[30px] top-[62%] lg:left-7 left-0 lg:right-[unset] mx-auto right-0 lg:w-[220px] lg:h-[240px] w-[150px] border-[1.5px] border-solid border-bgcirclehead pt-3 z-40 bg-white rounded shadow-[0px_15px_30px_0px_#0000001A] ${show ? 'hidden' : 'block'}`}>
                            <input type="text" placeholder="Type here" className="w-full px-1 outline-none py-2.5 border-0 text-xxsm font-normal leading-md text-lightgray-900 placeholder:text-center placeholder:text-lightgray-900" />
                            <Link href={'/serviceapp'} className={`${currentPath === "/serviceapp" ? "bg-bgprocess border-bgcirclehead" : "border-transparent"} text-xxsm font-normal leading-md text-lightgray-900 text-center block py-2.5 border-l-[4.51px] border-transparent hover:border-bgcirclehead border-solid hover:bg-bgprocess transition-all duration-300 ease-linear mt-2.5`}>Android Apps</Link>
                            <Link href={'/'} className="text-xxsm font-normal leading-md text-lightgray-900 text-center block py-2.5 border-l-[4.51px] border-transparent hover:border-bgcirclehead border-solid hover:bg-bgprocess transition-all duration-300 ease-linear mt-2.5">Our process</Link>
                            <Link href={'/'} className="text-xxsm font-normal leading-md text-lightgray-900 text-center block py-2.5 border-l-[4.51px] border-transparent hover:border-bgcirclehead border-solid hover:bg-bgprocess transition-all duration-300 ease-linear mt-2.5">How we can help</Link>
                        </div>
                        <Link href={''} className="hover:text-navtexthover text-navtextcolor text-sm font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer">Contact Us</Link>
                    </div>
                    <div onClick={() => setOpen(!isOpen)} className={`${isOpen ? "top-0" : "-top-8"} lg:hidden w-[28px] h-[20px] relative z-50 flex justify-between flex-col cursor-pointer transition-all duration-300 ease-linear`}>
                        <span className={`${isOpen ? '' : "rotate-[50deg] translate-y-[14px]"} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                        <span className={`${isOpen ? '' : "hidden"} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                        <span className={`${isOpen ? '' : "rotate-[-50deg] translate-y-[-50%]"} h-[3.4px] w-full duration-300 rounded-[3px] bg-navtexthover ease-linear transition-all`}></span>
                    </div>
                </div>
            </div>
        </>
    )
}