import React, { useEffect, useState } from "react";
import Title from "../layouts/Title";

import { PopupExample } from "./Popup";
import { BsGithub } from "react-icons/bs";
import { FaAndroid, FaGlobe } from "react-icons/fa";
import { SiIos } from "react-icons/si";
import { ImageCarousel } from "./imageChanger";

// import vanconCap from "../../assets/videos/vanconCaptain.mp4";
// import vanconCus from "../../assets/videos/vancon.mp4";
// import toemanCus from "../../assets/videos/towman.mp4";
// import bigEatSmall from "../../assets/videos/bigEatSmall.mp4";
const ProjectData = [
  {
    title: "Flowers",
    des: "Flower embroidery is a delicate art that involves stitching floral designs onto fabric using various techniques and colorful threads. It enhances garments, accessories, and home décor with intricate, nature-inspired patterns.",
    images: [
      "(1).BMP", "(2).BMP", "(3).BMP", "(4).BMP", "(6).BMP", "(7).BMP", "(8).BMP", 
      "(9).BMP", "(10).BMP", "(11).BMP", "(12).BMP", "(13).BMP", "(14).BMP", "(15).BMP", "(16).BMP", 
      "(17).BMP", "(18).BMP", "(19).BMP", "(20).BMP", "(21).BMP", "(22).BMP", "(23).BMP", "(24).BMP", 
      "(25).BMP", "(1).jpeg", "(2).jpeg",
      "(1).jpg", "(2).jpg", "(3).jpg", "(4).jpg", "(5).jpg", "(6).jpg", "(7).jpg", "(8).jpg", 
      "(9).jpg", "(10).jpg", "(11).jpg", "(12).jpg"
    ]


  }, 
  {
    title: "Collar and Hem",
    des: "Collar embroidery adds decorative designs to the neckline, enhancing garments with intricate patterns. Hem embroidery adorns the bottom edge of clothing, offering a stylish finish with unique, eye-catching details",
    images: [
      "(1).BMP", "(2).BMP", "(3).BMP", "(4).BMP", "(5).BMP", "(6).BMP", "(7).BMP", "(8).BMP", "(9).BMP", "(10).BMP",
      "(11).BMP", "(12).BMP", "(13).BMP", "(14).BMP", "(15).BMP", "(16).BMP", "(17).BMP", "(18).BMP", "(19).BMP", "(20).BMP",
      "(21).BMP", "(22).BMP", "(23).BMP", "(24).BMP", "(25).BMP", "(26).BMP", "(27).BMP", "(28).BMP", "(29).BMP"
    ]

    
  }, 
];
const Projects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      // Cleanup overflow setting when the component is unmounted
      document.body.style.overflow = "";
    };
  }, [selectedItem]);
  const ProjectLinks = ({ it }) => {
    const { link, gitLink, iosLink, androidLink } = it;

    const iconStyle =
      "text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer";
    return (
      <div className="flex gap-4">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span className={iconStyle}>
              <FaGlobe />
            </span>
          </a>
        )}
        {gitLink && (
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <span className={iconStyle}>
              <BsGithub />
            </span>
          </a>
        )}
        {iosLink && (
          <a href={iosLink} target="_blank" rel="noopener noreferrer">
            <span className={iconStyle}>
              <SiIos />
            </span>
          </a>
        )}
        {androidLink && (
          <a href={androidLink} target="_blank" rel="noopener noreferrer">
            <span className={iconStyle}>
              <FaAndroid />
            </span>
          </a>
        )}
      </div>
    );
  };
  return (
    <section id="projects" className="w-full py-10">
      <div className="flex justify-center items-center text-center">
        <Title
         title="VISIT OUR WORK AND SHARE YOUR FEEDBACK"
des="Our Creations"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        {ProjectData.map((item, i) => {
          const { title, des, images } = item;
          return (
            <div
            onClick={() => {
              setSelectedItem(item);
            }}
            key={i}
            className="w-full p-8 xl:px-12 h-auto xl:py-8 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
          >
            <ImageCarousel item={item}/>
            {/* <div className="w-full h-[240px] overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
                src={require(`../../assets/categories/${title}/${images[10]}`)}
                alt={title}
              />
            </div> */}
            <div className="w-full mt-5 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base uppercase text-designColor font-normal">
                    {title}
                  </h3>
                  <ProjectLinks it={item} />
                </div>
                <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                  {des}
                </p>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      <PopupExample
        item={selectedItem}
        setItem={setSelectedItem}
        ProjectLinks={ProjectLinks}
      />
    </section>
  );
};

export default Projects;
