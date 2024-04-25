// {/* =====================Digital======================= */ }
import Image from "next/image";
import digitalimg from '../../public/assets/images/webp/digitalimg.webp'
import Link from "next/link";
import CommonBtn from "./common/CommonBtn";

export default function Digital() {
    return (
        <>
            <div className="container xl:max-w-[1210px]">
                <div className="bg-bgprocess sm:py-14 lg:pb-0 py-12 2xl:px-3">
                    <div className="pt-1.5 flex flex-wrap 2xl:px-24 xl:px-20 px-5">
                        <div data-aos="fade-dowm" className="lg:w-5/12 w-full flex items-center lg:justify-start justify-center">
                            <Image src={digitalimg} alt="digitalimg" className="max-w-[315px] w-full" />
                        </div>
                        <div data-aos="fade-left" className="lg:w-7/12 pt-4 w-full lg:mt-0 mt-8">
                            <h2 className="sm:text-ls text-sd font-semibold text-navtextcolor !leading-lg xl:mb-7 sm:mb-5 mb-4 xl:py-0.5">Take the Next Step in Your Digital Transformation</h2>
                            <p className="text-lg font-normal !sm:leading-xsxxl !leading-xxl text-navtextcolor xl:mb-4 mb-3 max-w-[520px] opacity-80">Concentrate on your brand, business, or project while we handle the software development.</p>
                            <p className="sm:leading-xsxl !leading-xxl xl:mb-7 mb-6 xl:pb-0.5"><Link href="#learnmore" className="text-lg font-medium text-learncolor">Get in touch with Kava Up to learn more!</Link>
                            </p>
                            <CommonBtn btnname='Contact Us' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}