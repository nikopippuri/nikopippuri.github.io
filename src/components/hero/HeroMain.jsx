import React from "react";
import HeroBtn from "./HeroBtn";
import HeroText from "./HeroText";
import HeroBackground from "./HeroBackground";

const HeroSection = ({ menuOpen }) => {
  return (
    <section id="about"
      className={`w-full flex justify-center relative text-center px-6 ${
        menuOpen ? "pt-[300px]" : "pt-[100px]"
      }`}
    >
      <div className="max-w-4xl">
       
        {/* Nimi ja titteli */}
        <HeroText />
        <div className="flex justify-center gap-4 mt-6"><HeroBackground/></div>
        <div className="flex justify-center gap-4 mt-6">
          
          <HeroBtn text="GitHub" link="https://github.com/nikopippuri" />
          <HeroBtn text="Linkedin" link="http://www.linkedin.com/in/niko-pippuri" />
        </div>
       
        {/* Toimintopainikkeet */}
      </div>
      
    </section>
  );
};

export default HeroSection;
