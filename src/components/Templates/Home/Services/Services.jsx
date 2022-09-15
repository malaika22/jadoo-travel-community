import React from "react";
import SectionHeader from "../../../Elements/Logo/SectionHeader/SectionHeader";
import Container from "../../../Modules/Container/Container";
import { motion } from "framer-motion";
import { opacityVariants } from "../../../../constants/variants.constant";
import { useState } from "react";
import CalculatedWeather from "../../../../assets/services/calculated-weather.png";
import Flights from "../../../../assets/services/flights.png";
import LocalEvents from "../../../../assets/services/local-events.png";
import Customization from "../../../../assets/services/customization.png";
import { services } from "../../../../constants/content";
import ServiceCard from "./ServiceCard";
import ReactVisibilitySensor from "react-visibility-sensor";
const Services = () => {
  const Images = [CalculatedWeather, Flights, LocalEvents, Customization];
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <div className='my-20'>
        <Container>
          <motion.div
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            initial='invisible'
            transition={{ duration: 0.5 }}
            className='text-center'
          >
            <SectionHeader title='We Offer Best Services' subtitle='Category' />
          </motion.div>
          <motion.div
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            initial='invisible'
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center '
          >
            <div className='grid grid-cols-4  pt-20 py-10 max-w-7xl mx-auto'>
              {services.map((service, i) => (
                <ServiceCard key={service.title} img={Images[i]} {...service} />
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </ReactVisibilitySensor>
  );
};

export default Services;
