import React from "react";
import { BsCartPlus, BsGithub, BsSend, BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className='bg-amber-100 w-full p-4 px-3 text-amber-900 '>
        <div className='flex sm:flex-row flex-col justify-between p-3 gap-4 '>
          <div>
            <div className='sm:text-5xl text-4xl flex flex-col items-start gap-2 font-extralight'>
              <h1 className='flex flex-row '>
                <BsCartPlus /> Cartify
              </h1>
              <span className='text-xl font-thin'>
                Future of Shopping Lists...
              </span>
            </div>
          </div>
          <div className='flex flex-col text-xl gap-3 mb-2'>
            <h2 className='font-bold text-2xl'>Suggested Links:</h2>
            <a className='font-light underline' href='#HeroPage'>
              Home
            </a>
            <a className='font-light underline'>Docs</a>
            <a href='#faq' className='font-light underline'>
              Support & FAQs
            </a>
          </div>
          <div className='text-6xl flex flex-row justify-between'>
            <a href='http://'>
              <BsTwitterX className='px-2' />
            </a>
            <a href='mailto:'>
              <BsSend className='px-2' />
            </a>
            <a href='https://github.com/THEJOHNCALEB/cartify_app'>
              <BsGithub className='px-2' />
            </a>
          </div>
        </div>
        <div className='text-center border-t border-amber-950'>
          <div className='flex sm:flex-row flex-col justify-between m-2 gap-2 items-center'>
            <h2 className='font-light text-2xl mt-2'>
              With ❤ From{" "}
              <a
                target='_blank'
                href='https://thejohncaleb.netlify.app'
                className='underline'
              >
                John
              </a>
            </h2>
            <span className='font-light text-2xl'>
              &copy;Cartify - {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
