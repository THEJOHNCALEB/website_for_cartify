import React, { useState } from "react";
import Footer from "./Footer";
import MainNavBar from "./MainNavBar";
import Hero from "./Hero";
import About from "./About";

const Home = () => {
  return (
    <main className='w-full'>
      <MainNavBar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
