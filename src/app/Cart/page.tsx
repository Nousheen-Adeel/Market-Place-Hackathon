import React from 'react';
import Image from 'next/image';
import { IoIosHeartEmpty } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';

import Link from 'next/link';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';

const Page = () => {
  return (
  <div>
    <Navbar1/>
    <Navbar2/>
    <div className='md:max-w-[1440px] h-fit py-12 px-4'>
        {/* Bag Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Bag Items */}
          <div className="flex-1 space-y-6">
            {/* Free Delivery Banner */}
            <div className="bg-[#f5f5f5] p-4 rounded-lg">
              <p className="text-sm font-medium">Free Delivery</p>
              <p className="text-xs text-gray-600">
                Applies to orders of ₹ 14,000.00 or more.{' '}
                <span className="underline cursor-pointer">View Details</span>
              </p>
            </div>

            {/* Bag Heading */}
            <h2 className="text-2xl font-bold">Bag</h2>

            {/* Product List */}
            <div className="space-y-6">
              {/* Product 1 */}
              <div className="flex gap-4">
                <Image src="/Images/last1.png" alt="Product 1" width={150} height={150} className="rounded-lg" />
                <div className="flex-1 space-y-2">
                  <h2 className="text-lg font-medium">Nike Dri-FIT ADV TechKnit Ultra</h2>
                  <p className="text-sm text-gray-600">Mens Short-Sleeve Running Top - Ashen Slate/Cobalt Bliss</p>
                  <p className="text-sm text-gray-600 flex gap-4">
                    <span>Size L</span>
                    <span>Quantity 1</span>
                  </p>
                  <div className="flex gap-4">
                    <button className="text-gray-600 hover:text-black">
                      <IoIosHeartEmpty size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-black">
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex gap-4">
                <Image src="/Images/last2.png" alt="Product 2" width={150} height={150} className="rounded-lg" />
                <div className="flex-1 space-y-2">
                  <h2 className="text-lg font-medium">Nike Air Max 97 SE</h2>
                  <p className="text-sm text-gray-600">Mens Shoes</p>
                  <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                  <p className="text-sm text-gray-600 flex gap-4">
                    <span>Size L</span>
                    <span>Quantity 1</span>
                  </p>
                  <div className="flex gap-4">
                    <button className="text-gray-600 hover:text-black">
                      <IoIosHeartEmpty size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-black">
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-[351px] space-y-6">
            <h2 className="text-2xl font-bold">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">₹ 20,890.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Estimated Delivery & Handling</p>
                <p className="font-medium">Free</p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <p className="text-lg font-bold">₹ 20,890.00</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900 transition-colors"><Link href="/Checkout"> Member Checkout</Link>
     
            </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Page;