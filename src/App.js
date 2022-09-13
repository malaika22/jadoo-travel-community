import React from "react";
import Container from "./components/Modules/Container/Container";
import HeroSection from "./components/Templates/Home/HomeHero/HeroSection";
import Services from "./components/Templates/Home/Services/Services";

function App() {
  return (
    <Container>
      <HeroSection />
      <Services />
    </Container>
  );
}

export default App;
