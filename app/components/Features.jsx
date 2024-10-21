import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import aiImg from '../asset/ai.png'
import arraow from '../asset/arraow.webp'
import { TbWorld } from "react-icons/tb";
import Link from 'next/link';

const Features = () => {
    return (
        <div className='md:mx-10 mx-2' id='getStart'>
                <div className='py-20  text-white grid md:grid-cols-2  gap-5 container mx-auto  '>

            <div className=''>
            {/* <h2  className='lg:text-2xl  md:text-xl tracking-widest text-blue-600 font-semibold pb-5 '>THE FUNDRAISER</h2> */}
            <h1 className='lg:text-6xl md:text-5xl text-4xl font-semibold text-wrap md:w-[37vw]  mx-auto '>Revolutionize Your Content Creation with AI Avatars</h1>
          
               <p className='md:text-3xl  pt-5 md:w-[37vw] w-[90vw]' >
               We help businesses create professional content using custom-made avatars, eliminating the need for being on camera.</p>
               {/* <p  className='text-3xl bg-gradient-to-r from-white   to-black bg-clip-text text-transparent '>
              l</p>
               <p  className='text-3xl bg-gradient-to-r from-white   to-black bg-clip-text text-transparent '>
               businesses access to key capital.</p> */}
                <Link href={"/apply-now"}>
               <button className='bg-blue-500 md:mt-20 flex-shrink-0  md:text-[22px] text-xl 
               md:py-6 md:px-18 py-4 px-12
                 hover:text-blue-500 duration-500   hover:bg-white font-semibold rounded-full flex mt-20 md:mx-0 mx-auto gap-2 items-center  '>
                Get Stated Today
                <FaArrowRight />
                </button></Link>


            </div>
            <div className='flex justify-center items-center flex-col'>
                {/* top images and texts */}
                <div className='flex gap-3 md:mt-0 mt-10 md:w-[42vw] w-[90vw]  justify-around'>

                <div className='relative  justify-end  ' >
                    <div className='justify-end  '>
                    <Image alt='mobile' className='aspect-square  md:w-48 rounded-lg ' src={aiImg}/>
                    </div>
                {/* <Image alt='arraow' className='md:w-40 w-32  absolute -top-5 ' src={arraow}/> */}
                
                </div>
                <div className='bg-gray-800  p-5 py-2 rounded  text-center  flex-1 '>
                    
                    <div className='text-start '>
                    <h1 className='xl:text-[30px] text-[22px] font-semibold '>1M+</h1>
                    <h1 className='xl:text-[30px]  text-[22px]  font-semibold '>Content Created</h1>
                    {/* <p className='text-xs font-thin'>$50M Dollar Fund To Allocate</p> */}
                    <p className='xl:text-xl lg:text-sm font-thin'>Providing businesses with professional, face-free content creation solutions</p>
                    {/* <p className='text-xs font-thin'>Businesses.</p> */}
                    <div class="flex items-center justify-center pt-5 w-[100%]">
                    <div class="w-[67%] bg-blue-500 h-1"></div>
                    <div class="w-[33%] bg-gray-300 h-1"></div>
                    </div>
                    </div>
                </div>

                </div>
              


                <div className='md:w-[42vw] w-[90vw] mx-auto '>
                    <div className='md:w-full px-5 mt-6  bg-gray-800 md:mx-auto rounded flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-400'>
                    <div className='pb-3 pt-4'>

                    {/* <h1 className='md:text-base text-sm'>--- Instant Payout Once Approved</h1> */}
                    <p className='md:text-2xl text-xl font-semibold'>Delivering top-quality, ready-to-post content instantly using AI and custom avatars.</p>
                    {/* <p  className='text-3xl font-semibold'></p> */}
              
                    </div>
                {/* <TbWorld className='md:text-[200px] text-6xl'  /> */}
                </div>
                </div>

                
                
            </div>
      
        </div>    
        </div>

    );
};

export default Features;