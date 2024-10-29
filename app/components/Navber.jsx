"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../asset/logo.png";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref to track the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open and the click is outside the menuRef, close the menu
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Apply Now", path: "/apply-now" },
    { name: "Get Started", path: "/#get-started" },
    { name: "Advanced", path: "/#advanced" },
  ];

  // Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering effect
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex justify-around bg-black md:p-6 items-center containerbg">
      <div className="relative">
        <div
          onClick={toggleMenu}
          ref={menuRef}
          className="inline-flex items-center relative justify-center p-2 rounded-md text-white hover:text-white font-bold focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out cursor-pointer"
          aria-label="Toggle menu"
        >
          {/* {isOpen ? (
            <ImCross className="text-lg me-1" />
          ) : (
            <HiMenuAlt2 className="text-3xl font-bold me-1" />
          )} */}

<label className="flex flex-col gap-2 w-8" >
      <div
        className={`rounded-2xl h-[3px] bg-white duration-500 ${
          isOpen
            ? " w-1/2 rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]"
            : "w-full"
        }`}
      ></div>
      <div
        className={`rounded-2xl h-[3px] w-full bg-white duration-500 ${
          isOpen ? "-rotate-45" : ""
        }`}
      ></div>
      <div
        className={`rounded-2xl h-[3px] origin-left w-1/2 bg-white duration-500 ${
          isOpen
            ? "place-self-end rotate-[225deg]  translate-x-[12px] translate-y-[1px]"
            : ""
        }`}
      ></div>
    </label>




          {/* AnimatePresence to handle exit animations */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="px-2 top-10 md:left-0 left-6 w-[150px] pt-2 pb-3 space-y-1 sm:px-3 absolute bg-black z-50 rounded-xl shadow-lg"
              >
                {menuItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={`${item.path}`}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                      aria-label={item.name}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Link href="/">
        <div className="flex justify-center items-center md:gap-2">
          <Image alt="logo" className="md:w-16 lg:w-24 w-14" src={logo} />
          <h1 className="text-white uppercase font-semibold md:text-3xl text-xl">
            Blutomatic
          </h1>
        </div>
      </Link>


      <div className="md:block hidden">
        <Link href={"/apply-now"}>
          <div>
            <button className="text-gray-400 md:text-xl font-semibold border rounded-full md:p-3 p-2 md:px-6 hover:text-white hover:border-white transition-all duration-300 ease-in-out">
              Get in Contact
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navber;
