import { Inter } from 'next/font/google';
import localFont from "next/font/local";

import "./globals.css";
import Footer from './components/Footer';
import Head from 'next/head';
import Navber from './components/Navber';

// Load Google Inter Font
const inter = Inter({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ['latin'],
});

// Load Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata = {
  title: "Blutomatic | Home Page",
  description: "Elevate Your Business with Avatar-Powered Content Creation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and icons */}
        <link rel="icon" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        {/* Remove or replace this if you don't have a manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${inter.className} antialiased bg-black overflow-x-hidden`}
      >
        <Navber /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
