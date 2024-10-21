"use client"
import Image from 'next/image';
import React from 'react';
import logo from '../asset/logo.png'
import Link from "next/link";

import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  
    const menuItems = [
      { name: 'Home',path:'/' },
      { name: 'Apply now',path:'apply-now'  },
      { name: 'Get Start',path:'#getStart' },
      { name: 'Advance',path:'#advance'  },
     
    ];
  
    return (
        <div className='flex justify-around bg-gray-800 pt-4 items-center '>

            <div className='relative'>
            <button
                     onClick={toggleMenu}
                      className="inline-flex  items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                      aria-label="Toggle menu"
                    >
                      <HiBars3BottomLeft className='text-2xl font-semibold me-1' /> MENU
                    </button>

                   {isOpen &&  
                    <div  onClick={toggleMenu} className="px-2 bottom-10 w-[200px]  pt-2 pb-3 space-y-1 sm:px-3 absolute  bg-black z-10 rounded-xl">
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
                                  </div>
                                            }
                             
                      
            </div>
          

            <Link href="/">
            <div className='flex justify-center items-center gap-2'>
                <Image alt='logo' className='w-16 ' src={logo}/>
            <h1 className='text-white uppercase font-bold tracking-wide md:text-2xl hover:text-b'>Blutomatic</h1>
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

export default Footer;