import React from 'react';
import VideoComponent from './VideoComponent';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className=' md:py-40 py-2 text-center text-white mx-3'>
            <h2  className='md:text-xl tracking-widest text-blue-600 font-semibold'>REVOLUTIONIZED FUNDING ACCESS </h2>
            <h1 className='md:text-8xl text-4xl font-semibold text-wrap md:w-[50vw]  mx-auto '>Access Up To $1M In  Venture Capital Funding</h1>
               {/* <h1  className='text-8xl font-semibold'>  Venture Capital Funding</h1> */}
               <p className='md:text-3xl text-xl pt-5 text-zinc-400  bg-clip-text text-transparent text-wrap w-auto mx-4 ' >access capital immediately - without the headaches  of extensive legality, paperwork and banking.</p>
               {/* <p  className='text-3xl bg-gradient-to-r from-white via-white   to-black bg-clip-text text-transparent mb-6 '>extensive legality, paperwork and banking.</p> */}
            <div className='md:mt-28 mt-4'>
            <VideoComponent  />

            </div>
            <button className='bg-blue-500 md:mt-20 mt-4 md:text-2xl text-xl hover:text-blue-500 duration-500  hover:bg-white font-semibold py-6 px-20 rounded-full flex mx-auto gap-2 items-center '>
                Apply Today
                <FaArrowRight />
                </button>
        </div>
    );
};

export default Banner;