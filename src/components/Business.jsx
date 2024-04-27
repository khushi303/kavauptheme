// {/* ========================Business======================== */ }
'use client'
import Image from "next/image";
import { useState } from "react";
import businessimg from '../../public/assets/images/svg/businessimg.svg'
import { LinearTick } from "./common/Icons";
import { AppData, TabData } from "./common/MapData";

export default function Business() {
    const [opentab, setOpentab] = useState(1);
    return (
        <>

            <div className="container xl:max-w-[1190px] xl:pt-24 pt-11">
                <h2 data-aos="fade-right" className="2xl:text-xxl xl:text-5xl lg:text-4xl md:text-xxl font-semibold !leading-lg sm:text-4xl text-xd text-lightgray-800 text-center max-w-[832px] mx-auto xl:mt-1">What we have solutions on this platform</h2>
                <div className="flex flex-wrap justify-between xl:mt-20 mt-10">
                    <ul data-aos="zoom-in" className="lg:w-5/12 flex lg:flex-col flex-row gap-5 w-full max-lg:overflow-x-scroll tabs">
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 1 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D] " : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(1) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Business</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 2 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(2) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>E-commerce</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 3 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(3) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Organized Communications</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 4 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(4) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block  w-full'>Chat</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 5 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(5) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Streaming Video / Audio</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 6 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(6) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Social Media</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 7 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(7) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Photo / Video editing</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 8 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(8) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Maps</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 9 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(9) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Offline with data sync</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 10 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(10) }} className='text-2xl whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Bluetooth</a></li>
                    </ul>
                    <div data-aos="zoom-in" className="lg:w-7/12 flex lg:justify-end w-full lg:mt-0 mt-10">
                        {
                            TabData.map((data, index) => {
                                return (

                                    <div key={index} className={opentab === data.index ? "block" : "hidden"}>
                                        <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                                        <h4 className="text-sd font-semibold text-lightgray-800 !leading-lg xl:mt-7 mt-5 lg:max-w-[555px]">{data.heading}</h4>
                                        <p className="text-lg font-normal !leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 lg:max-w-[516px]">Take your business to a new level by creating an app with an online platform.</p>
                                        <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                            {AppData.map((e, ind) => {
                                                return (
                                                    <div key={ind} className="flex items-center gap-3.5">
                                                        <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                             <LinearTick fillpath={data.fillpath} idpath={data.idpath} />
                                                        </div>
                                                        <p className="text-lg font-normal !leading-xxl text-lightgray-900">{e.content}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                )
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}
