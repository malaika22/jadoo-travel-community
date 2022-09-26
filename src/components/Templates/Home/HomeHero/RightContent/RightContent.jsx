import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroDecor from "../../../../../assets/heroSection/hero-decor.png";
import ReactVisibilitySensor from "react-visibility-sensor";

const RightContent = () => {
  const [visible, setVisible] = useState(false);

  const translateVariants = {
    invisible: {
      x: 500,
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
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ top: 400 }}
    >
      <div>
        <motion.div
          initial='invisible'
          animate={visible ? "visible" : "invisible"}
          variants={translateVariants}
          transition={{ duration: 1.5 }}
        >
          <img src={HeroDecor} className='w-[620px] ' />
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default RightContent;
