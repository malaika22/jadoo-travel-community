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

const cardHover = {
  hover: {
    height: "100px",
  },
};

const ServiceCard = ({ img, title, details }) => {
  return (
    <motion.div
      className='sm:h-[340px] relative'
      whileHover='hover'
      initial='initial'
    >
      <motion.div
        className='px-5 py-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer min-h-[200px] sm:w-[90%] bg-white ml-auto'
        variants={serviceCardVariant}
        whileHover='hover'
        initial='initial'
      >
        <div className=' min-h-[154px] flex items-center'>
          <img src={img} className='mx-auto' />
        </div>
        <div className='text-[#1E1D4C] font-bold'> {title}</div>
        <p className='text-primaryLight font-semibold my-4'>{details}</p>
      </motion.div>
      <motion.div
        className='bg-[#DF6951] hidden sm:block  absolute left-[-30px] sm:left-0 bottom-0 w-[100px] -z-10 rounded-tl-[30px] rounded-br-[10px]'
        variants={cardHover}
      ></motion.div>
    </motion.div>
  );
};

export default ServiceCard;

// shadow-[0_1.85px_3.15px_0px_rgba(0,0,0,0)] shadow-[0_1.85px_6.25px_0px_rgba(0,0,0,0.01)]
