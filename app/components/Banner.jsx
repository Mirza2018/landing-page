import React from 'react';
import VideoComponent from './VideoComponent';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className=' md:py-40 py-2 text-center text-white '>
            {/* <h2  className='md:text-xl tracking-widest text-blue-600 font-semibold'>REVOLUTIONIZED FUNDING ACCESS </h2> */}
            <h1 className='lg:text-[86px] md:text-5xl text-3xl font-bold text-wrap  mx-auto '>Elevate Your Business with <br /> Avatar-Powered Content Creation</h1>
               {/* <h1  className='text-8xl font-semibold'>  Venture Capital Funding</h1> */}
               <p className='lg:text-3xl md:ext-xl pt-5 text-zinc-400  bg-clip-text text-transparent text-wrap w-auto mx-4 ' >&#34;Effortlessly create engaging content with custom avatars tailored to your brand, no cameras <br /> needed.&#34;</p>
               {/* <p  className='text-3xl bg-gradient-to-r from-white via-white   to-black bg-clip-text text-transparent mb-6 '>extensive legality, paperwork and banking.</p> */}
            <div className='md:mt-12 mt-4'>
            <VideoComponent  />

            </div>
            <Link href={"/apply-now"}>
            <button className='bg-blue-500 flex-shrink-0 md:mt-20 mt-4 md:text-2xl  hover:text-blue-500 duration-500  hover:bg-white font-semibold md:py-6 md:px-18 py-4 px-12 rounded-full flex mx-auto gap-2 items-center '>
            Generate Yours Now
                <FaArrowRight />
                </button>
                </Link>
        </div>
    );
};

export default Banner;