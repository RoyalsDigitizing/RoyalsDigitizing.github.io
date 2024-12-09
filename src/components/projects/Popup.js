import React, { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import Title from "../layouts/Title";
import { motion } from "framer-motion";

export const PopupExample = ({ item, setItem, ProjectLinks }) => {
  const togglePopup = () => {
    setItem(null);
  };
  if (!item) {
    return null;
  }
  const Spacer = ({ paddingT }) => {
    const heightClass = `h-[${paddingT / 2}px] md:h-[${paddingT}px] lg:h-[${
      paddingT * 1.5
    }px]`;

    return <div className={heightClass} />;
  };
  const { title, des, longDes, video, link, androidLink, iosLink, gitLink } =
    item;
  return (
    <div>
      {/* Full window overlay */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto"
      >
        <div className="bg-bodyColor p-0 md:p-2 pt-6 rounded-2xl shadow-lg  h-[calc(100%_-_130px)] mx-4 md:mx-8 my-8 relative overflow-auto ">
          <button
            onClick={togglePopup}
            className="fixed top-6   mx-2 md:mx-6 right-2 bg-red-500 h-7 w-7 rounded-full flex items-center justify-center z-10"
          >
            <h1 className="text-sm md:text-lg font-bold text-white">X</h1>
          </button>
          <div
            className="overflow-auto h-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex justify-center pt-0 sm:pt-0 md:pt-4 lg:pt-6   items-center text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
                {title}
              </h1>
            </div>

            <div className="flex flex-row gap-0 justify-between">
              <div
                className="px-4 md:px-6"
                style={{
                  flex: 1,
                }}
              >
                <h1 className="text-base mt-5 mb-2 md:mt-8 md:mb-4 md:text-lg lg:text-xl font-bold text-designColor">
                  Overview
                </h1>
                <h2 className="text-sm md:text-base lg:text-lg mb-2">{des}</h2>
                <h1 className="text-base mt-5 mb-2 md:mt-8 md:mb-4  md:text-lg lg:text-xl font-bold text-designColor">
                  Description
                </h1>
                <h2 className="text-sm md:text-base lg:text-lg mb-2">
                  {longDes}
                </h2>
                <h1 className="text-base mt-5 mb-2 md:mt-8 md:mb-4 md:text-lg lg:text-xl font-bold text-designColor">
                  Links
                </h1>
                <ProjectLinks it={item} />
                {video && (
                  <>
                    <h1 className="text-base mt-5 mb-2 md:mt-8 md:mb-4 md:text-lg lg:text-xl font-bold  text-designColor">
                      Video
                    </h1>
                    <div style={{ height: "10px" }} />
                    <VideoPlayer video={video} />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Close button with cross icon in the top right */}
          {/* Close button with cross icon in the top right */}
        </div>
      </motion.div>
    </div>
  );
};
