"use client"
import Header from "@/components/Header";
import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import ThemeDropdown from "@/components/common/UseTheme";
import { ThemeContext } from "@/components/common/ThemeProvider";
import TrustedSliders from "@/components/TrustedSlider";
import About from "@/components/About";
import Process from "@/components/Process";
import Digital from "@/components/Digital";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Business from "@/components/Business";

export default function Home() {
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


  return (
    <>
      <Head>
        <title>Color Themes</title>
        <link rel="stylesheet" href={`/styles/theme${theme}.css`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head >
      <NavBar />
      <Header />
      <TrustedSliders color="#080F1D" fillcolor="#86898F" />
      <About />
      <Process />
      <Digital />
      <Footer />
      <ThemeDropdown />
      <Business />
    </>)
};