
import React from 'react'
import Image from 'next/image'
import { BsBagCheck } from "react-icons/bs";
import { TbMessage } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";

import { IoIosHeartEmpty } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Footer2 from '../components/Footer2';


const page = () => {
  return (
    <div>
        <div className='md:max-w-[880px] h-[2376px] pl-[289px] jusitfy-center'>
        <nav className='flex w-[1411px] h-fit justify-between'>
            <Image src="/images/nav2.png" alt="nike logo" height={21} width={63} className=''/>
            
            <span className='flex justify-between gap-6'>
            <p>0800 228288</p>
            <TbMessage  className='text-black'size={24} />
            <BsBagCheck className='text-black'size={24} />
            </span>
            </nav>
            <div className="flex flex-col md:flex-row gap-14 h-fit justify-center ">
                <div className='w-[440px]'>
                    <p className='font-bold text-[21px] '>How would you like to get your order?</p><br />
                    <p className='text-gray-400'>Customs regulation for India require a copy of the recipients KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
                    <div className="border w-[px] h-[82px] border-black rounded-lg border-solid pt-4 boder-[2px] mt-4">
                        <span className=' px-6 flex gap-6 items-center'>
                        <IoBagCheckOutline />
                            <p>Deliver It</p>
                        </span><br />
                        <div className='form mr-[-5%] items-center py-10'>
                            <p className='text-[21px]'>Enter your name and address:</p>
                            <input className=' border-2 w-96 px-5 py-2 my-2  text-black' type="text" placeholder='First Name' /> <br />
        
                            <input className='border-2 w-96 px-5  py-2 my-2  text-black' type="password" placeholder='Last Name' />
                            <input className='border-2 w-96 px-5  py-2 my-2  text-black' type="password" placeholder='Address Line 1 ' />
                            <p className='text-gray-300 text-[11px]'>we do not ship to P.O Boxes</p>
                            <input className='border-2 w-96 px-5  py-2 my-2  text-black' type="password" placeholder='Address Line 2' />
                            <input className='border-2 w-96 px-5  py-2 my-2  text-black' type="password" placeholder='Address Line 3' />
                            <div className='flex space-x-4'>
                            <input className='border-2 w-44 px-5  py-2 my-2  text-black' type="password" placeholder='Postal Code' />
                            <input className='border-2 w-44 px-5  py-2 my-2  text-black' type="password" placeholder='Locality' />
                            </div>
                            <div className='flex space-x-4'>
                            <input className='border-2 w-44 px-5 text-gray-300 py-2 my-2' type="password" placeholder='State/Territory' />
                            <input className='border-2 w-44 px-5  py-2 my-2  text-black' type="password" placeholder='India ' />
                            </div>
                            <div className='flex gap-2'>
                            <input type='checkbox' className='text-gray-400'/>
                            <p className='text-[15px] text-gray-400 '>Save this address to my profile</p>
                            </div>
                            <br />
                            <div className='flex gap-2'>
                            <input type='checkbox' className='text-black bg-gray-400'/>
                            <p className='text-[15px] text-gray-400 '>Make this my preferred address</p>
                            </div> 
                            <h2 className='text-black font-bold'>What is your contact information?</h2>
                            <input className=' border-2 w-96 px-5 py-2 my-2  text-black' type="text" placeholder='Email' />
                            <p className='text-gray-300 text-[11px]'>A confirmation email will be sent after checkout.</p>
                            <input className=' border-2 w-96 px-5 py-2 my-2  text-black' type="text" placeholder='Phone Number' />
                            <p className='text-gray-300 text-[11px]'>A carrier might contact you to confirm delivery.</p>
                            <h2 className='text-black font-bold'>What is your PAN?</h2>
                            <input className=' border-2 w-96 px-5 py-2 my-2  text-black' type="text" placeholder='PAN' /> 
                            <p>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                            <div className='flex gap-2'>
                            <input type='checkbox' className=''/>
                            <p className='text-[15px] text-gray-400 '>Save PAN details to Nike Profile</p>
                            </div>  
                            <br />
                            <div className='flex gap-2'>
                            <input type='checkbox' className=''/>
                            <p className='text-[15px] text-gray-400 '>I have read and consent to eShopWorld processing my information in accordance with the <span className='underline'>Privacy Statement</span> and <span className='underline'>Cookie Policy</span>. ShopWorld is a trusted Nike partner.</p>
                            </div> 
                            <br />
            <button className="w-full bg-gray-200 text-gray-400 py-3 rounded-full">Continue</button> 
                        </div>
                        <div className="border-t border-gray-300 pt-4"></div>
                        <p className=' text-[20px]'>Delivery</p>
                        <div className="border-t border-gray-300 pt-4"></div>
                        <p className='text-[20px] text-gray-400'>Shipping</p>
                        <div className="border-t border-gray-300 pt-4"></div>
                        <p className='text-[20px] text-gray-400'>Billing </p>
                        <div className="border-t border-gray-300 pt-4"></div>
                        <p className='text-[20px] text-gray-400'>Payment</p>
                    </div>
                </div>
                <div className='w-[420px] h-fit px-550]'>
            <h2 className="text-2xl font-bold">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-400">
                <p className="">Subtotal</p>
                <p className="font-medium">₹ 20,890.00</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p className="">Estimated Delivery & Handling</p>
                <p className="font-medium">Free</p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between text-black">
                  <p className="text-lg font-bold">Total</p>
                  <p className="text-lg font-bold">₹ 20,890.00</p>
                </div>
                <p className='text-[9px] text-gray-400'>(The total reflects the price of your order, including all duties and taxes)</p>
                <p className='text-[15px] text-black'>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            </div>
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
        </div>
        </div>

      </div>
     < div className='flex gap-3 text-[14px] px-8  bg-black text-white'>
        <p>India</p>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default page