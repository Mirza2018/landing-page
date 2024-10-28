import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function LastBanner() {
  return (
    <div
      className="flex justify-center items-center 
      2xl:my-[100px] xl:my-[80px] lg:my-[70px] md:my-[60px] my-10 
      2xl:px-[128px] xl:px-[60px] lg:px-[40px] md:px-[30px] px-4 
      2xl:py-[64px] xl:py-[40px] lg:py-[30px] md:py-[20px] py-4 
      md:mx-auto mx-2 
      2xl:gap-[24px] xl:gap-[16px] lg:gap-[12px] md:gap-[10px] 
      container bg-no-repeat rounded-xl bg-cover z-20 relative w-full lg:w-10/12 md:w-11/12"
      style={{ backgroundImage: "url('/lastBanner.png')" }}
    >
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
  );
}
