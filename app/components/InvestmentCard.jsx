import Image from 'next/image';
import { FaCog, FaHandshake, FaMoneyBillWave } from 'react-icons/fa';
import sideImg from "../asset/sideImg1.png";

const InvestmentSection = () => (
  <div  id='advanced' className=" 
   text-white min-h-screen flex flex-col items-center justify-center 
   relative bg-[#040411]  ">
 {/* md:mb-[56px] mb-[40px] */}
 {/* md:pb-[100px] lg:pb-[70px] */}


    <h2  className='2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] text-[22px]
     text-blue-600  md:pb-[32px] pb-4 mx-2 text-center font-medium'>Unlock Your Digital Identity</h2>

    <h1 className="md:hidden 2xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[40px] text-[26px]
     text-slate-300 font-semibold mb-[42px] text-center mx-1
      bg-gradient-to-rfrom-[#FFFFFF] to-[#474747]  bg-clip-text text-transparent">
    Create, Customize, and Own Your Unique AI  Avatar with Advanced Technology
    </h1>


    <h1 className="md:block hidden 2xl:text-[62px]  xl:text-[56px] lg:text-[46px] 
    md:text-[40px] text-[32px] text-slate-300 font-semibold mb-[42px] text-center 
    bg-gradient-to-r from-[#FFFFFF] to-[#474747] bg-clip-text text-transparent leading-tight">
    Create, Customize, and Own Your Unique AI <br />Avatar with Advanced Technology
    </h1>




    {/* <h1 class="text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent">
    Create, Customize, and Own Your Unique AI Avatar with Advanced Technology
</h1> */}


    <div className="absolute -left-44 top-[50%] transform -translate-y-1/2    ">
                        <Image alt="side Img" src={sideImg} className="object-contain -z-10" />
                    </div>
              <div className="absolute  right-0  top-[90%] transform -translate-y-1/2    ">
                        <Image alt="side Img" src={sideImg} className="object-contain -z-10" />
                    </div>
    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start ">


<div className='grid gap-[75.5px]'>
  {
    cards.map(card=>(
      <div key={card.title} className={`flex  md:mx-0 mx-2  ${card.direction} relative  `}>

<div className={`${card.bg} 
xl:w-[814px]
  lg:w-[700px] 
   md:w-[300px]
   min-h-[220px]
   flex gap-6 px-[20px] py-[15px]  rounded-xl w-full  relative  
   bg-cover  border-2 bg-center  border-[#C0C0C0] `}>
  
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black opacity-[0.60] rounded-xl"></div>

  <div className='flex-1 relative z-10 text-center flex justify-center flex-col items-center gap-[21px]'>
    {/* Add a text shadow for better readability */}
    <h1 className='2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] tracking-tight font-semibold text-white  text-center '>
      {card.title}
    </h1>
    {/* {
      card.points.map(point => 
        <p key={point} className=' mt-[21px] flex  font-medium  
        2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] 
        text-[14px] text-white  shadow-lg text-center leading-tight'>
          {point}
        </p>
      )
    } */}
    
        <p  className=' flex  font-medium  
        2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] 
        text-[14px] text-white   text-center leading-tight'>
          {card.points}
        </p>
   
  </div>

</div>

      {
        card.isImg ??   
        <div className='md:block hidden'>

<div className='flex justify-end items-end'>
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
    points:[`Unlock the power of a skilled team of editors, designers, and a custom-built
       AI to elevate your content. Your personalized avatar is designed for maximum virality, 
       reach, and engagement—bringing your brand to life like never before`],
    logo:<FaMoneyBillWave/>,
    bg:"bg-[url('/card1.png')] xl:ms-0 lg:ms-28 md:ms-32",
    direction:"",
    arrawImg:"/line_1.webp",
    arrclass:"bottom-0  xl:right-[25%] lg:right-[3%] md:right-[22%]"
  },
  {
    title:"AI-Powered Avatar Customization",
    points:[`Our custom-made avatars are crafted to boost your reach and 
      engagement. We handle every step of content creation, so you can say goodbye
       to posting stress.
`],
    logo:<FaCog/>,
    bg:"bg-[url('/card2.png')] lg:ms-80 md:ms-64 lg:max-w-lg xl:max-w-full",
    direction:"md:flex-row-reverse md:ps-44 ps-0 ",
    arrawImg:"/line_2.png",
    arrclass:"bottom-0 xl:right-[62%] lg:right-[50%] md:right-[38%]  "
  },
  {
    title:"Enhance Social Growth",
    points:[`The results speak by themselves`],
    logo:<FaHandshake/>,
    bg:"bg-[url('/card3.png')]  xl:ms-0 lg:ms-28 md:ms-32",
    direction:"",
    isImg:false,
    arrclass:"bottom-0 right-0"
  },
]