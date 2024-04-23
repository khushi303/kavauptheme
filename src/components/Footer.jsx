// ========================Footer=====================//
import Link from "next/link";
import { Facebook, FooterLogo, Instagram, ShareBtn, Tweeter, Youtube } from "./common/Icons";

export default function Footer() {
    return (
        <div className="bg-white xl:pt-32 pt-16">
            <div className="container pt-0.5 xl:max-w-[1210px]">
                <div className="flex justify-between flex-wrap mb-12">
                    <div className="lg:w-9/12 w-full">
                        <div className="flex flex-wrap">
                            <ul className="sm:w-4/12 w-6/12">
                                <li className="text-xmd font-semibold leading-md text-darkblack lg:mb-5 mb-4">Company</li>
                                <li className="leading-mxxl">
                                    <Link href={'/'} className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        Home
                                    </Link>
                                </li>
                                <li className="leading-mxxl">
                                    <Link href={'/Solutions'} className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        Solutions
                                    </Link>
                                </li>
                                <li className="leading-mxxl">
                                    <Link href={'/webapps'} className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        Apps
                                    </Link>
                                </li>
                                <li className="leading-mxxl">
                                    <Link href={'/Services'} className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        Services
                                    </Link>
                                </li>
                            </ul>
                            <ul className="sm:w-4/12 w-6/12">
                                <li className="text-xmd font-semibold leading-md text-darkblack lg:mb-5 mb-4">Product</li>
                                <li className="leading-mxxl">
                                    <Link href={'/'} className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        Web apps
                                    </Link>
                                </li>
                                <li className="leading-mxxl">
                                    <Link href={'/'} className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        Mobile apps
                                    </Link>
                                </li>
                                <li className="leading-mxxl">
                                    <Link href={'/'} className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        Mac & desktop apps
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col lg:gap-5 gap-4 sm:w-4/12 w-6/12 sm:mt-0 mt-8">
                                <li className="text-xmd font-semibold leading-md text-darkblack">Contact</li>
                                <li className="leading-mxxl">
                                    <Link href="mailto:info@kava.com" className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        info@kava.com
                                    </Link>
                                </li>
                                <li className="leading-xxl max-w-[217px]">
                                    <Link href={'/'} className="text-sm font-normal text-lightgray-400 hover:text-navtexthover transition-all duration-300 ease-linear">
                                        1234, Lorem ipsum dolor sit amet, consectetuer.
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-2/12 w-full lg:mt-0 mt-8 flex  lg:justify-end">
                        <div>
                            <p className="text-xmd font-semibold leading-md text-darkblack">Get in touch</p>
                            <div className="max-w-[234px] rounded-md bg-bgemail flex p-1 w-full h-[45px] lg:mt-5 mt-4 lg:mb-16 mb-8">
                                <input type="text" placeholder="Your email address" className="bg-transparent text-xsm font-normal text-lightgray-500 rounded-md w-full outline-none border-none h-full pl-4 pr-1" />
                                <div>
                                    <button className="w-[35px] h-[35px] border-2 border-solid border-bgbtncolor hover:bg-white transition-all duration-300 ease-linear group rounded-full bg-bgbtncolor flex items-center justify-center leading-xxl"><ShareBtn /></button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href={'https://www.facebook.com/'} target="blank" className="w-10 h-10 rounded-full hover:bg-headingcolor transition-all duration-300 ease-linear border-[0.2px] border-solid group border-lightgray-400 hover:border-headingcolor flex items-center justify-center">
                                    <Facebook />
                                </Link>
                                <Link href={'https://www.youtube.com/'} target="blank" className="w-10 h-10 rounded-full hover:bg-headingcolor transition-all duration-300 ease-linear border-[0.2px] border-solid group border-lightgray-400 hover:border-headingcolor flex items-center justify-center">
                                    <Youtube />
                                </Link>
                                <Link href={'https://twitter.com/'} target="blank" className="w-10 h-10 rounded-full hover:bg-headingcolor transition-all duration-300 ease-linear border-[0.2px] border-solid group border-lightgray-400 hover:border-headingcolor flex items-center justify-center">
                                    <Tweeter />
                                </Link>
                                <Link href={'https://www.instagram.com/'} target="blank" className="w-10 h-10 rounded-full hover:bg-headingcolor transition-all duration-300 ease-linear border-[0.2px] border-solid group border-lightgray-400 hover:border-headingcolor flex items-center justify-center">
                                    <Instagram />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t-[0.5px] border-solid border-lightgray-700 pt-3 pb-6 flex items-center sm:justify-between justify-center sm:flex-row flex-col">
                    <Link href={'/'}><FooterLogo /></Link>
                    <p className="text-sm font-normal leading-mxl text-lightgray-500 text-nowrap sm:mt-0 mt-4">Copyright©{new Date().getFullYear()} kava up, LLC</p>
                </div>
            </div>
        </div>
    )
}

// #22283180