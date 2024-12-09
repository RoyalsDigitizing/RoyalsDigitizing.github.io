import React, { useEffect, useState } from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { VideoPlayer } from "./VideoPlayer";
import { PopupExample } from "./Popup";
import { BsGithub } from "react-icons/bs";
import { FaAndroid, FaGlobe } from "react-icons/fa";
import { SiIos } from "react-icons/si";

// import vanconCap from "../../assets/videos/vanconCaptain.mp4";
// import vanconCus from "../../assets/videos/vancon.mp4";
// import toemanCus from "../../assets/videos/towman.mp4";
// import bigEatSmall from "../../assets/videos/bigEatSmall.mp4";
const ProjectData = [
  {
    title: "MRides",
    des: "MRides is a mobile app built on React Native with Redux, combining real-time ride-hailing and food delivery, complete with a cart system for seamless food orders.",
    longDes:
      "MRides is an all-in-one mobile application that merges ride-hailing and food delivery services. Developed using React Native with Redux for efficient state management, the app provides users with real-time ride-hailing options and a smooth food ordering experience, including a fully integrated cart system. The app uses various APIs to connect with external services, ensuring seamless communication and a responsive user experience. Available for both Android and iOS, MRides offers a unified platform for transportation and food delivery.",
    video: null,

    link: null,
    androidLink: "https://play.google.com/store/apps/details?id=com.mbe.mrides",
    iosLink: "https://play.google.com/store/apps/details?id=com.mbe.mrides",
    gitLink: null,
    image: "mride.png",
  },
  {
    title: "TowMan",
    des: "TowMen is a React Native app that helps users book towing and vehicle services quickly and safely, available on both Android and iOS.",
    longDes:
      "TowMen is a mobile application built using React Native, designed to provide 24/7 access to towing and vehicle services. Whether you need assistance with a flat tire, a jump start, or a tow, TowMen connects you with certified professionals ready to help. The app features a simple and intuitive interface, allowing users to request roadside assistance with just a few taps. With real-time tracking, you can see your tow truck's exact location and estimated arrival. TowMen provides upfront pricing, ensuring transparency with no hidden fees. Available for Android and iOS, TowMen is your reliable solution for quick and safe roadside assistance anytime, anywhere.",
    video: null,
    link: null,
    androidLink: "https://play.google.com/store/apps/details?id=com.mbe.towmen",
    iosLink: "https://apps.apple.com/in/app/towmen/id6502643578s",
    gitLink: null,
    image: "towmen.png",
  },
  {
    title: "VanCon",
    des: "VanCon helps commuters find and book van rides that match their routes, timings, and preferences with ease, available on both Android and iOS.",
    longDes:
      "VanCon is a mobile app designed for commuters to find van rides that fit their routes and schedules. Built with React Native, the app is available for both Android and iOS, offering a fully responsive design that adapts to various device sizes. Firebase provides real-time push notifications to keep users updated on ride availability and booking status. The app also features socket-based chat for direct communication with drivers, making coordination smoother. Supported by a Node.js backend and Firebase for storage, VanCon ensures a seamless booking experience.",
    video: null,
    link: null,
    androidLink:
      "https://drive.google.com/file/d/1RykIJ-aULeJsbwC0C4HKSkENYLQDH72p/view",
    iosLink: null,
    gitLink: "https://github.com/RafayRasheed/VanCon",
    image: "VanCon.png",
  },
  {
    title: "VanCon Captain",
    des: "VanCon Captain allows van drivers to connect with commuters and manage bookings efficiently, available on both Android and iOS.",
    longDes:
      "VanCon Captain, built using React Native for Android and iOS, is an app that helps van drivers offer rides, manage bookings, and communicate with passengers. It includes Firebase-powered push notifications for real-time updates on trip requests and confirmations. The app also features a socket-based chat system, enabling drivers to coordinate with passengers easily. With a responsive design, VanCon Captain adapts to different screen sizes, providing a smooth experience across devices. Node.js powers the backend while Firebase manages data storage, ensuring drivers can efficiently handle their operations.",
    video: null,

    link: null,
    androidLink:
      "https://drive.google.com/file/d/1cZWdDivWZ-ghX3K4M9pWH6rVhvn-aXK0/view",
    iosLink: null,
    gitLink: "https://github.com/RafayRasheed/VanConCaptain",
    image: "VanConCaptain.png",
  },

  {
    title: "FoodApp",
    des: "FoodApp allows users to order food, search by restaurant, item, or category, and save favorite restaurants, built with React Native and Firebase.",
    longDes:
      "FoodApp is a mobile application built on React Native, using Firebase to provide seamless food ordering and search functionality. Users can easily browse by restaurant, specific food items, or categories such as cuisine type. The app also offers the ability to save favorite restaurants for quick access to preferred dining options. Firebase ensures real-time updates, secure data handling, and a smooth ordering experience, making FoodApp a convenient platform for exploring and enjoying meals across various restaurants. Available for both Android and iOS, it delivers a responsive and intuitive user interface.",
    video: null,
    link: null,
    androidLink: null,
    iosLink: null,
    gitLink: "https://github.com/RafayRasheed/foodApp",
    image: "foodApp.png",
  },
  {
    title: "FoodApp Chef",
    des: "FoodApp Chef is the restaurant management interface of FoodApp, enabling chefs and restaurant staff to manage menus, orders, and specials dynamically.",
    longDes:
      "FoodAppChef is the backend application for restaurants using FoodApp, designed for efficient menu and order management. Built with React Native and integrated with Firebase, this platform allows chefs and restaurant staff to update dynamic menus, manage daily specials, and handle incoming orders in real-time. The app provides tools for modifying item availability, adjusting prices, and adding or removing menu items, ensuring that the restaurant's offerings are always current and accurately represented. With real-time updates and secure data handling via Firebase, FoodAppChef streamlines restaurant operations and enhances the overall dining experience for customers.",
    video: null,
    link: null,
    androidLink: null,
    iosLink: null,
    gitLink: "https://github.com/RafayRasheed/FoodAppChef",
    image: "foodAppChef.png",
  },
  {
    title: "Big Eat Small",
    des: "Big Eat Small is a React Native game that enhances the classic Tic Tac Toe experience, featuring a pro version where players use 9 pieces of varying sizes, with larger pieces able to be placed on smaller ones, and real-time updates via Firebase.",
    longDes:
      "Big Eat Small is a strategic game built with React Native and Firebase that offers a sophisticated twist on the classic Tic Tac Toe. In this pro version, players have 9 pieces of three different sizes—small, medium, and large. The unique gameplay mechanic allows larger pieces to be placed on top of smaller ones, adding an extra layer of strategy and depth. Firebase enables real-time updates, ensuring that moves and game states are synchronized instantly between players. With its engaging gameplay and innovative mechanics, Big Eat Small provides a fresh and challenging experience for fans of classic board games.",
    video: null,
    link: null,
    androidLink: null,
    iosLink: null,
    gitLink: "https://github.com/RafayRasheed/Big_Eat_Small_Latest",
    image: "bigeatsmall.png",
  },
  {
    title: "ChatApp",
    des: "ChatApp is an Android-only chat application using Firebase Realtime Database, with features including group creation for seamless communication.",
    longDes:
      "ChatApp is a dedicated Android chat application built using Firebase Realtime Database to ensure instant and reliable message delivery. Users can chat one-on-one or create groups for collaborative conversations, making it perfect for both personal and team communication. The app offers a streamlined interface with real-time updates, ensuring that messages and group activities are synchronized instantly across all participants.",
    video: null,
    link: null,
    androidLink: "",
    iosLink: null,
    gitLink: "https://github.com/RafayRasheed/Chat_Now",
    image: "chatapp.png",
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
          const { title, des, image } = item;
          return (
            <div
              onClick={() => {
                setSelectedItem(item);
              }}
              key={i}
              className="w-full p-8 xl:px-12 h-auto xl:py-8 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
            >
              <div className="w-full h-[50%] overflow-hidden rounded-lg">
                <img
                  className="w-full h-full  overflow-hidden object-cover group-hover:scale-110 duration-300 cursor-pointer"
                  src={require(`../../assets/images/projects/${image}`)}
                />
              </div>
              <div className="w-full mt-5 flex flex-col  gap-6">
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
