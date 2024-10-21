
import React from 'react';
import { GiHorseHead } from "react-icons/gi";
import { FaMoneyBillWave, FaCog, FaHandshake, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

// const InvestmentCard = ({ icon: Icon, title, items }) => (
//   <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center bg-[url('/money.png')]">
//     <Icon className="text-4xl mb-4" />
//     <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//     <ul className="space-y-2 ">
//       {items.map((item, index) => (
//         <li key={index} className="text-gray-300">
//           {item}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

const InvestmentSection = () => (
  <div  id='advance' className=" bg-gray-900 pb-10 text-white min-h-screen flex flex-col items-center justify-center pt-10 ">
    <GiHorseHead className='text-9xl' />
    <h2  className='md:text-2xl tracking-widest text-blue-600 font-semibold'>Unlock Your Digital Identity</h2>
    <h1 className="text-3xl font-bold mb-8 text-center">
    Create, Customize, and Own Your Unique AI Avatar with Advanced Technology
    </h1>
    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start ">


<div className=' w-full'>
  {
    cards.map(card=>(
      <div key={card.title} className={`flex gap-10 mx-3  ${card.direction} relative`}>

<div className={`${card.bg} 
  lg:w-[700px] lg:h-56
   md:w-[600px] 
   
   flex gap-6 p-10 my-2 rounded-3xl w-full bg-fixed`}>
        {/* <div className="md:text-8xl text-5xl  text-slate-300">{card.logo}</div> */}
        <div className='flex-1'>
          <h1 className='md:text-4xl text-xl font-semibold'>{card.title}</h1>
            {
              card.points.map(point=>
               <p key={point} className='flex gap-2  md:text-xl text-xs  pt-1'>
                {/* <FaCheck className='text-white' /> */}
                {point}
              </p>)
            }

        </div>
      </div>
      {
        card.isImg ??   
        <div className='md:block hidden'>

<div className='flex justify-end items-end'>
<div className={`absolute ${card?.arrclass}`} > {/* Make the child absolute */}
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
    points:[
      '$50M ready to invest in promising projects',
      '$20k - $1M investment allocation per project',
      'Reinvest profits back in the company',
    ],
    logo:<FaMoneyBillWave/>,
    bg:"bg-[url('/card1.png')]",
    direction:"",
    arrawImg:"/line_1.webp",
    arrclass:"bottom-0 right-5"
  },
  {
    title:"Revolutionized Process",
    points:[
      'No extensive legality or paperwork',
      'Instant access to funds',
      'Investment via Crypto/Bank Transfer',
    ],
    logo:<FaCog/>,
    bg:"bg-[url('/card2.png')]",
    direction:"md:flex-row-reverse md:ps-44 ",
    arrawImg:"/line_2.png",
    arrclass:"bottom-0 left-5"
  },
  {
    title:"Reimbursement Flexibility",
    points:[
      'Profit sharing',
      'Reimbursement with interest',
      'Open to other options',
    ],
    logo:<FaHandshake/>,
    bg:"bg-[url('/card3.png')]",
    direction:"",
    isImg:false,
    arrclass:"bottom-0 right-0"
  },
]