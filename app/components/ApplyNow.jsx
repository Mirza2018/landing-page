'use client'
import axios from "axios";
import Swal from "sweetalert2";
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


        else if (!(/^(?:\+?\d{1,3}[-. ]?)?(?:\(?\d{2,4}\)?[-. ]?)?\d{3}[-. ]?\d{4}$/.test(phone))) {
          Swal.fire({
            title: "Give a Valid Mobile Number!",
            icon: "error"
          });
          return  
      }
        console.log(name,email,phone,social,about);
        const data={
          Name:name,
          Email:email,
          Mobile:phone,
          Social:social,
          About:about
        }
        axios.post('https://api.sheetbest.com/sheets/7fecf609-86f3-4583-a40a-53de4818217e',data)
        .then((res)=>{
         
          Swal.fire({
            title: "Application Done!",
            text: "We will Contract You!",
            icon: "success"
          });
          e.target.reset()
        }
      )
    

    }

    return (

        <div className="containerbg min-h-screen flex flex-col justify-center items-center mt-4">
              <h1 className="text-center text-3xl text-white font-semibold mb-8">Begin Application Now</h1>
              <div className=" flex items-center justify-center bg-transparent opacity-90 ">
              {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-gray-800"> */}
        <div className="min-w-3xl  p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg border-2">
        
  
          <form onSubmit={handleFrom} className="space-y-4 md:w-[50vw] ">
        
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="Full Name" className="block text-white  mb-2">Full Name*</label>
                <input
                  id="name"
                  type="name"
                  placeholder="Full Name"
                  name="name"
                  className=" w-full px-3 md:py-4 py-2  rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400" />
              </div>
  
              <div>
                <label htmlFor="Email Address" className="block text-white  mb-2">Email Address*</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  name="eamil"
                  className=" w-full px-3 md:py-4 py-2   rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"  />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-white  mb-2 ">Phone Number*</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  className=" w-full px-3 md:py-4 py-2  rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400" />
              </div>
  
              <div>
                <label htmlFor="socialMedia" className="block text-white  mb-2">Social Media Handle</label>
                <input
                  id="socialMedia"
                  type="text"
                  placeholder="Social Media Handle"
                name="social"
                  className=" w-full px-3  md:py-4 py-2   rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400" />
              </div>
            </div>
  
            <div>
              <label htmlFor="aboutBrand" className="block text-white text-sm font-bold mb-2">Tell Us About Your Brand*</label>
              <textarea
                id="aboutBrand"
                name="about"
                className=" w-full md:py-4 py-2   rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"  rows="4"
              ></textarea>
            </div>
  
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 md:py-4 py-2  bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors flex flex-shrink-0"
              >
                Submit Your Application
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>

    );
  };
  
  export default ApplicationForm;
  