
import React from 'react';
import { FaMoneyBillWave, FaCog, FaHandshake, FaCheck } from 'react-icons/fa';
import Image from 'next/image';


const InvestmentSection = () => (
  <div  id='advance' className=" bg-gray-900 containerbg pb-10 text-white min-h-screen flex flex-col items-center justify-center pt-10 ">

    <h2  className='lg:text-[40px] md:text-2xl text-xl leading-normal  text-blue-600 font-semibold pb-4'>Unlock Your Digital Identity</h2>
    <h1 className="lg:text-[62px] md:text-3xl text-2xl text-slate-300 font-bold mb-8 text-center">
    Create, Customize, and Own Your Unique AI Avatar with Advanced Technology
    </h1>
    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start ">


<div className=''>
  {
    cards.map(card=>(
      <div key={card.title} className={`flex  mx-3  ${card.direction} relative`}>

<div className={`${card.bg} 
  lg:w-[700px] lg:h-56
   md:w-[600px]
   flex gap-6 p-6 rounded-3xl w-full bg-cover relative `}>
  
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

  <div className='flex-1 relative z-10'>
    {/* Add a text shadow for better readability */}
    <h1 className='md:text-4xl text-xl font-semibold text-white shadow-lg'>
      {card.title}
    </h1>
    {
      card.points.map(point => 
        <p key={point} className='mt-3 flex gap-2  md:text-[20px] md:leading-tight text-xs text-white pt-1 shadow-lg'>
          {point}
        </p>
      )
    }
  </div>
</div>

      {
        card.isImg ??   
        <div className='md:block hidden'>

<div className='flex justify-end items-end'>
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
    bg:"bg-[url('/card1.png')]",
    direction:"",
    arrawImg:"/line_1.webp",
    arrclass:"bottom-0 right-5"
  },
  {
    title:"Revolutionized Process",
    points:["Our AI technology streamlines the entire avatar creation process, ensuring high-quality results with minimal effort. Enjoy intuitive design features that make building your digital self easier than ever."],
    logo:<FaCog/>,
    bg:"bg-[url('/card2.png')]",
    direction:"md:flex-row-reverse md:ps-44 ",
    arrawImg:"/line_2.png",
    arrclass:"bottom-0 left-5"
  },
  {
    title:"Reimbursement Flexibility",
    points:["Leverage your AI avatar across various social platforms to boost engagement and grow your digital presence. Join a community of like-minded creators, and watch your social impact multiply."],
    logo:<FaHandshake/>,
    bg:"bg-[url('/card3.png')]",
    direction:"",
    isImg:false,
    arrclass:"bottom-0 right-0"
  },
]