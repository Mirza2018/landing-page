'use client'
import axios from "axios";
import Image from "next/image";
import Swal from "sweetalert2";
import sideImg from "../asset/sideImg1.png"


const ApplicationForm = () => {
    const handleFrom=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const phone=e.target.phone.value;
        const social=e.target.social.value;
        const about=e.target.about.value;
        
        if(!name){
          Swal.fire({
            title: "Name Field is Require!",
            icon: "error"
          });
          return 
          
          
        }
        else if(!email){
          Swal.fire({
            title: "Email Field is Require!",
            icon: "error"
          });
          return 

          
        }
        else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))) {
          Swal.fire({
            title: "Give a Valid Email!",
            icon: "error"
          });
          return 
      }
        else if(!phone){
          Swal.fire({
            title: "Phone Number is Require!",
            icon: "error"
          });
          return 
        }
        else if(!about){
          Swal.fire({
            title: "Please Tell Us About Your Brand",
            icon: "error"
          });
          return 
        }
        else if (!(/^(?:\+?\d{1,3}[-. ]?)?(?:\(?\d{2,4}\)?[-. ]?)?\d{3}[-. ]?\d{4}$/.test(phone))) {
          Swal.fire({
            title: "Give a Valid Mobile Number!",
            icon: "error"
          });
          return  
      }

        const data={
          Name:name,
          Email:email,
          Mobile:phone,
          Social:social,
          About:about
        }
        
        axios.post(process.env.NEXT_PUBLIC_API_URL,data)
        .then((res)=>{
         console.log(res);
         
          Swal.fire({
            title: "Application Done",
            text: "We will contact you soon!",
            icon: "success"
          });
          e.target.reset()
        }
      )
    

    }

    return (

      <div className="pt-[85px] containerbg  md:mb-[106px] mb-8 bg-[#040411] md:min-h-[90vh] lg:h-full">
              <h1 className="text-center  2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] 
              text-[24px] text-white font-semibold mb-[50px] z-20">Begin Application Now</h1>


               {/* Image Positioned with CSS */}
              <div className="absolute left-2  top-[63.3%] transform -translate-y-1/2    ">
                        <Image alt="side Img" src={sideImg} className="object-contain -z-10" />
                    </div>
              <div className="absolute  right-2  top-[81%] transform -translate-y-1/2    ">
                        <Image alt="side Img" src={sideImg} className="object-contain -z-10" />
                    </div>

              {/* <div className="absolute right-0  top-[90%] transform -translate-y-1/2   -z-20 ">
                        <Image alt="side Img" src={sideImg} className="object-contain" />
                    </div> */}

              <div className=" flex items-center justify-center bg-transparent opacity-90 ">
              {/* <div className="absolute xl:w-[60%] md:w-[50vh] w-[50%] h-[50vh] rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 opacity-70 blur-[200px] top-[30%] -z-20"></div> */}
              {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-gray-800"> */}
          <form onSubmit={handleFrom} className="space-y-4 lg:w-[50vw] w-[90vw] relative">
        <div className="md:border-[1px] border-[#E5E7EB] bg-[#171723] bg-opacity-60 rounded-3xl   lg:p-[65px] md:p-10  p-2">
      
       

{/* 
               <div className=" xl:w-[90vh] md:w-[50vh] w-[50%] h-[50vh] rounded-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900
                opacity-100 blur-3xl -z-20 "></div> */}



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
              <div>
                <label htmlFor="Full Name" className="block text-white  2xl:text-[17.5px] md:text-[16px] text-[14px] z-10 pb-2 font-normal">Full Name*</label>
                <input
                  id="name"
                  type="name" 
                  placeholder="Full Name"
                  name="name"
                  className="z-50 w-full rounded-xl bg-white bg-opacity-15 text-white border border-gray-600 focus:outline-none focus:border-blue-400  ps-[24px] pt-[21px] pe-[23px] pb-[21px] " />
              </div>
  
              <div>
              <label htmlFor="Email Address" className="block text-white   2xl:text-[17.5px]  md:text-[16px] text-[14px] z-10 pb-2">Email Address*</label>
              <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  name="eamil"
                  className=" w-full rounded-xl bg-white bg-opacity-15 text-white border border-gray-600 focus:outline-none focus:border-blue-400  ps-[24px] pt-[21px] pe-[23px] pb-[21px] " />
              </div>
            </div>
           
            
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 pt-6 ">
            <div>
              <label htmlFor="phoneNumber" className="block   text-white  2xl:text-[17.5px]   md:text-[16px] text-[14px] z-10 pb-2">Phone Number*</label>
              <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  className=" w-full rounded-xl bg-white bg-opacity-15 text-white border border-gray-600 focus:outline-none focus:border-blue-400  ps-[24px] pt-[21px] pe-[23px] pb-[21px] " />
              </div>
  
              <div>
              <label htmlFor="socialMedia" className="block   text-white  2xl:text-[17.5px]   md:text-[16px] text-[14px] z-10 pb-2">Social Media Handle</label>
              <input
                  id="socialMedia"
                  type="text"
                  placeholder="Social Media Handle"
                name="social"
                  className=" w-full rounded-xl bg-white bg-opacity-15 text-white border border-gray-600 focus:outline-none focus:border-blue-400  ps-[24px] pt-[21px] pe-[23px] pb-[21px] " />
              </div>
            </div>
  
            <div className="pt-6" >
              <label htmlFor="aboutBrand" className=" block text-white text-sm mb-2 2xl:text-[17.5px]  md:text-[16px] text-[14px] z-10 md:mt-2 ">Tell Us About Your Brand*</label>
              <textarea
                id="aboutBrand"
                name="about"
                className=" w-full md:py-4 py-2 px-3  rounded-xl bg-white bg-opacity-15 text-white border border-gray-600 focus:outline-none focus:border-blue-400"  rows="4"
              ></textarea>
            </div>
  
      
        </div>
        <div className="flex justify-center">
        <button
  type="submit"
  className="z-10 px-[17px] md:py-[23px] py-3 md:mt-[60px]
    font-semibold bg-[#237bff] text-white rounded-full hover:text-blue-500 duration-500 hover:bg-white transition-colors
    flex flex-shrink-0 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]
    shadow-[0_4px_70px_0_rgba(35,123,255,0.5)]"
>
  Submit Your Application
</button>



              
            </div>
             
                {/* opacity-90 blur-3xl 2xl:left-1/4 xl:left-[28%]  lg:left-[30%] md:left-[20%] left-[10%]  top-1/3"></div> */}
          </form>
         
      </div>
        </div>

    );
  };
  
  export default ApplicationForm;
  