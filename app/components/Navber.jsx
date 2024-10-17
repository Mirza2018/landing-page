"use client"
import Image from 'next/image';
import React from 'react';
import logo from '../asset/logo.png'
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  
    const menuItems = [
      // { name: 'Home' },
      // { name: 'Apply now' },
     
    ];
  
    return (
        <div className='flex justify-around bg-black py-4'>
            {/* <div className='lg:hidden block'>
            <button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                      aria-label="Toggle menu"
                    >
                      {isOpen ? <FaTimes className='text-white' /> : <FaBars />}
                    </button>
                      {
                        isOpen && <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                                    {menuItems.map((item) => (
                                      <a
                                        key={item.name}
                                        href={`${item.name}`}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                                        aria-label={item.name}
                                      >
                                        <span className="flex items-center">
                                          {item.icon}
                                          <span className="">{item.name}</span>
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                      }
            </div> */}
            <div>

            <Link href="/">
            <div className='flex justify-center items-center gap-2'>
                <Image alt='logo' className='w-12 ' src={logo}/>
            <h1 className='text-white uppercase font-bold tracking-wide md:text-2xl'>Blutomatic</h1>
            </div>
            </Link>

            
            </div>
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
            <Link href={"/apply-now"}>
            <div className=''>
                <button className='text-gray-400 md:text-xl font-semibold border  rounded-full md:p-3 p-2 md:px-6 hover:text-white hover:border-white'>APPLY NOW</button>
            </div>
            </Link>
            
        </div>
    );
};

export default Navber;