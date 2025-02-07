import React from 'react'
import { AiFillTwitterCircle} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";
import Link from 'next/link';

const Footer2 = () => {
  return (
    <div className='md:max-w-[1440px] h-fit'>
      <div className='flex justify-between px-6 my-8 bg-black text-white py-5 space-x-3'>
      <div className='flex justify-evenly gap-8'>
        <ul className='px-3 text-[14px] space-y-2'>
            <li>FIND A STORE</li>
            <li><Link href='/Member'>BECOME A MEMBER</Link></li>
            <li>SIGN UP FOR EMAIL</li>
            <li>Send Us Feedback</li>
            <li>STUDENTS DISCOUNTS</li>
            </ul>
        <ul className='px-3 text-[14px] space-y-2'>
          <li><Link href='/Gethelp'>GET HELP</Link></li>
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Payment Options</li>
          <li>Contact Us On Nike.com Inquiries</li>
          <li>Contact Us On All Other Inquiries</li>
        </ul>
        <ul className='px-3 text-[14px] space-y-2'>
          <li>ABOUT NIKE</li>
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Sustainability</li>
        </ul>
        </div>
        <div className='flex justify=between gap-3'>
        <AiFillTwitterCircle size={24}/>
        <FaFacebook size={24} />
        <TiSocialYoutubeCircular size={26} />
        <ImInstagram size={22} />
      </div>
      </div>
      <div className='flex px-6 justify-between '>
        <div className='flex gap-3 text-[12px]'>
        <p>India</p>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className='flex gap-8 text-[12px]'>
          
        <h1>Guides</h1> 
        <h1>Terms of Sales</h1>
        <h1>Terms of Use</h1>
        <h1>Nike Privacy Policy</h1>
        </div>
    
      </div>
      </div>
    
  )
}

export default Footer2
