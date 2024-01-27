import React, { useState } from "react";
import NavBar from "./NavBar";
import { BsCartPlus, BsGithub } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

function MainNavBar() {
  const [nav, setnav] = useState(false);
  return (
    <>
      {nav ? <NavBar /> : " "}
      <div
        id='HeroPage'
        className='flex flex-col bg-amber-100 justify-center w-full'
      >
        <nav className='w-full p-5 text-amber-300 items-center'>
          <div className='flex flex-row justify-between sm:px- px-0 w-full'>
            <div>
              <h1 className='sm:text-5xl text-4xl flex flex-row items-center gap-2 text-amber-900 font-extralight'>
                <BsCartPlus /> Cartify
              </h1>
            </div>
            <div className='sm:flex hidden flex-row justify-between items-center'>
              <a
                href='#HeroPage'
                className='px-3 text-2xl text-amber-900 font-extralight'
              >
                Home
              </a>
              <a className='px-3 text-2xl text-amber-900 font-extralight'>
                Docs
              </a>
              <a
                href='#faq'
                className='px-3 text-2xl text-amber-900 font-extralight'
              >
                FAQs
              </a>
              <button className='font-extralight text-6xl text-amber-800 rounded-full mx-3'>
                {" "}
                <BsGithub />{" "}
              </button>
            </div>
            <button
              onClick={() => setnav(!nav)}
              className='sm:hidden flex text-4xl text-amber-900 cursor-pointer'
            >
              {nav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MainNavBar;
