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
      "(1).jpg",
      "(2).jpg",
      "(3).jpg",
      "(4).jpg",
      "(5).jpg",
      "(6).jpg",
      "(7).jpg",
      "(8).jpg",
      "(9).jpg",
      "(10).jpg",
      "(11).jpg",
      "(12).jpg",
      "(13).jpg",
      "(14).jpg",
      "(15).jpg",
      "(16).jpg",
      "(17).jpg",
      "(18).jpg",
      "(19).jpg",
      "(20).jpg",
      "(21).jpg",
      "(22).jpg",
      "(23).jpg",
      "(24).jpg",
      "(25).jpg",
      "(26).jpg",
      "(27).jpg",
      "(28).jpg",
      "(29).jpg",
      "(30).jpg",
      "(31).jpg",
      "(32).jpg",
      "(33).jpg",
      "(34).jpg",
      "(35).jpg",
      "(36).jpg",
      "(37).jpg",
      "(38).jpg",
    ],
  },
  {
    title: "Collar and Hem",
    des: "Collar embroidery adds decorative designs to the neckline, enhancing garments with intricate patterns. Hem embroidery adorns the bottom edge of clothing, offering a stylish finish with unique, eye-catching details",
    images: [
      "(1).jpg",
      "(2).jpg",
      "(3).jpg",
      "(4).jpg",
      "(5).jpg",
      "(6).jpg",
      "(7).jpg",
      "(8).jpg",
      "(9).jpg",
      "(10).jpg",
      "(11).jpg",
      "(12).jpg",
      "(13).jpg",
      "(14).jpg",
      "(15).jpg",
      "(16).jpg",
      "(17).jpg",
      "(18).jpg",
      "(19).jpg",
      "(20).jpg",
      "(21).jpg",
      "(22).jpg",
      "(23).jpg",
      "(24).jpg",
      "(25).jpg",
      "(26).jpg",
      "(27).jpg",
      "(28).jpg",
      "(29).jpg",
    ],
  },

  {
    title: "Kids Designing",
    des: "Kids Designing Embroidery specializes in creating fun and playful designs for children's clothing. We offer a variety of colorful, vibrant patterns that bring joy to any garment.Our high-quality embroidery ensures lasting, beautiful designs for your little ones.",
    images: [
      "(1).jpg",
      "(2).jpg",
      "(3).jpg",
      "(4).jpg",
      "(5).jpg",
      "(6).jpg",
      "(7).jpg",
      "(8).jpg",
      "(9).jpg",
      "(10).jpg",
      "(11).jpg",
      "(12).jpg",
      "(13).jpg",
      "(14).jpg",
      "(15).jpg",
      "(16).jpg",
      "(17).jpg",
      "(18).jpg",
      "(19).jpg",
      "(20).jpg",
      "(21).jpg",
      "(22).jpg",
      "(23).jpg",
      "(24).jpg",
      "(25).jpg",
      "(26).jpg",
      "(27).jpg",
      "(28).jpg",
      "(29).jpg",
      "(30).jpg",
      "(31).jpg",
      "(32).jpg",
      "(33).jpg",
      "(34).jpg",
      "(35).jpg",
      "(36).jpg",
      "(37).jpg",
      "(38).jpg",
      "(39).jpg",
      "(40).jpg",
      "(41).jpg",
      "(42).jpg",
      "(43).jpg",
      "(44).jpg",
      "(45).jpg",
      "(46).jpg",
      "(47).jpg",
      "(48).jpg",
      "(49).jpg",
      "(50).jpg",
      "(51).jpg",
      "(52).jpg",
      "(53).jpg",
      "(54).jpg",
      "(55).jpg",
      "(56).jpg",
      "(57).jpg",
      "(58).jpg",
      "(59).jpg",
      "(60).jpg",
      "(61).jpg",
      "(62).jpg",
      "(63).jpg",
      "(64).jpg",
      "(65).jpg",
      "(66).jpg",
      "(67).jpg",
      "(68).jpg",
      "(69).jpg",
      "(70).jpg",
      "(71).jpg",
    ],
  },
  
  {
    title: "Causions",
    des: "Cautions Embroidery offers unique and stylish designs for safety-related apparel. We provide bold, clear patterns that communicate important messages with style. Our high-quality embroidery ensures durability and visibility for all cautionary wear.",
    images: [
      "(1).jpg",
      "(2).jpg",
      "(3).jpg",
      "(4).jpg",
      "(5).jpg",
      "(6).jpg",
      "(7).jpg",
      "(8).jpg",
      "(9).jpg",
      "(10).jpg",
      "(11).jpg",
    ],
  },

  {
    title: "Net",
    des: "Net Embroidery specializes in intricate and modern designs for mesh and netted fabrics. We create lightweight, breathable embroidery patterns that complement the texture of net materials. Our high-quality stitching enhances the beauty and durability of net garments.",
    images: [
      "(1).jpg",
      "(2).jpg",
      "(3).jpg",
      "(4).jpg",
      "(5).jpg",
      "(6).jpg",
      "(7).jpg",
      "(8).jpg",
      "(9).jpg",
      "(10).jpg",
      "(11).jpg",
      "(12).jpg",
      "(13).jpg",
      "(14).jpg",
      "(15).jpg",
      "(16).jpg",
      "(17).jpg",
      "(18).jpg",
      "(19).jpg",
      "(20).jpg",
      "(21).jpg",
      "(22).jpg",
      "(23).jpg",
      "(24).jpg",
      "(25).jpg",
      "(26).jpg",
      "(27).jpg",
      "(28).jpg",
      "(29).jpg",
      "(30).jpg",
      "(31).jpg",
      "(32).jpg",
      "(33).jpg",
      "(34).jpg",
      "(35).jpg",
      "(36).jpg",
      "(37).jpg",
      "(38).jpg",
      "(39).jpg",
      "(40).jpg",
      "(41).jpg",
      "(42).jpg",
      "(43).jpg",
      "(44).jpg",
      "(45).jpg",
      "(46).jpg",
      "(47).jpg",
      "(48).jpg",
      "(49).jpg",
      "(50).jpg",
    ],
  },
  {
    title: "Animals",
    des: "Animals Embroidery brings life to your fabric with vibrant and detailed animal designs. Whether it’s wildlife, pets, or mythical creatures, our embroidery captures the essence of the animal world with precision and creativity, making every piece unique and eye-catching.",
    images: [
      "(1).jpg",
      "(2).jpg",
      "(3).jpg",
      "(4).jpg",
      "(5).jpg",
      "(6).jpg",
      "(7).jpg",
      "(8).jpg",
    ],
  },
  {
    title: "Sherwani",
    des: "Sherwani Embroidery adds elegance and royal charm to traditional attire. With intricate designs and exquisite detailing, our Sherwani embroidery enhances the beauty of this timeless garment, making it perfect for weddings, celebrations, and special occasions.",
    images: [
      "(1).jpg",
      "(2).jpg",
      "(3).jpg",
      "(4).jpg",
      "(5).jpg",
      "(6).jpg",
      "(7).jpg",
      "(8).jpg",
      "(9).jpg",
      "(10).jpg",
      "(11).jpg",
      "(12).jpg",
      "(13).jpg",
      "(14).jpg",
      "(15).jpg",
      "(16).jpg",
      "(17).jpg",
      "(18).jpg",
      "(19).jpg",
      "(20).jpg",
      "(21).jpg",
      "(22).jpg",
    
    ],
  },
  {
    title: "Miscellaneous",
    des: "Miscellaneous Embroidery covers a wide range of unique and creative designs, offering custom embroidery solutions for diverse needs. Whether it's for personalized gifts, home decor, or special event decorations, we provide high-quality embroidery tailored to your requirements.",
    images: [
      "(1).jpg",
      "(2).jpg",
      "(3).jpg",
      "(4).jpg",
      "(5).jpg",
      "(6).jpg",
      "(7).jpg",
      "(8).jpg",
      "(9).jpg",
      "(10).jpg",
      "(11).jpg",
      "(12).jpg",
      "(13).jpg",
      "(14).jpg",
    ],
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
              <ImageCarousel item={item} />
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
