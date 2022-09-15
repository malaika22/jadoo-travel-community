import React from "react";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";
const DestinationCard = ({ img, title, price, duration }) => {
  const item = {
    show: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <motion.div
      variants={item}
      transition={{ duration: 1 }}
      className='w-[300px] mx-auto bg-white shadow-xl rounded-[20px] scale-100'
    >
      <div className='h-[300px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px]'>
        <img src={img} alt={title} />
      </div>

      <div className='py-5 px-4'>
        <div className='flex justify-between items-center'>
          <span className='text-primaryLight font-semibold text-lg'>
            {title}
          </span>
          <span className='text-primaryLight font-semibold'>{price}</span>
        </div>
        <div className='flex items-center text-primaryLight mt-4'>
          <IoIosSend />
          <span className='ml-2 font-semibold'>{duration} Days Trip</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
