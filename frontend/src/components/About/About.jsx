import React from "react";
import imageAbout from "../../assets/About2.jpeg";

const About = () => {
  return (
    <div id="about">
    <section  className="flex flex-col md:flex-row items-center justify-center  px-10 mt-72">
      <div className="max-w-7xl w-full rounded-3xl overflow-hidden flex flex-col md:flex-row">
        
        {/* الصورة - تميل باتجاه النص */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center perspective">
          <img
            src={imageAbout}
            alt="About"
            className="w-[95%] h-[450px] object-cover absolute left-[12%] transform rotate-y-6 transition-transform duration-700"
          />
        </div>

        {/* النص */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-10 perspective bg-amber-50">
          <h1 className="text-5xl font-bold mb-6 transform -rotate-y-6 transition-transform duration-700 text-customRed">
            About Us
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 transform -rotate-y-6 transition-transform duration-700">
            Based in Jordan, we are committed to empowering local businesses by
            connecting them with unique, diverse, and rare content of the highest
            quality. Our mission is to specialize in managing social media
            accounts, creating creative content, and monitoring advertising
            campaigns to help small and medium-sized businesses build an effective
            digital presence.
          </p>
          <button className="bg-customRed text-white font-semibold text-lg px-8 py-3 rounded-full w-fit transform -rotate-y-6 transition-all duration-500 hover:bg-white hover:text-customRed hover:border hover:border-customRed">
            Read More
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
