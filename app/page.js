import Banner from "./components/Banner";
import Features from "./components/Features";
import InvestmentCard from "./components/InvestmentCard";
import LastBanner from "./components/LastBanner";

export default function Home() {
  return (
 <div className="bg-black text-white ">
 <div className="containerbg">
  <Banner/>

 </div>
  <Features/>
  {/* <Companies/> */}
  <InvestmentCard/>
  <div className="">
  <LastBanner/>
  </div>

 </div>
  );
}
