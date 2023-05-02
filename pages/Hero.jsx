import React from 'react';
import { heroContent } from '@/components/constants';

const Hero = () => {
  return (
    <div className='relative'>
      <div
        className='relative h-screen pt-20 bg-cover bg-center bg-fixed'
        style={{ backgroundImage: "url('/sushi-hero.jpg')" }}>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50'>
          <h1 className='text-5xl md:text-9xl font-bold text-indigo-600 leading-10 tracking-widest'>
            {heroContent.title}
          </h1>
          <p className='text-[1rem] md:text-[1.5rem] font-medium text-slate-400 mt-4 mb-8'>
            {heroContent.parag1}
          </p>
          <p className='text-2xl font-medium  mt-4 mb-8 text-slate-400 tracking-widest'>
            {heroContent.parag2}
          </p>
          <address className='text-sm md:text-[1rem] font-medium text-slate-200 mt-4 mb-8 tracking-widest'>
            {heroContent.siteAddress}
          </address>

          {/* Call-to-action button goes here */}
          <button
            className='bg-indigo-600 text-white font-[Poppins] py-1 px-4 rounded-lg md:ml-8 hover:bg-blue-400 
    duration-500'>
            {heroContent.btnText}
          </button>
        </div>
        <div className='absolute inset-0 bg-black opacity-70 z-0'></div>
      </div>
    </div>
  );
};

export default Hero;
