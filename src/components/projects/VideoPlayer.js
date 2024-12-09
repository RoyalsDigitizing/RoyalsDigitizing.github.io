// src/VideoPlayer.js
import React, { useState } from "react";
// import video from "/videos/vancon.mp4";

export const VideoPlayer = ({ video }) => {
  //***************** */ For Local File  *************************
  if (!video) {
    return null;
  }
  return (
    <div className="flex justify-center mt-2 mb-6">
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "37%", // 16:9 Aspect Ratio (height / width * 100%)
          overflow: "hidden",
        }}
      >
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain", // Fit the video inside the container
          }}
          controls
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <video
        className="w-[calc(100%_-_300px)] h-[calc(100%_-_300px)] object-contain"
        controls
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  //***************** */ For Youtube  *************************
  //   const videoId = "hu1FI8Ej0MM";
  //   return (
  //     <div
  //       className="video-container"
  //       style={{
  //         position: "relative",
  //         paddingBottom: "56.25%",
  //         height: 0,
  //         overflow: "hidden",
  //       }}
  //     >
  //       <iframe
  //         title="YouTube video"
  //         width="100%"
  //         height="100%"
  //         src={`https://www.youtube.com/embed/${videoId}`}
  //         frameBorder="0"
  //         allowFullScreen
  //         style={{ position: "absolute", top: 0, left: 0 }}
  //       />
  //     </div>
  //   );
  //***************** */   for Choose file ***********************
  //   const [videoUrl, setVideoUrl] = useState(null);
  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       const url = URL.createObjectURL(file);
  //       setVideoUrl(url);
  //     }
  //   };
  //   return (
  //     <div className="p-4">
  //       <input
  //         type="file"
  //         accept="video/*"
  //         onChange={handleFileChange}
  //         className="mb-4 p-2 border border-gray-300 rounded"
  //       />
  //       {videoUrl && (
  //         <div className="flex flex-col items-center">
  //           <video
  //             className="w-full max-w-lg border border-gray-300 rounded"
  //             controls
  //             src={videoUrl}
  //           >
  //             Your browser does not support the video tag.
  //           </video>
  //           <div className="mt-4 flex gap-2">
  //             <button
  //               onClick={() => document.querySelector("video").play()}
  //               className="px-4 py-2 bg-blue-500 text-white rounded"
  //             >
  //               Play
  //             </button>
  //             <button
  //               onClick={() => document.querySelector("video").pause()}
  //               className="px-4 py-2 bg-gray-500 text-white rounded"
  //             >
  //               Pause
  //             </button>
  //             <input
  //               type="range"
  //               min="0"
  //               max="1"
  //               step="0.01"
  //               onChange={(e) =>
  //                 (document.querySelector("video").volume = e.target.value)
  //               }
  //               defaultValue="1"
  //               className="self-center"
  //             />
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
};
