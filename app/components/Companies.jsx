import React from 'react';
import LogoSlider from './LogoSlider';

const Companies = () => {
    return ( 
        <div className=' bg-gradient-to-r from-gray-800 via-gray-800 to-gray-600'>
            {/* <div className='text-white text-center lg:text-6xl md:text-5xl  text-3xl font-semibold py-20'>
            Companies That Started 
            <br />
            With Venture Capital
            </div> */}
            <hr className='lg:mb-10  md:mb-5' />
            <LogoSlider/>
            <hr className='lg:mt-10 md:mt-5' />

        </div>
    );
};

export default Companies;