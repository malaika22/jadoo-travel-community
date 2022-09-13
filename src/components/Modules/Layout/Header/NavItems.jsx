import React from "react";
import { motion } from "framer-motion";
const NavItems = ({ href, title }) => {
  const hoverMotion = {
    rest: {
      width: 0,
      backgroundColor: "#5e6282",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial='rest'
      whileHover='hover'
      animate='rest'
      className='w-fit mx-auto'
    >
      <motion.a href={href} className='text-secondaryLight font-semibold'>
        {title}
      </motion.a>
      <motion.div className='h-[2px]' variants={hoverMotion}></motion.div>
    </motion.div>
  );
};

export default NavItems;
