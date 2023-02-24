import { Roboto, Inter } from "@next/font/google";
import { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
// import Footer from "./footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500"], variable: "--font-roboto" });
type Props = { children?: ReactNode };
// import { useDarkMode } from "usehooks-ts";
import Script from "next/script";

export default function MainLayout({ children }: Props) {
  //   const { isDarkMode, toggle } = useDarkMode();
  //   const [darkModeEmoji, setDarkModeEmoji] = useState<string>();
  //   useEffect(() => {
  //     if (isDarkMode) {
  //       setTimeout(() => {
  //         setDarkModeEmoji("🌝");
  //       }, 200);
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       setTimeout(() => {
  //         setDarkModeEmoji("🌚");
  //       }, 200);
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [isDarkMode]);
  return (
    <>
      <Head>
        <title>Nine Questions</title>

        {/* Primary Meta Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <meta name='title' content='Juan Herrera' />
        <meta name='description' content="Find my latest insights on the topics I'm most passionate about." /> */}
        <link rel='icon' href='/favicon.ico' />

        {/* Open Graph / Facebook */}
        {/* <meta property='og:type' content='website' />
        <meta property='og:url' content='https://jdjuan.io/' />
        <meta property='og:title' content='Juan Herrera' />
        <meta property='og:description' content="Find my latest insights on the topics I'm most passionate about." />
        <meta property='og:image' content='https://jdjuan.io/og-card.png' /> */}
        {/* TWITTER  */}
        {/* <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://jdjuan.io/' />
        <meta property='twitter:title' content='Juan Herrera' />
        <meta
          property='twitter:description'
          content="Find my latest insights on the topics I'm most passionate about."
        />
        <meta property='twitter:image' content='https://jdjuan.io/og-card.png'></meta> */}
      </Head>
      {/* <Script async src='https://www.googletagmanager.com/gtag/js?id=G-K9XYESQ0KL'></Script> */}
      {/* <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K9XYESQ0KL');`,
        }}
      ></Script> */}
      <main className={`${inter.variable} ${roboto.variable}j text-md relative text-neutral-800 dark:text-slate-50`}>
        <div className='m-8 sm:m-12 md:m-16 lg:mx-auto lg:max-w-6xl'>
          {/* <button
            onClick={toggle}
            className='absolute top-4 right-4 rounded-full p-0.5 px-1 text-3xl shadow-sm dark:bg-slate-700 '
          >
            {darkModeEmoji}
          </button> */}
          {children}
          {/* <Footer></Footer> */}
        </div>
      </main>
    </>
  );
}
