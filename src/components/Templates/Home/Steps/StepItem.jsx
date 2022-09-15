import React from "react";
import { motion } from "framer-motion";

const StepItem = ({ step, description, img }) => {
  const itemVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div className='mb-7 max-w-sm mr-auto flex' variants={itemVariant}>
      <div className='mr-5 w-24'>
        <img src={img} alt={step} className='w-16' />
      </div>
      <div className='text-left'>
        <h4 className='font-bold text-primaryLight text-lg'>{step}</h4>
        <p className='text-primaryLight'>{description}</p>
      </div>
    </motion.div>
  );
};

export default StepItem;
