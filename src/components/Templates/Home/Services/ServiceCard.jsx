import React from "react";
import { motion } from "framer-motion";

const serviceCardVariant = {
  hover: {
    scale: 1,
    borderRadius: "10px",
  },
  initial: {
    borderRadius: 0,
  },
};

const ServiceCard = ({ img, title, details }) => {
  return (
    <motion.div
      className=' hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[200px]'
      variants={serviceCardVariant}
      whileHover='hover'
      initial='initial'
    >
      <img />
      <div>{title}</div>
    </motion.div>
  );
};

export default ServiceCard;

// shadow-[0_1.85px_3.15px_0px_rgba(0,0,0,0)] shadow-[0_1.85px_6.25px_0px_rgba(0,0,0,0.01)]
