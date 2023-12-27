import React from "react";

import Nav from "../../components/Navbar";
import Hero from "./Hero/HeroSection";
import Feat from "./Feat/FeatureSection";
import Testi from "./Testi/testi";

const Landing = () => {
  return (
    <>
      <Nav isAuthenticated={false} />
      <Hero />
      <Feat />
      <Testi />
    </>
  );
};

export default Landing;
