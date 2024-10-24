
import React from 'react';
import { FaMoneyBillWave, FaCog, FaHandshake, FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import sideImg from "../asset/sideImg1.png"

const InvestmentSection = () => (
  <div  id='advance' className=" md:pb-10 lg:pb-[70px] text-white min-h-screen flex flex-col items-center justify-center pt-10  relative bg-[#040411] md:mb-[230px] mb-[40px]">

    <h2  className='2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] text-[22px] text-blue-600  pb-4 mx-2 text-center font-medium'>Unlock Your Digital Identity</h2>
    <h1 className="md:hidden 2xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[40px] text-[26px] text-slate-300 font-semibold mb-8 text-center mx-1">
    Create, Customize, and Own Your Unique AI  Avatar with Advanced Technology
    </h1>
    <h1 className="md:block hidden 2xl:text-[62px]  xl:text-[56px] lg:text-[46px] 
    md:text-[40px] text-[32px] text-slate-300 font-semibold mb-8 text-center ">
    Create, Customize, and Own Your Unique AI <br />Avatar with Advanced Technology
    </h1>


    <div className="absolute left-0 top-[50%] transform -translate-y-1/2    ">
                        <Image alt="side Img" src={sideImg} className="object-contain -z-10" />
                    </div>
              <div className="absolute  right-0  top-[79%] transform -translate-y-1/2    ">
                        <Image alt="side Img" src={sideImg} className="object-contain -z-10" />
                    </div>
    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start ">


<div className='grid gap-[75.5px]'>
  {
    cards.map(card=>(
      <div key={card.title} className={`flex  md:mx-0 mx-2  ${card.direction} relative`}>

<div className={`${card.bg} 
xl:w-[814px]
  lg:w-[700px] 
   md:w-[300px]
   flex gap-6 px-[20px] py-[35px]  rounded-xl w-full  relative bg-center bg-cover`}>
  
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black opacity-[0.49] rounded"></div>

  <div className='flex-1 relative z-10'>
    {/* Add a text shadow for better readability */}
    <h1 className='2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] leading-tight font-semibold text-white shadow-lg text-center '>
      {card.title}
    </h1>
    {
      card.points.map(point => 
        <p key={point} className=' mt-[21px] flex  font-medium  2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] text-white pt-1 shadow-lg text-justify leading-tight'>
          {point}
        </p>
      )
    }
  </div>

</div>

      {
        card.isImg ??   
        <div className='md:block hidden'>

<div className='flex justify-end items-end '>
<div className={`absolute ${card?.arrclass}`} >
    <Image alt="mobile" className="w-[167px] h-[103px]" src={card.arrawImg} width={500} height={400} />
  </div>
      </div>
        </div>
      }
   
      </div>
      

    ))
  }
</div>
    </div>
  </div>
);

export default InvestmentSection;


const cards=[
  {
    title:"A Dedicated Team of Editors & Scripters",
    points:["Get access to a highly skilled team of writers, designers, and developers ready to help you craft the perfect AI avatar. From scripting personalities to fine-tuning visuals, we’ve got you covered."],
    logo:<FaMoneyBillWave/>,
    bg:"bg-[url('/card1.png')] xl:ms-0 lg:ms-28 md:ms-44",
    direction:"",
    arrawImg:"/line_1.webp",
    arrclass:"bottom-0  xl:right-[25%] lg:right-[3%] md:right-[22%]"
  },
  {
    title:"AI-Powered Avatar Customization",
    points:["Our AI technology streamlines the entire avatar creation process, ensuring high-quality results with minimal effort. Enjoy intuitive design features that make building your digital self easier than ever."],
    logo:<FaCog/>,
    bg:"bg-[url('/card2.png')] md:ms-80 lg:max-w-lg xl:max-w-full",
    direction:"md:flex-row-reverse md:ps-44 ps-0 ",
    arrawImg:"/line_2.png",
    arrclass:"bottom-0 xl:right-[62%] lg:right-[50%] md:right-[38%]  "
  },
  {
    title:"Enhance Social Growth",
    points:["Leverage your AI avatar across various social platforms to boost engagement and grow your digital presence. Join a community of like-minded creators, and watch your social impact multiply."],
    logo:<FaHandshake/>,
    bg:"bg-[url('/card3.png')]  xl:ms-0 lg:ms-28 md:ms-44",
    direction:"",
    isImg:false,
    arrclass:"bottom-0 right-0"
  },
]