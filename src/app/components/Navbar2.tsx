import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar2 = () => {
  return (
    <div className='md:max-w-[1440px] h-[60px] bg-white'>
        <div className='flex px-12 py-3 justify-around'>
            <div>
              <Image src="/Images/nav2.png" alt="img" width={59} height={21} className='w-[60px] h-21 pb-[-3px] mr-12'/>  
            </div>
            <ul className='flex gap-6 p-2 w-[600px] ml-16' >
                <li className='text-black text-[11px] font-[500] '>News & Featured</li>
                <li className='text-black text-[11px] font-[500] '><Link href="/Cart">Men</Link></li>
                <li className='text-black text-[11px] font-[500] '>Women</li>
                <li className='text-black text-[11px] font-[500] '>Kids</li>
                <li className='text-black text-[11px] font-[500] '>Sale</li>
                <li className='text-black text-[11px] font-[500] '>SNKRS</li>
            </ul>
            <div>
              <div className='flex space-x-2'>
                <span className='bg-[#f5f5f5] flex gap-2 p-3 rounded-[20px] w-[180px]'>
                <IoSearchOutline className='text-black'size={24} />
                <input type="text" placeholder='Search'className='bg-[#f5f5f5] w-[120px]'/>
                </span>
                <span className='space-x- py-2 flex'>
                 <IoIosHeartEmpty className='text-black'size={26}/>
                 <Link href='/Cart'><BsBagCheck className='text-black'size={24} /></Link>
                 </span>
                 </div>
                {/* two icons */}
            </div>
        </div>
      
    </div>
  )
}

export default Navbar2
