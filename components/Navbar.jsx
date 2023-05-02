import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { AiOutlineMenuUnfold, AiOutlineCloseSquare } from 'react-icons/ai';
import Link from 'next/link';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };
  const navItems = [
    { text: 'HOME', path: '/' },
    { text: 'ABOUT', path: '/About' },
    { text: 'MENU', path: '/Menu' },

    { text: 'CONTACT', path: '/Contact' },
  ];

  return (
    <div className='shadow-md w-full mx-auto fixed top-0 left-0  bg-blue-300 h-20 z-[99]'>
      <nav className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        {/* logo and img*/}
        <div
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 shrink-0'>
          <Image
            src='/smiley.png'
            alt='LOGO'
            width={25}
            height={25}
            className='object-cover mr-1 transition-all duration-500 ease-in'
          />
          <span className='text-3xl text-indigo-600 font-bold pt-2'>
            Sushi Vibzz
          </span>
        </div>
        {/* menu button*/}
        <div
          onClick={handleClick}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-slate-500'>
          {open ? <AiOutlineCloseSquare /> : <AiOutlineMenuUnfold />}
        </div>
        {/* 640px and above screens nav items*/}
        <ul className='hidden sm:flex sm:flex:wrap gap-2 items-center'>
          {navItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <li className='text-white  ml-8'>{item.text}</li>
            </Link>
          ))}

          <div className='flex gap-4 shrink-0 hover:text-blue-500'>
            <Button>Signup</Button>

            <Button>Login</Button>
          </div>
        </ul>
        {/* mobile screens nav items*/}
        <ul
          className={
            !open
              ? 'hidden'
              : 'absolute bg-blue-900  w-full py-20  h-screen left-0 text-gray-100 flex-col justify-center items-center md:hidden'
          }>
          {navItems.map((item, index) => (
            <Link href={item.path} key={index} onClick={handleClose}>
              <li className='flex flex-col p-10 text-3xl text-grey-100 px-4 py-10 border-none rounded-md ml-8 shadow-md  hover:font-bold hover:text-blue-700   cursor-pointer'>
                {item.text}
              </li>
            </Link>
          ))}
          <div className='flex gap-4 shrink-0 hover:text-blue-500 ml-8'>
            <Button>Signup</Button>

            <Button>Login</Button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
