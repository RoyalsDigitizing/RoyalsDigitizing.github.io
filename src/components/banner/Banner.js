import React from "react";
import LeftBanner from "./LeftBanner";
// import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section id="home" className="w-full h-auto">
      <div className=" h-20"></div>

      <div className="flex flex-col xl:gap-0 lgl:flex-row items-center] font-titleFontr">
        <LeftBanner />
        {/* <RightBanner /> */}
      </div>
      <div className=" h-20"></div>
    </section>
  );
};

export default Banner;
