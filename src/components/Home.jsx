import React, { useState } from "react";
import Footer from "./Footer";
import MainNavBar from "./MainNavBar";
import Hero from "./Hero";
import About from "./About";
import Faq from "./Faq";

const Home = () => {
  return (
    <main className='w-full scroll-smooth'>
      <MainNavBar />
      <Hero />
      <About />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
