import React from "react";
import cartifyImg from "../assets/img/cartify-hero.png";

function About() {
  return (
    <div className='bg-amber-100'>
      <div className=' max-w-3xl rounded-2xl flex justify-center items-center'>
        <div className='p-10 bg-amber-800 max-w-5xl flex items-center self-center'>
          <div className='flex sm:flex-row-reverse flex-col justify-around w-full'>
            <div className='w-full'>
              <img
                src={cartifyImg}
                className='w-full h-full'
                alt='Cartify Mobile App'
              />
            </div>
            <div className='text-8xl w-1/2 text-amber-70'>Cartify</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
