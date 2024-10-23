
import React from 'react';
import { FaMoneyBillWave, FaCog, FaHandshake, FaCheck } from 'react-icons/fa';
import Image from 'next/image';


const InvestmentSection = () => (
  <div  id='advance' className=" bg-gray-900 containerbg md:pb-10 lg:pb-[70px] text-white min-h-screen flex flex-col items-center justify-center pt-10  ">

    <h2  className='2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] text-blue-600 font-semibold pb-4 mx-2 text-center'>Unlock Your Digital Identity</h2>
    <h1 className="2xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[40px] text-[32px] text-slate-300 font-bold mb-8 text-center">
    Create, Customize, and Own Your Unique AI Avatar with Advanced Technology
    </h1>
    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start ">


<div className='grid gap-10'>
  {
    cards.map(card=>(
      <div key={card.title} className={`flex  mx-3  ${card.direction} relative`}>

<div className={`${card.bg} 
  lg:w-[700px] 
   md:w-[300px]
   flex gap-6 p-6 rounded-3xl w-full bg-cover relative `}>
  
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

  <div className='flex-1 relative z-10'>
    {/* Add a text shadow for better readability */}
    <h1 className='2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] leading-tight font-semibold text-white shadow-lg'>
      {card.title}
    </h1>
    {
      card.points.map(point => 
        <p key={point} className='mt-3 flex gap-2  2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] text-white pt-1 shadow-lg text-justify'>
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
    <Image alt="mobile" className="w-20 h-16" src={card.arrawImg} width={500} height={400} />
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
    arrclass:"bottom-0  xl:right-[35%] lg:right-[11%] md:right-[22%]"
  },
  {
    title:"Revolutionized Process",
    points:["Our AI technology streamlines the entire avatar creation process, ensuring high-quality results with minimal effort. Enjoy intuitive design features that make building your digital self easier than ever."],
    logo:<FaCog/>,
    bg:"bg-[url('/card2.png')] md:ms-80 lg:max-w-lg xl:max-w-full",
    direction:"md:flex-row-reverse md:ps-44 ps-0 ",
    arrawImg:"/line_2.png",
    arrclass:"bottom-0 xl:right-[58%] lg:right-[50%] md:right-[55%]  "
  },
  {
    title:"Reimbursement Flexibility",
    points:["Leverage your AI avatar across various social platforms to boost engagement and grow your digital presence. Join a community of like-minded creators, and watch your social impact multiply."],
    logo:<FaHandshake/>,
    bg:"bg-[url('/card3.png')]  xl:ms-0 lg:ms-28 md:ms-44",
    direction:"",
    isImg:false,
    arrclass:"bottom-0 right-0"
  },
]