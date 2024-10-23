"use client"
import React, { useState, useRef } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Initially playing without sound
  const videoRef = useRef(null); // Reference to the video element

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.muted = false; // Unmute the video
        videoRef.current.volume = 0.3; // Set volume to 50%
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <div className="flex items-center justify-center relative">
      <video
        ref={videoRef}
        className="w-[74vw]  rounded-lg shadow-lg"
        autoPlay
        loop
        muted // Initially muted for autoplay
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
        onClick={handlePlayPauseClick}
      >
        {isPlaying ? (
          <FaPauseCircle className="text-6xl" />
        ) : (
          <FaPlayCircle className="text-6xl" />
        )}




      </div>
      
    </div>
  );
};

export default VideoComponent;
