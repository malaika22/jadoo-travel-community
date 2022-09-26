import React, { useState } from "react";
import { motion } from "framer-motion";
import HeadingDecor from "../../../../../assets/heroSection/heading-decor.png";
import ReactVisibilitySensor from "react-visibility-sensor";

const LeftContent = () => {
  const [visible, setVisible] = useState(false);
  const translateVariants = {
    invisible: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ top: 400 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <div className='overflow-hidden'>
        <motion.div
          initial='invisible'
          animate={visible ? "visible" : "invisible"}
          variants={translateVariants}
          transition={{ duration: 1.5 }}
          className='text-center md:text-left'
        >
          <div className='text-[#DF6951] font-bold text-xl py-5'>
            Best Destinations around the world
          </div>
          <div className='text-primary font-bold text-5xl  sm:text-6xl '>
            Travel,{" "}
            <div className='inline-block w-fit relative'>
              <span>enjoy</span>
              <img
                src={HeadingDecor}
                alt='Heading decor'
                className='absolute w-full'
              />
            </div>{" "}
            and live a new and full life
          </div>
          <p className='text-primaryLight text-lg font-semibold md:w-[500px] py-10'>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default LeftContent;
