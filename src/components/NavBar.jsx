import React from "react";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='bg-amber-800 sm:hidden block p-4 w-full pb-5'>
      <div className='flex flex-col justify-start px-3'>
        <a
          href='#'
          className='text-xl font-bold bg-white text-amber-700  border border-white text-center p-2 mb-2'
        >
          <a
            href='https://github.com/thejohncaleb'
            className='flex flex-row items-center justify-center'
          >
            <FaGithub size={35} /> <span>&nbsp; Star on GitHub</span>
          </a>
        </a>
        <a
          href='#'
          className='text-xl font-medium text-white border border-white text-center p-2 hover:bg-white hover:text-amber-700 hover:font-bold mb-2'
        >
          Docs
        </a>
        <a
          href='#faq'
          className='text-xl font-medium text-white border border-white text-center p-2 hover:bg-white hover:text-amber-700 hover:font-bold'
        >
          Support & FAQs
        </a>
      </div>
    </div>
  );
};

export default NavBar;
