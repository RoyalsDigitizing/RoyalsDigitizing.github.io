import React, { useState, useEffect } from "react";

export const ImageCarousel = ({ item }) => {
    const { title, images } = item;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every second (1000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0 after last image
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div className="w-full h-[240px] overflow-hidden rounded-lg">
   <img
        className="w-full h-full  group-hover:scale-110 duration-300 cursor-pointer"
        src={require(`../../assets/categories/${title}/${images[currentIndex]}`)}
        alt={title}
      />
      {/* <img
        className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={require(`../../assets/categories/${title}/${images[currentIndex]}`)}
        alt={title}
      /> */}

    </div>
  );
};

