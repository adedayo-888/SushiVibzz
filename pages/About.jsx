import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const About = () => {
  return (
    <div
      className='h-screen max-w-[1640px] text-gray-300 bg-indigo-950
    '>
      <div className='py-20 px-4 w-full min-h-screen'>
        <span className='flex  justify-center items-center text-center text-4xl'>
          About Page
        </span>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='max-w-[500px] mt-8 bg-gray-400 max-h-[500px] rounded shadow px-8 py-8'>
            <p className='text-gray-700 text-[1.2rem] mb-4'>
              We are a family owned sushi restaurant located in the heart of
              N.WLONDON.
              <br /> We specialize in traditional Japanese sushi and have been
              serving our customers for over 20 years.
              <br /> Our chefs are highly trained and experienced in creating
              delicious sushi dishes that will tantalize your taste buds.
              <br /> We strive to provide the best quality ingredients and
              service to our customers.
            </p>
            <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-4 px-6 mb-8 rounded focus:outline focus:shadow mr-2'>
              View Menu
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
