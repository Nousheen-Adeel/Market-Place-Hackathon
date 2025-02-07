'use client';
import React from 'react'

import Image from 'next/image'
import Link from 'next/link' 

const Navbar1 = () => {
  return (
    <div className='md:max-w-[1440px] w-full object-cover h-[36px] bg-[#f5f5f5] '>
      <div className='flex items-center justify-between px-16 py-2 '>
        <Image src="/Images/nav1.png" alt="img" width={24} height={24}/>
        <div className='flex gap-3 '>
          <div className='text-black text-[11px] font-[500] '><Link href='/Products'>Find a Store </Link></div>
          <div className='w-[3px] h-[14px] bg-black'></div>            
          <div className='text-black text-[11px] font-[500]'>Help </div>
          <div className='w-[3px] h-[14px] bg-black'></div>
          <div className='text-black text-[11px] font-[500] '><Link href='/Joinus'>Join Us</Link></div>
          <div className='w-[3px] h-[14px] bg-black'></div>
          <div className='text-black text-[11px] font-[500] '><Link href='/Login'>Sign In</Link></div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar1