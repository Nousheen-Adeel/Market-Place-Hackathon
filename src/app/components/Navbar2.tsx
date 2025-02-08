import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar2 = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-3 max-w-[1440px] mx-auto">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/Images/nav2.png" alt="Nike Logo" width={60} height={24} className="w-[60px] h-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-[12px] font-medium">
          <li className="text-black">News & Featured</li>
          <li className="text-black"><Link href="/Cart">Men</Link></li>
          <li className="text-black">Women</li>
          <li className="text-black">Kids</li>
          <li className="text-black">Sale</li>
          <li className="text-black">SNKRS</li>
        </ul>

        {/* Search & Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-gray-200 px-3 py-2 rounded-full w-[200px]">
            <IoSearchOutline className="text-gray-700" size={20} />
            <input type="text" placeholder="Search" className="bg-gray-200 w-full outline-none text-sm pl-2" />
          </div>
          <div className="flex space-x-4">
            <IoIosHeartEmpty className="text-black" size={26} />
            <Link href="/Cart">
              <BsBagCheck className="text-black" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
