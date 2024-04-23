// {/* ======================Help-Section================= */ }
import Image from "next/image";
import helpimg1 from '../../public/assets/images/webp/helpimg1.webp'
import helpimg2 from '../../public/assets/images/webp/helpimg2.webp'
import { Mobile, Projects, Prototyping, UiDesign, WebSvg } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";

export default function Helpsec() {
    return (
        <>
            <div className="container xl:max-w-[1292px] xl:my-32 xl:py-3 my-16">
                <div className="flex flex-wrap lg:justify-between justify-center">
                    <div data-aos="zoom-in" className="lg:w-7/12 md:w-9/12 sm:w-10/12 w-full relative">
                        <Image src={helpimg1} alt="helpimg" className="w-full sm:max-w-[328px] max-w-[250px] relative z-10" />
                        <Image src={helpimg2} alt="helpimg" className="w-full sm:max-w-[328px] max-w-[250px] absolute top-0 bottom-0 sm:left-[35%] sm:right-[unset] right-0 drop-shadow-[0px_30px_50px_0px_#000D831A]" />
                        <div className="absolute top-0 bottom-0 sm:left-[22%] left-0 sm:right-[unset] mx-auto right-0 max-w-[236px] w-full -rotate-[10deg] blur-[100px] bg-bglayer">
                        </div>
                    </div>
                    <div data-aos="fade-left" className="lg:w-5/12 w-full lg:mt-0 mt-8">
                        <h2 className="sm:text-xl text-lg leading-md font-semibold xl:mb-7 mb-4 text-navtextcolor">How we can help</h2>
                        <p className="text-xmd font-semibold text-navtextcolor leading-sxl">We Build Scalable Solutions</p>
                        <div className="flex flex-col gap-3 mt-5">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-[50px] h-[50px] bg-bghelpcircle rounded-full">
                                    <WebSvg />
                                </div>
                                <p className="text-black-100 text-sm font-normal lg:max-w-[581px] opacity-70 leading-xxl">Web & mobile application services</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-[50px] h-[50px] bg-bghelpcircle rounded-full">
                                    <Prototyping />
                                </div>
                                <p className="text-black-100 text-sm font-normal lg:max-w-[581px] opacity-70 leading-xxl">Prototyping</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-[50px] h-[50px] bg-bghelpcircle rounded-full">
                                    <UiDesign />
                                </div>
                                <p className="text-black-100 text-sm font-normal lg:max-w-[581px] opacity-70 leading-xxl">UI/UX design</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-[50px] h-[50px] bg-bghelpcircle rounded-full">
                                    <Mobile />
                                </div>
                                <p className="text-black-100 text-sm font-normal lg:max-w-[581px] opacity-70 leading-xxl">Android / iOS mobile development</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-[50px] h-[50px] bg-bghelpcircle rounded-full">
                                    <Projects />
                                </div>
                                <p className="text-black-100 text-sm font-normal lg:max-w-[581px] opacity-70 leading-xxl">Complex web backend and frontend projects.</p>
                            </div>
                        </div>
                        <p className="text-md font-semibold text-navtexthover mt-7 leading-xlg mb-5">Need more help? We also provide database management, cloud services, and CI/CD</p>
                        <CommonBtn btnname='Contact Now' />
                    </div>
                </div>
            </div>
        </>
    )
}