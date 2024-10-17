import React from "react";
// import video from "../asset/demo.mp4"

const VideoComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <video
        className="w-full max-w-4xl rounded-lg shadow-lg"
        controls
        autoPlay
        loop
        muted
      >
        <source src='/demo.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default VideoComponent;

// "use client"

// import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player"; // Example for video component

// const VideoComponent = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   // Ensuring the component mounts only on the client
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null; // Prevent server-side rendering
//   }

//   return (
//     <div className="video-wrapper">
//       <ReactPlayer
//         url="/demo.mp4"
//         playing={true}
//         loop={true}
//         muted={true}
//         controls={true}
//         width="100%"
//         height="100%"
//       />
//     </div>
//   );
// };

// export default VideoComponent;
