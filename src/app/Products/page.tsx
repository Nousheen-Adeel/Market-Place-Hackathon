import React from 'react'
import Sidebar from '../components/Sidebar'
import Product1 from '../components/Product1';
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const page = () => {
  return (
    <div className='md:max-w-[1440px] h-fit'>
        <div className= 'md:max-w-[1440px] px-12 py-6 bg-white text-black flex justify-between '>
            <div>
                <h2>New (500)</h2>
            </div>
            <div className='flex gap-4'>
            <span className='flex gap-1'>
                <p>Hide Filters</p>
                <TbAdjustmentsHorizontal />
                </span>
            <span className='flex gap-2'>
                <p>Sort By</p>
                <MdKeyboardArrowDown />
            </span>
            </div>

        </div>
        <div  className='flex md:max-w-[1440px] h-fit bg-white'>
        <Sidebar/>
        <div className='border-r-[7px] h-[329px] rounded-md border-gray-400'></div>
        <Product1/>
        </div>
        <div>
        <h2 className='font-semibold text-[25px]'>Related Categories</h2>
        
        <div className='flex gap-3 '>
        <button className='rounded-[30px] text-black text-[15px] w-[250px] border-gray-400 border-[1px]'>Best Selling Products</button>
        <button className='rounded-[50px] text-black text-[15px] w-[250px] border-gray-400 border-[1px]'>Basketball Shoes</button>
        <button className='rounded-[50px] text-black text-[15px] w-[200px] border-gray-400 border-[1px]'>Best Shoes</button>
        <button className='rounded-[50px] text-black text-[15px] w-[300px] border-gray-400 border-[1px]'>New Football Shoes</button>
        <button className='rounded-[50px] text-black text-[15px] w-[300px] border-gray-400 border-[1px]'>New Mens Shoes</button>
        <button className='rounded-[50px] text-black text-[15px] w-[300px] border-gray-400 border-[1px]'>New Running Shoes</button>
        <button className='rounded-[50px] text-black text-[15px] w-[300px] border-gray-400 border-[1px]'>Best Mens Shoes</button>
        <br />
        
        <button className='rounded-[50px] text-black text-[15px] w-[300px] border-gray-400 border-[1px]'>New Jordan Shoes</button>
        <button className='rounded-[50px] text-black text-[15px] w-[300px] border-gray-400 border-[1px]'>Best Women Shoes</button>
        <button className='rounded-[50px] text-black text-[15px] w-[300px] border-gray-400 border-[1px]'>Best Trainning & Gym</button>
    
        </div>


        </div>
    </div>
  )
}

export default page
