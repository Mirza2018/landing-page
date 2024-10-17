import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import mobile from '../asset/mobile.webp'
import { TbWorld } from "react-icons/tb";

const Features = () => {
    return (
        <div className='md:mx-10 mx-2'>
                <div className='py-20  text-white grid md:grid-cols-2  gap-5 container mx-auto  '>

            <div className=''>
            <h2  className='md:text-2xl tracking-widest text-blue-600 font-semibold pb-5'>THE FUNDRAISER</h2>
            <h1 className='md:text-6xl text-4xl font-semibold text-wrap md:w-[40vw]  mx-auto '>Our Aim Is To Be The Largest Investor In Innovative Startups Around The World.</h1>
          
               <p className='md:text-3xl  pt-5 md:w-[40vw] w-[90vw]' >
               We Are Expanding Our Investment Portfolio,  While Also Giving Hundreds Of Smal businesses access to key capital</p>
               {/* <p  className='text-3xl bg-gradient-to-r from-white   to-black bg-clip-text text-transparent '>
              l</p>
               <p  className='text-3xl bg-gradient-to-r from-white   to-black bg-clip-text text-transparent '>
               businesses access to key capital.</p> */}
               <button className='bg-blue-500 md:mt-20  md:text-2xl text-xl   hover:text-blue-500 duration-500  hover:bg-white font-semibold py-6 px-20 rounded-full flex mt-20 ms-3 gap-2 items-center '>
                Apply Today
                <FaArrowRight />
                </button>
            </div>
            <div>
                {/* top images and texts */}
                <div className='flex gap-3 md:mt-0 mt-10 w-[98vw]'>

                <div className=' ' >
                <Image alt='mobile' className='md:w-56 w-40 place-content-end' src={mobile}/>
                </div>
                <div className='bg-gray-800 md:w-full p-5 py-2 rounded md:max-w-[30vw] '>
                    <h1 className='text-6xl font-semibold'>$50M</h1>
                    <div className='text-start '>
                    <p className='text-xs font-thin'>$50M Dollar Fund To Allocate</p>
                    <p className='text-xs font-thin'>To Small</p>
                    <p className='text-xs font-thin'>Businesses.</p>
                    <div class="flex items-center justify-center h-10 ">
                    <div class="w-3/4 bg-blue-500 h-1"></div>
                    <div class="w-1/4 bg-gray-300 h-1"></div>
                    </div>
                    </div>
                </div>

                </div>
              


                <div className='md:w-[42vw] w-[90vw] mx-auto '>
                    <div className='md:w-full px-5 mt-6  bg-gray-800 md:mx-auto rounded flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-400'>
                    <div className='pb-3 pt-4'>

                    <h1 className='md:text-base text-sm'>--- Instant Payout Once Approved</h1>
                    <p className='md:text-3xl text-2xl font-semibold'>Crypto USDT & USD To Any Bank World Wide.</p>
                    {/* <p  className='text-3xl font-semibold'></p> */}
              
                    </div>
                <TbWorld className='md:text-[200px] text-6xl'  />
                </div>
                </div>

                
                
            </div>
      
        </div>    
        </div>

    );
};

export default Features;