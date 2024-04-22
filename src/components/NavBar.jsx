"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { DropDownBtn, Logo } from "./common/Icons";
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const [isOpen, setOpen] = useState(false);
    const currentPath = usePathname();
    useEffect(() => {
        if (isOpen === true) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    });
    const [show, setShow] = useState(true)

    return (
        <>
            <div className="container xl:max-w-[1190px]">
                <div className="flex items-center justify-between lg:py-6 py-4">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                    <div className={`${isOpen ? "max-lg:left-0" : "max-lg:left-[-100%]"} flex max-lg:fixed max-lg:top-0 max-lg:h-full z-50 max-lg:w-full max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-bgprocess max-lg:min-h-screen max-lg:flex-col gap-10 items-center justify-center relative`}>
                        <Link href={'/'} className={`${currentPath === "/" ? "text-navtexthover" : "text-navtextcolor"} text-sm font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer`}>Home</Link>
                        <button className="flex items-center gap-2">
                            <Link href={'/webapps'} className={`${currentPath === "/webapps" ? "text-navtexthover" : "text-navtextcolor"} text-sm relative font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer`}>Apps
                            </Link>
                            <span onClick={() => setShow(!show)} className="pb-1"><DropDownBtn /></span>
                        </button>
                        <button className="flex items-center gap-2">
                            <Link href={'/Solutions'} className={`${currentPath === "/Solutions" ? "text-navtexthover" : "text-navtextcolor"} text-sm relative font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer`}>Solutions
                            </Link>
                            <span onClick={() => setShow(!show)} className="pb-1"><DropDownBtn /></span>
                        </button>
                        <button className="flex items-center gap-2">
                            <Link href={'/Services'} className={`${currentPath === "/Services" ? "text-navtexthover" : "text-navtextcolor"} text-sm relative font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer`}>Services
                            </Link>
                            <span onClick={() => setShow(!show)} className="pb-1"><DropDownBtn /></span>
                        </button>
                        <div className={`absolute top-[30px] left-7 w-[220px] h-[240px] border-[1.5px] border-solid border-bgcirclehead pt-3 z-40 bg-white rounded ${show ? 'hidden' : 'block'}`}>
                            <input type="text" placeholder="Type here" className="w-full outline-none py-2.5 border-0 text-[16px] font-normal leading-[19.2px] text-lightgray-900 placeholder:text-center placeholder:text-lightgray-900" />
                            <Link href={'/serviceapp'} className={`${currentPath === "/serviceapp" ? "border-bgcirclehead bg-bgprocess" : ""} text-[16px] font-normal leading-[19.2px] text-lightgray-900 text-center block py-2.5 border-l-[4.51px] border-transparent hover:border-bgcirclehead border-solid hover:bg-bgprocess transition-all duration-300 ease-linear mt-2.5`}>Android Apps</Link>
                            <Link href={'/'} className="text-[16px] font-normal leading-[19.2px] text-lightgray-900 text-center block py-2.5 border-l-[4.51px] border-transparent hover:border-bgcirclehead border-solid hover:bg-bgprocess transition-all duration-300 ease-linear mt-2.5">Our process</Link>
                            <Link href={'/'} className="text-[16px] font-normal leading-[19.2px] text-lightgray-900 text-center block py-2.5 border-l-[4.51px] border-transparent hover:border-bgcirclehead border-solid hover:bg-bgprocess transition-all duration-300 ease-linear mt-2.5">How we can help</Link>
                        </div>
                        <Link href={''} className="hover:text-navtexthover text-navtextcolor text-sm font-medium leading-xsm transition-all duration-300 ease-linear cursor-pointer">Contact Us</Link>
                    </div>
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