

import { FaArrowRight } from "react-icons/fa";
import aiImg from '../asset/ai.png'
import Image from "next/image";
import Link from 'next/link';

export default function Features() {
  return (
    <div id="get-started" className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white md:py-12 py-4 px-6 lg:mx-8 xl:mx-0">
      <div className="justify-center mx-auto container flex flex-col md:flex-row  items-center gap-[54px]">
        {/* Left Side - Main Text */}
        <div className="flex-1">
          <h1 className="2xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[40px] text-[32px] font-semibold leading-tight mb-6  ">
            Revolutionize Your Content Creation with AI Avatars
          </h1>
          <p className="2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] text-[18px] md:leading-9 mb-8 font-semibold w-[70%]  leading-normal   ">
            We help businesses create professional content using custom-made avatars, eliminating the need for being on camera.
          </p>
          <Link href={"/apply-now"}>
          <button className="lg:mt-20 md:mt-5   bg-[#237bff]  rounded-full hover:text-blue-500 duration-500 hover:bg-white transition-colors flex flex-shrink-0 shadow-[0_4px_70px_0_rgba(35,123,255,0.5)]
           text-white font-semibold md:py-5 py-4 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]   items-center
            px-4  gap-2 ">
            <span>Get Started Today</span>
            <FaArrowRight />
          </button>
          </Link>
        </div>



        <div className="flex flex-col items-center md:items-start gap-[9px]">
  {/* Top Section: Image and Text */}
  <div className="rounded-lg shadow-lg text-center max-w-lg grid md:grid-cols-2 md:gap-[17px] gap-[9px] w
  ">
    <Image
      src={aiImg} // Replace with actual path
      alt="AI Avatar"
      className="rounded-lg w-fit h-full aspect-square "
    />
    <div className="p-2 bg-gray-800 rounded-lg flex flex-col justify-around lg:px-4 xl:px-6 md:px-2">
      <h3 className="leading-7  2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] text-[22px] font-semibold">1M+ <br /> Content Created</h3>
      <p className=" text-[#aeaeae] leading-tight  2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] text-[12px] text-center font-semibold">
        Providing businesses with professional, face-free content creation solutions.
      </p>
      <div className="bg-gray-700 mt-4 rounded-full h-2 w-full  ">
        <div className="bg-blue-500 h-2 rounded-full w-3/4 px-2"></div>
      </div>
    </div>
  </div>

  {/* Gradient Section */}
  <div className="bg-gradient-to-t from-[#19398f] to-[#1b63f5] 
      text-white p-6 rounded-lg shadow-lg text-center lg:text-3xl md:text-2xl font-semibold max-w-lg w-full">
    <h1>
      Delivering top-quality, ready-to-post content instantly using AI and custom avatars.
    </h1>
  </div>
</div>


      </div>
    </div>
  );
}



