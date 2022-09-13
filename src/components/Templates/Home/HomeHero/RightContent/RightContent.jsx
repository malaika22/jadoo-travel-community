import React from "react";
import { motion } from "framer-motion";
import HeroDecor from "../../../../../assets/heroSection/hero-decor.png";

const RightContent = () => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      whileInView={{
        transition: { ease: "easeOut", duration: 2 },
        x: 0,
        opacity: 1,
      }}
    >
      <img src={HeroDecor} className='w-[620px]' />
    </motion.div>
  );
};

export default RightContent;
