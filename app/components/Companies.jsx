import React from 'react';
import LogoSlider from './LogoSlider';

const Companies = () => {
    return (
        <div className=''>
            <div className='text-white text-center md:text-6xl text-3xl font-semibold py-20'>
            Companies That Started 
            <br />
            With Venture Capital
            </div>
            <hr className='mb-10' />
            <LogoSlider/>
            <hr className='mt-10' />

        </div>
    );
};

export default Companies;