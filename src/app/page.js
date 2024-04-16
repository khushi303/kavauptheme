"use client"
import Header from "@/components/Header";
import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import ThemeDropdown from "@/components/common/UseTheme";
import { ThemeContext } from "@/components/common/ThemeProvider";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    import(`./styles/theme${theme}.css`).then(() => {
    }).catch((error) => {
      console.error('Error loading CSS file:', error);
    });
  }, [theme]);

  return (
    <>
      <Head>
        <title>Color Themes</title>
        <link rel="stylesheet" href={`./styles/theme${theme}.css`} />
      </Head>
      <ThemeDropdown />
      <Header />
    </>)
};
