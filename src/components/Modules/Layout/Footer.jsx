import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import {
  bounceVariants,
  hoverMotion,
  linkVariants,
  opacityVariants,
} from "../../../constants/variants.constant";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const variant = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const titleVariant = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Mobile"],
    },
    {
      title: "Contact",
      links: ["Help/FAQ", "Press", "Affilates"],
    },
    {
      title: "More",
      links: ["Airlinefees", "Airline", "Low fare tips"],
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
      >
        <div className='py-20'>
          <Container>
            <motion.div
              animate={visible ? "visible" : "invisible"}
              variants={opacityVariants}
              initial='invisible'
              whileInView={() => setVisible(true)}
              transition={{ duration: 0.5 }}
              className='text-center max-w-6xl grid grid-cols-4 mx-auto'
            >
              <div className='col-span-1'>
                <h4 className='text-primary text-4xl font-bold mb-5'>Jadoo.</h4>
                <p className='text-primaryLight font-semibold'>
                  Book your trip in minute, get full Control for much longer.
                </p>
              </div>
              <div className='grid grid-cols-3 col-span-2'>
                {footerLinks.map(({ title, links }) => (
                  <motion.div
                    key={title}
                    variants={variant}
                    animate={visible ? "show" : "hidden"}
                  >
                    <motion.div
                      variants={titleVariant}
                      className='text-[#080809] font-bold text-lg mb-3'
                    >
                      {title}
                    </motion.div>
                    {links.map((link, i) => (
                      <motion.div
                        className='text-primaryLight font-semibold py-1 w-fit mx-auto cursor-pointer'
                        key={i}
                        variants={{
                          hidden: {
                            y: 200,
                            opacity: 0,
                          },
                          show: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              duration: 1,
                            },
                          },
                        }}
                      >
                        {link}
                        <motion.div
                          variants={hoverMotion}
                          className='h-[2px] bg-red-500 '
                        ></motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </div>
              <div className='col-span-1'>
                <div className='flex items-start justify-center'>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1 }}
                  >
                    <FaFacebookF className='text-[#080809] text-xl' />
                  </motion.div>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <AiFillInstagram className='text-[#080809] text-xl' />
                  </motion.div>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    <AiOutlineTwitter className='text-[#080809] text-xl' />
                  </motion.div>
                </div>
                <div className='text-primaryLight text-lg font-semibold my-6'>
                  Discover our app
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Footer;
