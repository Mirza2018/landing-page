import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const LastBanner = () => {
    return (
        <div className='flex justify-center items-center place-content-center md:px-16 px-12 bg-gradient-to-r from-blue-500 rounded-xl md:py-16 py-4 mb-10 mt-10 md:w-auto  xl:mx-48 lg:mx-36 md:mx-28 mx-2'>
            <h1 className='text-white md:text-5xl text-xl font-semibold '>Ready To Get Funded?</h1>


            <button className='bg-white  md:text-xl text-xs text-black hover:text-white duration-500  flex-shrink-0
             hover:bg-black font-semibold md:px-6 px-2 my-3 md:my-0 md:py-4 py-2 rounded-full flex mx-auto gap-2 items-center  '>
                Apply Today
                <FaArrowRight />
                </button>



        </div>
    );
};

export default LastBanner;