import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[260px] h-[849px] bg-white text-black space-y-6'>
    <ul className='mx-12 space-y-1 w-[192px] h-fit'>
        <li>Shoes</li>
        <li>Sports Bras</li>
        <li>Tops & T-Shirts</li>
        <li>Hoodies & Sweatshirts</li>
        <li>Jackets</li>
        <li>Trousers & Tights</li>
        <li>Shorts</li>
        <li>Tracksuits</li>
        <li>Jumpsuits & Rompers</li>
        <li>Skirts & Dresses</li>
        <li>Socks</li>
        <li>Accessories & Equipment</li> 
    </ul>
    <div className='bg-gray-100 px-12 w-[192px] h-[2px]'></div>
    <div className='px-12 space-y-1 h-fit border-b-2 '>
        <span className='flex gap-2'>
            <p>Gender</p>
            i
             </span>
        <span className='flex gap-2'>
            <input type="checkbox" />
            <p>Men</p>
            
        </span>
        <span className='flex gap-2'>
        <input type="checkbox" />
            <p>Woman</p>
            
        </span>
        <span className='flex gap-2'>
        <input type="checkbox" />
            <p>Unisex</p>
            
        </span>
    </div>
    <div className='px-12 space-y-1 h-fit border-b-2'>
    <span className='flex gap-2'>
            <p>Kids</p>
            i           
              </span>
        <span className='flex gap-2'>
            <input type="checkbox" />
            <p>Girls</p>
            
        </span>
        <span className='flex gap-2'>
        <input type="checkbox" />
            <p>Boys</p>
            </span>
    </div>
    <div className='px-12 space-y-1 h-fit border-b-2'>
    <span className='flex gap-2'>
            <p>Shop By Price</p>
            i
             </span>
        <span className='flex gap-2'>
            <input type="checkbox" />
            <p>Girls</p>
            
        </span>
        <span className='flex gap-2'>
        <input type="checkbox" />
            <p>Boys</p>
            </span>
        

    </div>

      
    </div>
  )
}

export default Sidebar
