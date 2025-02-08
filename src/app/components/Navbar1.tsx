'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar1 = () => {
  return (
    <div className='w-full bg-[#f5f5f5] py-2 border-b border-gray-300'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-16'>
        {/* Logo */}
        <Image src='/Images/nav1.png' alt='logo' width={24} height={24} />
        
        {/* Navigation Links */}
        <div className='hidden md:flex items-center gap-4 text-[12px] font-medium text-black'>
          <Link href='/Products' className='hover:underline'>Find a Store</Link>
          <div className='w-[2px] h-4 bg-black'></div>
          <span className='hover:underline cursor-pointer'>Help</span>
          <div className='w-[2px] h-4 bg-black'></div>
          <Link href='/Joinus' className='hover:underline'>Join Us</Link>
          <div className='w-[2px] h-4 bg-black'></div>
          <Link href='/Login' className='hover:underline'>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
