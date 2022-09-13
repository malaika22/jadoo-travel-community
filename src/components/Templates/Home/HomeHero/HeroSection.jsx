import React from "react";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";

const HeroSection = () => {
  return (
    <div className='grid grid-cols-2 overflow-hidden  px-20 py-10'>
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default HeroSection;
