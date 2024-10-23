import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import Navber from "./components/Navber";
import "./globals.css";
import Footer from './components/Footer';
import Head from 'next/head';

const inter = Inter({  weight: ["100","200","300","400","500","600","700","800","900"], subsets: ['latin'] })

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

export const metadata = {
  title: "Blutomatic | Home Page",
  description: "Elevate Your Business with Avatar-Powered Content Creation",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 <Head>
 <link rel="apple-touch-icon" href="/logo.png" type="image/png" sizes="180x180" />

</Head>
      <body
        className={` ${inter.className} antialiased bg-black overflow-x-hidden`}
      >
          <Navber/> 
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
