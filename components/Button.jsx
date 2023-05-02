import React from 'react';

const Button = (props) => {
  return (
    <button
      className='bg-indigo-600 text-white font-[Poppins] py-1 px-4 rounded-full md:ml-8 hover:bg-blue-400 
    duration-500'>
      {props.children}
    </button>
  );
};

export default Button;
