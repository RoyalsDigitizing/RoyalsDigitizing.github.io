import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillArray = [
    { name: "React Native", rate: "95%" },
    { name: "NodeJs", rate: "85%" },
    { name: "NextJS", rate: "80%" },
    { name: "ReactJS", rate: "80%" },
    { name: "Javascript", rate: "90%" },

    { name: "MongoDB", rate: "75%" },
    { name: "Python", rate: "90%" },
    { name: "Java", rate: "70%" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-0 font-titleFont flex  gap-10 lgl:gap-20"
    >
      {/* <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Photoshot</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Adobe XD.</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">60%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Adobe Illustrator</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Design</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div> */}

      <div className="w-full lgl:w/2">
        <div className="py-10 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Expertise
          </p>
          <h2 className="text-2xl  md:text-4xl  font-bold">
            Development Skill
          </h2>
        </div>
        {/* <div className="h-12"></div> */}
        <div className="flex flex-col gap-6">
          {skillArray.map((item) => {
            const { rate, name } = item;
            return (
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{name}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                    style={{ width: rate }}
                  >
                    <span className="absolute -top-7 right-0">{rate}</span>
                  </motion.span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="h-60"></div> */}
    </motion.div>
  );
};

export default Skills;
