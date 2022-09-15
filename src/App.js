import React from "react";
import Container from "./components/Modules/Container/Container";
import Companies from "./components/Templates/Home/Companies/Companies";
import Contact from "./components/Templates/Home/Contact/Contact";
import Destinations from "./components/Templates/Home/Destinations/Destinations";
import HeroSection from "./components/Templates/Home/HomeHero/HeroSection";
import Services from "./components/Templates/Home/Services/Services";
import Steps from "./components/Templates/Home/Steps/Steps";

function App() {
  return (
    <Container>
      <HeroSection />
      <Services />
      <Destinations />
      <Steps />
      <Companies />
      <Contact />
    </Container>
  );
}

export default App;
