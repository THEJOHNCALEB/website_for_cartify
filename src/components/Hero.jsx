import React, { useState } from "react";
import Lottie from "../assets/Lottie/home_page_lottie.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaFileDownload, FaPlay, FaApple } from "react-icons/fa";

function Hero() {
  return (
    <>
      <div className='bg-amber-100 text-black px-4 pb-5 w-full h-3/4'>
        <div className='flex-1 sm:flex flex-column items-center sm:flex-row'>
          <div className='sm:w-1/2'>
            <h1
              style={{ lineHeight: 1.1, fontFamily: "Poppins" }}
              className='cool-animation text-6xl sm:text-center text-center sm:text-[100px] sm:font-light font-light px-4 pt-10 break-all text-amber-800 mb-5'
            >
              AI<br></br> Powered
              <br></br>
              <span>Shopping</span>
              <br></br>Lists...
            </h1>
            <div className='flex flex-col sm:flex-row justify-center gap-5 mx-3 pt-10'>
              <button className='text-center border border-amber-800 hover:bg-amber-900 hover:text-white text-amber-900 bg-clip-border p-5 flex flex-row items-center gap-2 justify-center'>
                <FaPlay size={20} />
                Get it on Google Play
              </button>
              <button className='text-center border border-amber-800 hover:bg-amber-900 hover:text-white text-amber-900 bg-clip-border p-5 flex flex-row items-center justify-center gap-2'>
                <FaApple size={20} />
                Download on the App Store
              </button>
              <button className='text-center border border-amber-800 hover:bg-amber-900 hover:text-white text-amber-900 bg-clip-border p-5 flex flex-row items-center gap-2 justify-center'>
                <FaFileDownload size={20} />
                Get APK
              </button>
            </div>
          </div>
          <div className='sm:w-1/2'>
            {/* <img src={Lottie} alt='cartify' className="w-fu"/> */}
            {/* If You Want To Use Lottie Player */}
            <Player src={Lottie} className='w-3/4 h-1/2 ' loop autoplay />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
