import React from "react";
import { FaAmazon, FaAirbnb, FaSpotify, FaUber, FaFacebook, FaGoogle } from "react-icons/fa";

const LogoSlider = () => {
  return (
    <div className="overflow-hidden  py-4 bg-black">
      {/* Container for the infinite slide */}
      <div className="flex w-max animate-slide">
        {/* Logos - Only one set of logos, repeated via CSS */}
        <div className="flex space-x-8">
          <FaAmazon className="h-16 w-16 text-yellow-500" />
          <FaAirbnb className="h-16 w-16 text-red-500" />
          <FaSpotify className="h-16 w-16 text-green-500" />
          <FaUber className="h-16 w-16 text-white" />
          <FaFacebook className="h-16 w-16 text-blue-600" />
          <FaGoogle className="h-16 w-16 text-red-600" />
        </div>

        {/* Repeat the logos for seamless effect */}
        <div className="flex space-x-8">
          <FaAmazon className="h-16 w-16 text-yellow-500" />
          <FaAirbnb className="h-16 w-16 text-red-500" />
          <FaSpotify className="h-16 w-16 text-green-500" />
          <FaUber className="h-16 w-16 text-white" />
          <FaFacebook className="h-16 w-16 text-blue-600" />
          <FaGoogle className="h-16 w-16 text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
