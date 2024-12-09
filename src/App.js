import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
// import Features from "./components/features/Features";
// import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
// import Resume from "./components/resume/Resume";
// import Testimonial from "./components/tesimonial/Testimonial";
// import { PopupExample } from "./components/projects/Popup";

function App() {
  // #161617
  // #313438
  return (
    <div
      className="w-full h-auto bg-bodyColor text-lightText"
      // style={{
      //   overflowY: "scroll",
      //   scrollbarWidth: "none",
      //   scrollbarColor: "gray #27272b",
      // }}
    >
      <style>
        {`
          /* WebKit Scrollbar Styles */
          ::-webkit-scrollbar {
            width: 12px;
          }
          ::-webkit-scrollbar-track {
            background-color: #27272b;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #3d3d40;
            border-radius: 20px;
          }
        `}
      </style>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4">
        <Banner />
        <Projects />

        {/* <Features /> */}
        {/* <Resume /> */}
        {/* <Testimonial /> */}
        <Contact />
        {/* <Footer /> */}
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
