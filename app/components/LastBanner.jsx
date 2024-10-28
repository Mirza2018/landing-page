import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function LastBanner() {
    return (
      <div
        className="flex justify-center items-center 
        xl:my-[100px] md:my-[60px] my-10 
        md:px-[128px] px-4 
        xl:py-[64px] py-4 
        md:mx-auto mx-2 
        xl:gap-[24px] lg:gap-[18px] md:gap-[14px]
        container bg-no-repeat rounded-xl bg-cover  z-20 relative"
        style={{ backgroundImage: "url('/lastBanner.png')" }}
      >
        <h1 className="text-white xl:text-[50px] lg:text-[40px] md:text-[32px] text-[22px] font-semibold">
          Craft Your Unique Digital Persona
        </h1>
        <Link href={"/apply-now"}>
        <button className="bg-white md:text-[21.75px] text-xs text-black hover:text-white duration-500 
        flex-shrink-0 hover:bg-black font-bold md:px-[33px] px-2 md:py-[17px] py-2 rounded-full flex 
        items-center md:gap-[32px] gap-1">
          Start Now
          <FaArrowRight />
        </button>
        </Link>
      </div>
    );
  }
  