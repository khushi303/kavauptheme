// {/* ================Service-section============== */ }
'use client'
import Image from "next/image";
import { useState } from "react";
import tabimg from '../../public/assets/images/webp/tabimg.webp'

export default function ServiceTabs() {
    const [opentab, setOpentab] = useState(1);
    return (
        <>
            <div className="container xl:max-w-[1190px] xl:pt-24 pt-16">
                <h2 data-aos="fade-right" className="sm:text-5xl text-lg font-semibold !leading-lg text-center xl:mb-20 mb-10 xl:mt-1">Services what we provide</h2>
                <div className="flex flex-wrap justify-between">
                    <ul data-aos="zoom-in" className="lg:w-6/12 flex lg:flex-col flex-row items-center gap-5 w-full max-lg:overflow-x-scroll tabs">
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 1 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D] " : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(1) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Saas</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 2 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(2) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Reporting</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 3 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(3) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>CMS</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 4 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(4) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block  w-full'>Legacy application support</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 5 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(5) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>System integrations</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 6 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(6) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Consulting</a></li>
                    </ul>
                    <div data-aos="zoom-in" className="lg:w-6/12 w-full lg:mt-0 mt-8">
                        <div className={opentab === 1 ? "block" : "hidden"}>
                            <h3 className="text-2xl font-semibold !leading-msxl lg:mb-5 mb-3 text-black-800">Saas</h3>
                            <p className="text-lg font-normal !leading-xxl text-lightgray-400 ff_nunito">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                            <div className="flex items-center justify-center lg:mt-[30px] mt-5">
                                <Image src={tabimg} alt="tabimg" className="max-w-[444px] w-full" />
                            </div>
                        </div>
                        <div className={opentab === 2 ? "block" : "hidden"}>
                            <h3 className="text-2xl font-semibold !leading-msxl lg:mb-5 mb-3 text-black-800 ">Reporting</h3>
                            <p className="text-lg font-normal !leading-xxl text-lightgray-400 ff_nunito">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                            <div className="flex items-center justify-center lg:mt-[30px] mt-5">
                                <Image src={tabimg} alt="tabimg" className="max-w-[444px] w-full" />
                            </div>
                        </div>
                        <div className={opentab === 3 ? "block" : "hidden"}>
                            <h3 className="text-2xl font-semibold !leading-msxl lg:mb-5 mb-3 text-black-800 ">CMS</h3>
                            <p className="text-lg font-normal !leading-xxl text-lightgray-400 ff_nunito">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                            <div className="flex items-center justify-center lg:mt-[30px] mt-5">
                                <Image src={tabimg} alt="tabimg" className="max-w-[444px] w-full" />
                            </div>
                        </div>
                        <div className={opentab === 4 ? "block" : "hidden"}>
                            <h3 className="text-2xl font-semibold !leading-msxl lg:mb-5 mb-3 text-black-800 ">Legacy application support</h3>
                            <p className="text-lg font-normal !leading-xxl text-lightgray-400 ff_nunito">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                            <div className="flex items-center justify-center lg:mt-[30px] mt-5">
                                <Image src={tabimg} alt="tabimg" className="max-w-[444px] w-full" />
                            </div>
                        </div>
                        <div className={opentab === 5 ? "block" : "hidden"}>
                            <h3 className="text-2xl font-semibold !leading-msxl lg:mb-5 mb-3 text-black-800 ">System integrations</h3>
                            <p className="text-lg font-normal !leading-xxl text-lightgray-400 ff_nunito">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                            <div className="flex items-center justify-center lg:mt-[30px] mt-5">
                                <Image src={tabimg} alt="tabimg" className="max-w-[444px] w-full" />
                            </div>
                        </div>
                        <div className={opentab === 6 ? "block" : "hidden"}>
                            <h3 className="text-2xl font-semibold !leading-msxl lg:mb-5 mb-3 text-black-800 ">Consulting</h3>
                            <p className="text-lg font-normal !leading-xxl text-lightgray-400 ff_nunito">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                            <div className="flex items-center justify-center lg:mt-[30px] mt-5">
                                <Image src={tabimg} alt="tabimg" className="max-w-[444px] w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}