import React from 'react';
import Navbar from '@/components/Navbar';

import About from './About';
import Contact from './Contact';
import Menu from './Menu';

import Login from './Login';
import Signup from './Signup';
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={` text-gray-800 flex min-h-screen flex-col  max-w-[1640px]  font-[Poppins]}`}>
        <Hero />
        <About />
        <Menu />
        <Contact />
        <Login />
        <Signup />
      </main>
    </>
  );
}
