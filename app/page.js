import Banner from "./components/Banner";
import Companies from "./components/Companies";
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
  <Companies/>
  <InvestmentCard/>
  <LastBanner/>

 </div>
  );
}
