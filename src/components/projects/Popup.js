import React from "react";
import { VideoPlayer } from "./VideoPlayer";
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
  const { title, images } = item;

  return (
    <div>
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
              // Remove these properties to show the scrollbar
              scrollbarWidth: "thin", // Optional: makes the scrollbar thin in modern browsers
              msOverflowStyle: "auto",
              //  backgroundColor: "#000000"
            }}
          >
            <div className="flex justify-center pt-0 sm:pt-0 md:pt-2 lg:pt-4 items-center text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize">
                {title}
              </h1>
            </div>

            {/* Images */}
            <div className="flex flex-wrap gap-4 pt-2 sm:pt-4 md:pt-6 lg:pt-8 justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="px-4 md:px-6 w-full sm:w-1/2 lg:w-1/3 flex justify-center"
                  style={{
                    maxWidth: "calc(33.33% - 1rem)", // Ensure each image takes up one-third of the container
                  }}
                >
                  <img
                    src={require(`../../assets/categories/${title}/${image}`)}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Ensures the image fills the container without gaps
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Close button with cross icon in the top right */}
          {/* Close button with cross icon in the top right */}
        </div>
      </motion.div>
    </div>
  );
};
