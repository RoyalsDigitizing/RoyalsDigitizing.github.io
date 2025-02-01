import React from "react";
import {
  FaFacebookF,

  FaInstagram,

  FaWhatsapp,

} from "react-icons/fa";
// import meImage from '';
import { photo,illus,  wil } from "../../assets/index";

import { MdMail } from "react-icons/md";

export const FindMe = () => {
  return (
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
      <div className="flex gap-4">
        {/* <a
          href="https://www.linkedin.com/in/rafay-rasheed-3b398a215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </a> */}

        <a
          href="https://wa.me/+923300839027"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <FaWhatsapp />
          </span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61564961744933"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
        </a>
        <a
          href="mailto:royalsdigitizing@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <MdMail />
          </span>
        </a>
        <a
          href="https://www.instagram.com/royalsdigitizer?igsh=MXBncWgxZzNhaHdudA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </a>
      </div>
    </div>
  );
};
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <FindMe />
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-7">
          <span className="bannerIcon2">
          <img
              src={wil}
              className="w-12 h-12 object-cover"
            />

          </span>
  

          <span className="bannerIcon2">
          <img
              src={photo}
              className="w-full h-full object-cover"
            />

          </span>
          <span className="bannerIcon2">
          <img
              src={illus}
              className="w-full h-full object-cover"
            />

          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
