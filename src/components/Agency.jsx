// =====================Agency======================//
import Image from "next/image";
import CommonBtn from "./common/CommonBtn";
import { Setting, Sharing } from "./common/Icons";
import businessimg from '../../public/assets/images/svg/agencyimg.svg'

export default function Agency() {
    return (
        <>
            <div className="container xl:max-w-[1920px] flex 2xl:justify-end justify-center xl:mb-[140px] mb-16">
                <div className="flex flex-wrap lg:flex-row flex-col-reverse lg:justify-between w-full max-w-[1524px]">
                    <div data-aos="fade-right" className="lg:w-5/12 w-full lg:mt-0 mt-8">
                        <h2 className="text-xl leading-md font-semibold xl:mb-7 mb-4 text-navtextcolor">What we do</h2>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-[35px] h-[35px] bg-bgcircle rounded-full flex items-center justify-center">
                                <Setting />
                            </div>
                            <p className="text-md font-semibold text-navtexthover">We're a Full-Service Agency</p>
                        </div>
                        <p className="text-black-100 text-sm font-normal lg:max-w-[581px] opacity-70 leading-xxl">We craft digital experiences that bring strategic value. From simple apps to out-of-the-box, custom software, our team can help. Our solutions have an intelligent client interface that provides insight and allows for content manipulation. </p>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="w-[35px] h-[35px] rounded-full bg-bgcircle flex items-center justify-center">
                                <Sharing />
                            </div>
                            <p className="text-md font-medium text-navtexthover leading-">We're a 100% Remote Company</p>
                        </div>
                        <p className="text-black-100 text-sm font-normal lg:max-w-[581px] opacity-70 leading-xxl xl:mb-12 mb-6 mt-5">Talent isn't restricted to borders. Our team is dispersed throughout the US.</p>
                        <CommonBtn btnname='Contact Us' />
                    </div>
                    <div data-aos="fade-left" className="lg:w-7/12 w-full">
                        <Image src={businessimg} alt="businessimg" className="max-w-[903px] w-full" />
                    </div>
                </div>
            </div>
        </>
    )
}