"use client"
import Image from 'next/image';
import React from 'react';
import logo from '../asset/logo.png'
import Link from "next/link";

import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";


const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  
    const menuItems = [
      { name: 'Home',path:'/' },
      { name: 'Apply now',path:'/apply-now'  },
      { name: 'Get Start',path:'/#getStart' },
      { name: 'Advance',path:'/#advance'  },
     
    ];
  
    return (
        <div className='flex justify-around bg-black md:p-6  items-center containerbg'>

            <div className=''>
            <div
                     onClick={toggleMenu}
                      className="inline-flex  items-center relative justify-center
                       p-2 rounded-md text-white hover:text-white font-bold
                       focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out cursor-pointer"
                      aria-label="Toggle menu"
                    >
                      <HiBars3BottomLeft className='text-3xl font-bold me-1 ' /> <span className="md:block hidden" >
                        MENU </span>
                    </div>

                   {isOpen &&   <div  onClick={toggleMenu} className="px-2 w-[180px] pt-2 pb-3 space-y-1 sm:px-3 absolute bg-black z-20 rounded-xl">
                                    {menuItems.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={`${item.path}`}
                                        className="block  px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                                        aria-label={item.name}
                                      >
                                        <span className="flex items-center">
                                          {item.icon}
                                          <span className="">{item.name}</span>
                                        </span>
                                      </Link>
                                    ))}
                                  </div>}
                      
            </div>
          

            <Link href="/">
            <div className='flex justify-center items-center md:gap-2 '>
                <Image alt='logo' className='md:w-16 lg:w-24 w-14' src={logo}/>
            <h1 className='text-white uppercase font-semibold
             md:text-3xl text-xl'>Blutomatic</h1>
            </div>
            </Link>

            
       
            {/* <div className="hidden lg:block ">
              <ul className="flex text-white  flex-1 gap-5 text-xl font-bold mt-3">
                    {
                        menuItems.map(item=>(
                            
                            <Link href='/' key={item.name} className="">
                              <li className="flex">{item.name} 
                              </li>
                            </Link>
                        ))
                    }
                </ul>

              </div> */}
              <div className='md:block hidden'>
              <Link href={"/apply-now"}>
            <div >
                <button className='text-gray-400 md:text-xl
                 font-semibold border  rounded-full md:p-3 
                 p-2 md:px-6 hover:text-white
                  hover:border-white'>Get in Contact</button>
            </div>
            </Link>
              </div>
          
            
        </div>
    );
};

export default Navber;