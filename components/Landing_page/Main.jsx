import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Review from "./Review";
import WhyUs from "./WhyUs";
import Works from "./Works";
import Brands from "./Brands";
import Pricing from "./Pricing";
import StartGrowing from "./StartGrowing";
import Footer from "./Footer";
import FAQ from "./FAQ";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Review />
      <WhyUs />
      <Works />
      <Brands />
      <Pricing />
      <FAQ />
      <StartGrowing />
      <Footer />
    </div>
  );
};

export default Main;
