import React from "react";
import SectionHeader from "../../../Elements/Logo/SectionHeader/SectionHeader";
import Container from "../../../Modules/Container/Container";
import { motion } from "framer-motion";
import { opacityVariants } from "../../../../constants/variants.constant";
import { useState } from "react";
import Italy from "../../../../assets/destinations/italy.png";
import Europe from "../../../../assets/destinations/europe.jpg";
import UK from "../../../../assets/destinations/uk.png";
import { destinations } from "../../../../constants/content";
import DestinationCard from "./DestinationCard";
import ReactVisibilitySensor from "react-visibility-sensor";

const Destinations = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className='py-20'>
          <Container>
            <motion.div
              animate={visible ? "visible" : "invisible"}
              variants={opacityVariants}
              initial='invisible'
              whileInView={() => setVisible(true)}
              transition={{ duration: 0.5 }}
              className='text-center'
            >
              <SectionHeader title='Top Destinations' subtitle='Top Selling ' />
            </motion.div>
            <DestinationCardSection />
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Destinations;

const DestinationCardSection = () => {
  const Images = [Italy, UK, Europe];
  const [visible, setVisible] = useState(false);
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 },
    },
  };
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <motion.div
        variants={container}
        animate={visible ? "show" : "hidden"}
        className='grid grid-cols-3 gap-x-5 pt-20 py-10 max-w-6xl mx-auto'
      >
        {destinations.map((destination, i) => (
          <DestinationCard
            key={destination.title}
            img={Images[i]}
            {...destination}
          />
        ))}
      </motion.div>
    </ReactVisibilitySensor>
  );
};
