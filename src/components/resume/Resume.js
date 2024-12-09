import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(true);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-10  ">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-3 gap">
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-transparent border-b-designColor" // Only bottom border, no other borders
                : "border-transparent"
            } resumeLi text-center p-3 text-sm md:text-lg lg:text-xl transition-all duration-200`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData
                ? "border-transparent border-b-designColor" // Only bottom border, no other borders
                : "border-transparent"
            } resumeLi text-center p-3 text-sm md:text-lg lg:text-xl transition-all duration-200`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-transparent border-b-designColor" // Only bottom border, no other borders
                : "border-transparent"
            } resumeLi text-center p-3 text-sm md:text-lg lg:text-xl transition-all duration-200`}
          >
            Education
          </li>

          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-transparent border-b-designColor " // Only bottom border, no other borders
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li> */}
        </ul>
      </div>

      <div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {/* {achievementData && <Achievement />} */}
        {experienceData && <Experience />}

        {/* <div className="h-10"></div> */}
      </div>
    </section>
  );
};

export default Resume;
