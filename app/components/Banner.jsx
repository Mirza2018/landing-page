import React from 'react';
import VideoComponent from './VideoComponent';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className=' md:py-40 py-2 text-center text-white '>
            {/* <h2  className='md:text-xl tracking-widest text-blue-600 font-semibold'>REVOLUTIONIZED FUNDING ACCESS </h2> */}
            <h1 className='2xl:text-[86px] xl:text-[72px] lg:text-[62px] md:text-[48px] text-[32px] leading-tight font-bold text-wrap text-center md:mx-5 md:mt-0 mt-[24px]  mx-2 '>Elevate Your Business with <br /> Avatar-Powered Content Creation</h1>
               {/* <h1  className='text-8xl font-semibold'>  Venture Capital Funding</h1> */}
               <p className='2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] text-[20px] pt-5 text-zinc-400  bg-clip-text text-transparent text-wrap w-auto mx-4 mt-[24px]' >&#34;Effortlessly create engaging content with custom avatars tailored to your brand, no cameras <br /> needed.&#34;</p>
               {/* <p  className='text-3xl bg-gradient-to-r from-white via-white   to-black bg-clip-text text-transparent mb-6 '>extensive legality, paperwork and banking.</p> */}
            <div className='md:mt-12 mt-4'>
            <VideoComponent  />

            </div>
            <Link href={"/apply-now"}>
            <button className='bg-blue-500 flex-shrink-0 md:mt-20 mt-4 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] hover:text-blue-500 duration-500  hover:bg-white font-semibold md:py-[17px]  lg:py-[23px] lg:px-[17px] md:px-[12px] px-[10px] py-[14px] rounded-full flex mx-auto gap-2 items-center '>
            Generate Yours Now
                <FaArrowRight />
                </button>
                </Link>
        </div>
    );
};

export default Banner;