'use client'
import Image from "next/image";
import { useState } from "react";
import businessimg from '../../public/assets/images/svg/businessimg.svg'
import { LinearTick } from "./common/Icons";
import { AppData } from "./common/MapData";

export default function Business() {
    const [opentab, setOpentab] = useState(1);
    return (
        <>
            <div className="container xl:max-w-[1190px] xl:pt-24 pt-11">
                <h2 className="2xl:text-xxl xl:text-xl lg:text-xlg md:text-xxl font-semibold leading-lg sm:text-xlg text-xsmd text-lightgray-800 text-center max-w-[832px] mx-auto xl:mt-1">What we have solutions on this platform</h2>
                <div className="flex flex-wrap justify-between xl:mt-20 mt-10">
                    <ul className="lg:w-5/12 flex lg:flex-col flex-row gap-5 w-full max-lg:overflow-x-scroll tabs">
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 1 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D] " : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(1) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Business</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 2 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(2) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>E-commerce</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 3 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(3) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Organized Communications</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 4 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(4) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block  w-full'>Chat</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 5 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(5) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Streaming Video / Audio</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 6 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(6) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Social Media</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 7 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(7) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Photo / Video editing</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 8 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(8) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Maps</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 9 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(9) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Offline with data sync</a></li>
                        <li className={`lg:py-[22px] py-4 lg:pl-[38px] lg:pr-0 px-5 max-w-[430px] lg:w-full w-[400px] transition-all duration-300 ease-linear relative ${opentab === 10 ? "bg-bgprocess after:absolute after:top-0 after:bottom-0 after:left-0 after:w-2 after:bg-activelinear after:h-full after:rounded-s-lg rounded-lg shadow-[0px_15px_30px_0px_#6DA4B60D]" : ''}`}><a href="" onClick={(e) => { e.preventDefault(); setOpentab(10) }} className='text-xmd whitespace-nowrap font-semibold text-lightgray-800 block w-full'>Bluetooth</a></li>
                    </ul>
                    <div className="lg:w-7/12 flex lg:justify-end w-full lg:mt-0 mt-10">
                        <div className={opentab === 1 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a business app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 2 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a E-commerce app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 3 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a Communications app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 4 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a Chat app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 5 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a Streaming Video / Audio app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 6 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a Social Media app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 7 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a Photo / Video editing app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 8 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a Maps app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 9 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a Offline with data sync app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={opentab === 10 ? "block" : "hidden"}>
                            <Image src={businessimg} alt="businessimg" className="max-w-[605px] w-full xl:mb-0.5" />
                            <h4 className="text-xslg font-semibold text-lightgray-800 leading-lg xl:mt-7 mt-5 max-w-[555px]">Create a Bluetooth app for your online platform.</h4>
                            <p className="text-sm font-normal leading-xxl text-lightgray-900 lg:mb-7 mb-5 lg:mt-5 mt-4 max-w-[555px]">Take your business to a new level by creating an app with an online platform.</p>
                            <div className="xl:pt-0.5 flex flex-col gap-[15px]">
                                {AppData.map((e, id) => {
                                    return (
                                        <div key={id} className="flex items-center gap-3.5">
                                            <div className="w-[35px] h-[35px] bg-bgcircle flex items-center justify-center rounded-full">
                                                <LinearTick />
                                            </div>
                                            <p className="text-sm font-normal leading-xxl text-lightgray-900">{e.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}