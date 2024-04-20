import Image from "next/image";
import CommonBtn from "./common/CommonBtn";
import buildingimg from '../../public/assets/images/png/buildingimg.png'

export default function Building() {
    return (
        <>
            <div className="container xl:pt-24 xl:mt-1 pt-12">
                <h2 className="sm:text-xl text-xslg font-semibold leading-lg text-center xl:mb-20 mb-10">Building Reliable Solutions for <span className="lg:block">Businesses, Brands, & Startups</span></h2>
            </div>
            <div className="container xl:max-w-[1534px] flex items-center xl:justify-end">
                <div className="xl:max-w-[1320px] w-full flex flex-wrap">
                    <div className="xl:w-5/12 lg:w-6/12 flex flex-col justify-center items-start xl:pr-0 lg:pr-7">
                        <h2 className="sm:text-lg text-xslg font-semibold text-black-800 leading-lg xl:mb-6 mb-4">Web Apps</h2>
                        <p className="text-md font-semibold text-learncolor leading-xlg xl:mb-4 mb-2">Custom Web App Development</p>
                        <p className="text-sm font-medium leading-xxl text-lightgray-400 lg:max-w-[510px] xl:mb-6 mb-4">Do you want to enhance your website with a custom web application? We can help.</p>
                        <p className="text-md font-semibold text-learncolor leading-xlg xl:mb-4 mb-2">Custom Web Apps Solve Unique Business Needs
                        </p>
                        <p className="text-sm font-medium leading-xxl text-lightgray-400 lg:max-w-[510px] xl:mb-7 mb-4 xl:pb-0.5">We analyze your unique needs and build powerful, practical web applications that make your life easier. From customer portals to key integrations with third-party vendors and beyond, our custom web application development solves problems.
                        </p>
                        <CommonBtn btnname='Read More' />
                    </div>
                    <div className="xl:w-7/12 lg:w-6/12 flex items-center lg:justify-end justify-center lg:mt-0 mt-8">
                        <Image src={buildingimg} alt="buildingimg" className="rounded-xxl max-w-[697px] h-full object-cover object-left w-full" />
                    </div>
                </div>
            </div>
        </>
    )
}