import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import Container from "../../../Modules/Container/Container";
import { motion } from "framer-motion";
import { BiEnvelope } from "react-icons/bi";
import { opacityVariants } from "../../../../constants/variants.constant";
import BG from "../../../../assets/contact/contact-bg.png";
import BottomDecor from "../../../../assets/contact/bottom-decor.png";
import RightDecor from "../../../../assets/contact/right-decor.png";
import { RiSendPlaneFill } from "react-icons/ri";
const Contact = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className='my-20'>
          <motion.div
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            style={{
              backgroundImage: `url(${BG})`,
            }}
            initial='invisible'
            whileInView={() => setVisible(true)}
            transition={{ duration: 0.5 }}
            className='relative text-center py-20 rounded-xl max-w-6xl mx-auto bg-no-repeat bg-cover'
          >
            <Container>
              <h4 className='text-primaryLight text-3xl font-semibold leading-relaxed max-w-3xl mx-auto'>
                Subscribe to get information, latest news and other interesting
                offers about Cobham
              </h4>
              <div className='flex flex-col sm:flex-row  items-center max-w-2xl gap-y-8 mx-auto justify-center gap-x-7 pt-20'>
                <div className='relative w-full sm:w-[400px] shadow-lg rounded-lg '>
                  <input
                    className='text-[#39425D] w-full  py-5  outline-none rounded-lg pl-10 transition-all ease-in-out duration-[.15s]   focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]'
                    placeholder='Your email'
                  />
                  <BiEnvelope className='absolute top-0 bottom-0 h-fit m-auto text-xl ml-2 text-[#39425D]' />
                </div>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className='bg-gradient-to-t from-[#FF946D] to-[#FF7D68] w-full inline-block sm:w-fit px-10 py-5 text-white rounded-xl'
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
              <motion.div className='absolute right-0 top-0 -z-10 grayscale sm:block hidden'>
                <img src={RightDecor} />
              </motion.div>
              <motion.div className='absolute bottom-0 left-0 -z-10 grayscale'>
                <img src={BottomDecor} className='h-full' />
              </motion.div>
              <motion.div
                className='bg-gradient-to-t  rounded-full flex items-center justify-center from-[#747DEF] to-[#5E3BE1] absolute -top-6 sm:-right-6  -right-0'
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                }}
              >
                <RiSendPlaneFill className='text-white text-3xl m-5 font-bold' />
              </motion.div>
            </Container>
          </motion.div>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Contact;
