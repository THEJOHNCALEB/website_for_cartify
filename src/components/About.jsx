import React from "react";
import cartifyImg from "../assets/img/cartify-hero.png";

function About() {
  return (
    <div className='bg-amber-100'>
      <div className='flex justify-center items-center'>
        <div className='p-10 border border-amber-700 rounded-3xl max-w-5xl flex items-center self-center'>
          <div className='flex sm:flex-row-reverse flex-col justify-around w-full'>
            <div className='sm:w-1/2 w-full'>
              <img
                src={cartifyImg}
                className='w-full h-full '
                alt='Cartify Mobile App'
              />
            </div>
            <div className='sm:w-1/2 w-full'>
              <h2 className='sm:text-6xl text-3xl font-light text-amber-800'>
                Effortlessly manage your shopping lists, stay organized, and
                save time with <span className='font-bold'> Cartify.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
