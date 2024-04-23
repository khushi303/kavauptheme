// ==========================About Section====================//
import Image from "next/image";
import aboutimg from '../../public/assets/images/webp/aboutimg.webp';
import CommonBtn from "./common/CommonBtn";

export default function About() {
    return (
        <>
            <div className="container xl:max-w-[1512px] xl:pt-10 xl:pb-32 xl:mb-3 pb-16">
                <div className="flex flex-wrap flex-row justify-center items-center xl:max-w-[1318px]">
                    <div data-aos="fade-down-right" className="lg:w-2/4 md:w-9/12 w-full">
                        <Image src={aboutimg} alt="aboutimg" className="w-full" />
                    </div>
                    <div data-aos="fade-left" className="lg:w-2/4 w-full lg:pt-0 pt-8">
                        <div className="xl:pl-20 lg:pl-10">
                            <h2 className="sm:text-xl text-lg leading-md font-semibold xl:mb-7 mb-4 text-navtextcolor">Who we are</h2>
                            <p className="text-sm font-normal opacity-70 lg:max-w-[530px] lg:pt-0.5 xl:mb-12 mb-6 text-black-100">Kava Up, LLC is a US-based digital creative studio delivering ROI-focused web and mobile app development. We've helped <span className="2xl:block">startups, small businesses, enterprises, and everyone in <span className="2xl:block">between build and scale with our client-focused development approach. </span></span></p>
                            <CommonBtn btnname="Contact Us" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}