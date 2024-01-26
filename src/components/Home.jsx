import React from "react";
import Lottie from "../assets/Lottie/home_page_lottie.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaFileDownload, FaBars, FaPlay, FaApple } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

const Home = () => {
  return (
    <main className='w-full'>
      <div className='flex flex-col justify-center container'>
        <nav className='w-full p-5 bg-amber-100 text-amber-300 items-center'>
          <div className='flex flex-row justify-between sm:px- px-0'>
            <div>
              <h1 className='text-5xl flex flex-row items-center gap-2 text-amber-900 font-extralight'>
                <BsCartPlus /> Cartify
              </h1>
            </div>
            <div className='sm:flex hidden flex-row justify-between items-center'>
              <a className='px-3 text-2xl text-amber-900 font-extralight'>
                Home
              </a>
              <a className='px-3 text-2xl text-amber-900 font-extralight'>
                Docs
              </a>
              <a className='px-3 text-2xl text-amber-900 font-extralight'>
                Contact
              </a>
              <button className='font-extralight text-xl text-white bg-amber-800 p-5 px-5 mx-3 font-mono rounded-full'>
                {" "}
                Get Started{" "}
              </button>
            </div>
            <button className='sm:hidden flex text-5xl text-amber-900 cursor-pointer'>
              <FaBars />
            </button>
          </div>
        </nav>
      </div>

      {/* end of nav */}

      <div className='bg-amber-100 text-black px-4 pb-5 w-full h-3/4'>
        <div className='flex-1 sm:flex flex-column sm:flex-row'>
          <div className='sm:w-1/2'>
            <h1
              style={{ lineHeight: 1 }}
              className='text-[80px] text-left sm:text-9xl sm:font-medium px-4 pt-10 break-all text-amber-800'
            >
              Future of <br></br>
              <span className='text-[60px] font-bold sm:text-9xl'>
                Shopping
              </span>
              <br></br>Lists...
            </h1>
            <div className='flex flex-col sm:flex-row justify-start gap-5 mx-3 pt-10'>
              <button className='text-center border border-black hover:bg-amber-900 hover:text-white text-amber-900 bg-clip-border p-5 flex flex-row items-center gap-2 justify-center'>
                <FaPlay size={20} />
                Google Play Store
              </button>
              <button className='text-center border border-black hover:bg-amber-900 hover:text-white text-amber-900 bg-clip-border p-5 flex flex-row items-center justify-center gap-2'>
                <FaApple size={20} />
                Apple Store
              </button>
              <button className='text-center border border-black hover:bg-amber-900 hover:text-white text-amber-900 bg-clip-border p-5 flex flex-row items-center gap-2 justify-center'>
                <FaFileDownload size={20} />
                Get APK
              </button>
            </div>
          </div>
          <div className='sm:w-1/2'>
            {/* <img src={Lottie} alt='cartify' className="w-fu"/> */}
            {/* If You Want To Use Lottie Player */}
            <Player src={Lottie} className='w-3/4 h-1/2' loop autoplay />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
