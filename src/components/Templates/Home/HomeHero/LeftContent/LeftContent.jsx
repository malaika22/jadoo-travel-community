import React from "react";
import { motion } from "framer-motion";
import HeadingDecor from "../../../../../assets/heroSection/heading-decor.png";
const LeftContent = () => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      whileInView={{
        transition: { ease: "easeOut", duration: 2 },
        x: 0,
        opacity: 1,
      }}
    >
      <div className='text-[#DF6951] font-bold text-xl py-5'>
        Best Destinations around the world
      </div>
      <div className='text-primary font-bold text-7xl w-[600px]'>
        Travel,{" "}
        <div className='inline-block w-fit'>
          <span>enjoy</span>
          <img
            src={HeadingDecor}
            alt='Heading decor'
            className='w-[300px] absolute'
          />
        </div>{" "}
        and live a new and full life
      </div>
      <p className='text-primaryLight text-lg font-semibold w-[500px] py-10'>
        Built Wicket longer admire do barton vanity itself do in it. Preferred
        to sportsmen it engrossed listening. Park gate sell they west hard for
        the.
      </p>
    </motion.div>
  );
};

export default LeftContent;
