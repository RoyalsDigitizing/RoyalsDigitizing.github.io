import React from "react";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-12 py-10 max-h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-10 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-lg md:text-xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm md:text-base text-gray-400">{des}</p>
            {/* Uncomment below to add an arrow icon */}
            {/* <span className="text-lg text-designColor">
    <HiArrowRight />
  </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
