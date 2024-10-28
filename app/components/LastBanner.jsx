import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function LastBanner() {
    return (
      <div
        className="flex justify-center items-center md:my-[100px] my-4 mx-2 md:px-[128px] px-4 py-4 md:py-[64px] md:mx-auto container bg-no-repeat rounded-xl bg-cover md:gap-[24px] z-20 relative"
        style={{ backgroundImage: "url('/lastBanner.png')" }}
      >
        <h1 className="text-white md:text-[50px]  font-semibold">
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
  