import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from './components/Footer';
import Navber from './components/Navber';

// Load Google Inter Font
const inter = Inter({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ['latin'],
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
 

        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${inter.className} antialiased bg-[#040411] overflow-x-hidden`}
      >
        <Navber /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
