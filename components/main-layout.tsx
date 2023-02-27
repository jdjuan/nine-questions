import { Roboto, Inter } from "@next/font/google";
import { ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500"], variable: "--font-roboto" });
type Props = { children?: ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Nine Questions</title>

        {/* Primary Meta Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='title' content='Nine Questions' />
        <meta name='description' content='Guess who invented what based on their looks.' />
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
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-CS7GWP4SEG'></Script>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CS7GWP4SEG');`,
        }}
      ></Script>
      <main className={`${inter.variable} ${roboto.variable} text-md font-ui text-green-400`}>{children}</main>
    </>
  );
}
