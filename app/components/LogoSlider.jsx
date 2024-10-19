import React from "react";
import { FaAmazon, FaAirbnb, FaSpotify, FaUber, FaFacebook, FaGoogle } from "react-icons/fa";

const LogoSlider = () => {
  return (
    <div className="overflow-hidden  py-4 bg-black">
      {/* Container for the infinite slide */}
      <div className="flex w-max gap-36">
        {/* Logos - Only one set of logos, repeated via CSS */}
        <div className="flex space-x-32 animate-slide">
          <FaAmazon className="h-16 w-16 text-yellow-500 " />
          <div className="flex flex-shrink-0">
          <FaAirbnb className="h-12 w-12 text-red-500" /><span className="text-rose-500 text-4xl font-bold">airbnb</span>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2">

          <FaSpotify className="h-12 w-12 text-green-500" /> <span className="text-green-500 text-3xl font-bold">Spotify</span>
          </div>
          <FaUber className="h-16 w-16 text-white" />
          <h3 className="text-5xl font-bold text-blue-500 ">facebook</h3>
          <h3 className="text-5xl font-bold text-blue-500 ">G<span className="text-rose-500">o</span><span className="text-yellow-500">o</span>g<span className="text-green-500">l</span>e</h3>
        </div>

        {/* Repeat the logos for seamless effect */}
        <div className="flex space-x-32 animate-slide">
        <FaAmazon className="h-16 w-16 text-yellow-500 " />
          <div className="flex flex-shrink-0">
          <FaAirbnb className="h-12 w-12 text-red-500" /><span className="text-rose-500 text-4xl font-bold">airbnb</span>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2">

          <FaSpotify className="h-12 w-12 text-green-500" /> <span className="text-green-500 text-3xl font-bold">Spotify</span>
          </div>
          <FaUber className="h-16 w-16 text-white" />
          <h3 className="text-5xl font-bold text-blue-500 ">facebook</h3>
          <h3 className="text-5xl font-bold text-blue-500 ">G<span className="text-rose-500">o</span><span className="text-yellow-500">o</span>g<span className="text-green-500">l</span>e</h3>
        </div>

      </div>
    </div>
  );
};

export default LogoSlider;
