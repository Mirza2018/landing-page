import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import VideoComponent from './VideoComponent';

const Banner = () => {
    return (
        <div className=' md:py-[100px] py-[40px]  text-center text-white '>
            <div className='relative'>

         
            <h2  className='md:text-[24px] text-[16px]  z-10  font-bold relative'>Innovative Content Solutions</h2>


            <h1 className='md:hidden z-10 2xl:text-[86px] xl:text-[72px] lg:text-[62px] md:text-[48px] text-[32px] relative 
            leading-tight font-bold text-wrap text-center md:mx-5 md:mt-0 mt-[24px]  mx-2 '>Elevate Your Business with<span className='md:block hidden'><br /> </span> Avatar-Powered Content Creation</h1>

            <h1 className='md:block hidden z-10 2xl:text-[86px] xl:text-[72px] lg:text-[62px] md:text-[48px] text-[32px] relative 
            leading-tight font-bold text-wrap text-center md:mx-5 md:mt-0 mt-[24px]  mx-2 '>Elevate Your Business with <br /> Avatar-Powered Content Creation</h1>






               {/* <h1  className='text-8xl font-semibold'>  Venture Capital Funding</h1> */}
             

               <p className='md:hidden 2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] text-[20px] 
                text-white bg-clip-text  text-wrap w-auto mx-4 mt-[24px] font-semibold relative' >&#34;Effortlessly create engaging content with custom avatars tailored to your brand, no cameras 
                needed.&#34;</p>

               <p className='md:block hidden 2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] text-[20px] 
                text-white bg-clip-text  text-wrap w-auto mx-4 mt-[24px] font-semibold relative' >&#34;Effortlessly create engaging content with custom avatars tailored to your brand, no cameras <br />
                needed.&#34;</p>



                <div className="absolute inset-0 bg-black opacity-50 rounded-3xl">
               <div className="absolute xl:w-[110vh] md:w-[50vh] w-[50%] h-[60vh] rounded-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900
                opacity-90 blur-3xl 2xl:left-1/4 xl:left-[28%]  lg:left-[30%] md:left-[20%] left-[20%] "></div>
                </div>
               {/* <p  className='text-3xl bg-gradient-to-r from-white via-white   to-black bg-clip-text text-transparent mb-6 '>extensive legality, paperwork and banking.</p> */}
               </div>
               
            <div className='md:mt-[50px] mt-4'>
                
            <VideoComponent  />

            </div>
            <Link href={"/apply-now"}>
            <button className='bg-[#237bff] text-white rounded-full hover:text-blue-500 duration-500 hover:bg-white transition-colors flex flex-shrink-0 
            shadow-[0_4px_70px_0_rgba(35,123,255,0.5)]md:mt-16 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]
              font-semibold md:py-[17px]  lg:py-[23px] lg:px-[17px] md:px-[12px] px-[10px] py-[14px] mt-[50px] mx-auto gap-2 items-center '>
            Generate Yours Now
                <FaArrowRight />
                </button>
                </Link>
        </div>
    );
};

export default Banner;