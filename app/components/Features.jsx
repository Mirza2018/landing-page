

import { FaArrowRight } from "react-icons/fa";
import aiImg from '../asset/ai.png'
import Image from "next/image";
import Link from 'next/link';

export default function Features() {
  return (
    <div id="getStart" className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side - Main Text */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6 ">
            Revolutionize Your Content Creation with AI Avatars
          </h1>
          <p className="md:text-xl lg:text-2xl font-light mb-8">
            We help businesses create professional content using custom-made avatars, eliminating the need for being on camera.
          </p>
          <Link href={"/apply-now"}>
          <button className="mt-20 border-[#237bff] bg-[#237bff] hover:bg-blue-600
           text-white font-semibold py-4 px-7 md:text-[22px] rounded-full flex items-center
            space-x-2  flex-shrink-0">
            <span>Get Started Today</span>
            <FaArrowRight />
          </button>
          </Link>
        </div>



        <div className="flex flex-col items-center md:items-start space-y-6">
  {/* Top Section: Image and Text */}
  <div className="rounded-lg shadow-lg text-center max-w-lg grid grid-cols-2 gap-1">
    <Image
      src={aiImg} // Replace with actual path
      alt="AI Avatar"
      className="rounded-lg w-fit h-full"
    />
    <div className="bg-gray-800 rounded-lg flex flex-col justify-around ">
      <h3 className="text-xl font-semibold">1M+ <br /> Content Created</h3>
      <p className="lg:text-lg text-[#aeaeae]  text-xs">
        Providing businesses with professional, face-free content creation solutions.
      </p>
      <div className="bg-gray-700 mt-4 rounded-full h-2 w-full ">
        <div className="bg-blue-500 h-2 rounded-full w-3/4 px-2"></div>
      </div>
    </div>
  </div>

  {/* Gradient Section */}
  <div className="bg-gradient-to-t from-[#19398f] to-[#1b63f5] 
      text-white p-6 rounded-lg shadow-lg text-center lg:text-3xl md:text-2xl   font-semibold max-w-lg w-full">
    <h1>
      Delivering top-quality, ready-to-post content instantly using AI and custom avatars.
    </h1>
  </div>
</div>


      </div>
    </div>
  );
}



