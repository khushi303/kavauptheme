"use client"
import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import ThemeDropdown from "@/components/common/UseTheme";
import { ThemeContext } from "@/components/common/ThemeProvider";
import TrustedSliders from "@/components/TrustedSlider";
import Digital from "@/components/Digital";
import NavBar from "@/components/NavBar";
import Building from "@/components/Building";
import Footer from "@/components/Footer";
import backtotop from "../../../public/assets/images/webp/topbtn.webp"
import Image from 'next/image';

export default function Home() {
    // ===========color-theme==============//
    const { theme } = useContext(ThemeContext);
    const [isCssLoaded, setIsCssLoaded] = useState(false);
    useEffect(() => {
        const linkElement = document.querySelector('link[href^="/styles/theme"]');

        if (linkElement) {
            linkElement.remove();
        }

        // Dynamically add the new theme CSS
        const newLinkElement = document.createElement('link');
        newLinkElement.setAttribute('rel', 'stylesheet');
        newLinkElement.setAttribute('href', `/styles/theme${theme}.css`);
        document.head.appendChild(newLinkElement);
        setIsCssLoaded(true);
    }, [theme]);
    // ------------Back-to-Top----------//
    const top = () => {
        document.documentElement.scrollTop = 0;
    };
    const [backToTop, setbackToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop > 300) {
                setbackToTop(true);
            } else {
                setbackToTop(false);
            }
        });
    }, []);

    return (
        <>
            <Head>
                <title>Color Themes</title>
                <link rel="stylesheet" href={`/styles/theme${theme}.css`} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <NavBar />
            <Building />
            <TrustedSliders color="#080F1D" fillcolor="#86898F" />
            <Digital />
            <Footer />
            <div className="fixed top-2 right-2">
                <ThemeDropdown />
            </div>
            <div className={`${backToTop ? '' : 'hidden'} rounded-[50%] bg-headingcolor sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] animate-[mover_2500ms_ease-in-out_infinite] flex items-center justify-center fixed bottom-7 right-7 z-40 cursor-pointer`} onClick={() => top()}>
                <Image src={backtotop} alt="backtotop" className='sm:max-w-[40px] max-w-[30px]' />
            </div>
        </>)
};