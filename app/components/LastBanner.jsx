import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function LastBanner() {
  return (
 <div className="2xl:py-[100px] xl:py-[80px] lg:py-[70px] 
 md:py-[60px] py-10 bg-[#10155527]">
    {/* style={{ background:`linear-gradient(90deg, #FFFFFF 0%, #999999 70%, #474747 100%)` }} */}
     <div
      className="flex justify-center items-center 
      
      2xl:px-[128px] xl:px-[60px] lg:px-[40px] md:px-[38px] px-3 
      2xl:py-[64px] xl:py-[40px] lg:py-[30px] md:py-[18px] py-3 
      md:mx-auto mx-2 
      2xl:gap-[24px] xl:gap-[16px] lg:gap-[12px] md:gap-[10px] 
      container bg-no-repeat rounded-xl bg-cover z-20 relative w-full lg:w-10/12 md:w-11/12 "
      style={{ backgroundImage: "url('/lastBanner.png')" }}
    >
      {/* <div className="absolute bg-[#862020] in"></div> */}
      <h1 className="text-white 
        2xl:text-[50px] xl:text-[44px] lg:text-[36px] md:text-[28px] text-[20px] 
        font-semibold text-center"
      >
        Craft Your Unique Digital Persona
      </h1>
      <Link href={"/apply-now"}>
        <button className="bg-white md:text-[18px] text-xs text-black hover:text-white duration-500 
          flex-shrink-0 hover:bg-black font-bold md:px-[33px] px-2 md:py-[17px] py-2 rounded-full 
          flex items-center md:gap-[16px] gap-[4px] whitespace-nowrap"
        >
          Start Now
          <FaArrowRight />
        </button>
      </Link>
    </div>
 </div>
  );
}
