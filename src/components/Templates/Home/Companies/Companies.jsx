import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import Axon from "../../../../assets/companies/axon.png";
import Expedia from "../../../../assets/companies/expedia.png";
import Jetstar from "../../../../assets/companies/jetstar.png";
import Litalia from "../../../../assets/companies/litalia.png";
import Qantas from "../../../../assets/companies/qantas.png";
import {
  opacityVariants,
  scaleVariants,
} from "../../../../constants/variants.constant";
import Container from "../../../Modules/Container/Container";
const Companies = () => {
  const Images = [Axon, Jetstar, Litalia, Qantas, Expedia];
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className='my-20'>
          <Container>
            <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-x-5 max-w-6xl mx-auto items-center'>
              {Images.map((img, i) => (
                <motion.div
                  key={i}
                  variants={scaleVariants}
                  animate={visible ? "visible" : "invisible"}
                  transition={{ duration: 1 }}
                  className='h-[100px] flex items-center mx-auto'
                >
                  <img src={img} />
                </motion.div>
              ))}
            </div>
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Companies;
