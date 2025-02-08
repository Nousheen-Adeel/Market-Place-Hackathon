import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";
import Link from 'next/link';

const Footer2 = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-black text-white py-6 px-6 md:px-12">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm md:text-base">
          <ul className="space-y-2">
            <li className="font-semibold">FIND A STORE</li>
            <li><Link href='/Member'>BECOME A MEMBER</Link></li>
            <li>SIGN UP FOR EMAIL</li>
            <li>Send Us Feedback</li>
            <li>STUDENT DISCOUNTS</li>
          </ul>
          <ul className="space-y-2">
            <li className="font-semibold"><Link href='/Gethelp'>GET HELP</Link></li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
          <ul className="space-y-2">
            <li className="font-semibold">ABOUT NIKE</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <AiFillTwitterCircle size={28} />
          <FaFacebook size={28} />
          <TiSocialYoutubeCircular size={30} />
          <ImInstagram size={26} />
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 text-xs text-gray-400">
        <p>India © 2023 Nike, Inc. All Rights Reserved</p>
        <div className="flex flex-wrap gap-4">
          <span>Guides</span>
          <span>Terms of Sales</span>
          <span>Terms of Use</span>
          <span>Nike Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
