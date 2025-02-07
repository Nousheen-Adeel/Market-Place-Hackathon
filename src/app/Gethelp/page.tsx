import React from 'react'
import Image from 'next/image'
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Gethelp = () => {
  return (
    <div className='md:max-w-[1440px] h-fit py-12'>
        <div className='px-20'>
        <h2 className='text-[32px] font-bold text-center'>GET HELP</h2>
        <div className='flex justify-between p-4 w-[458px] border-[2px] mx-[35%] my-4 rounded-lg'>
          <input type="text" placeholder='What can we help you with?' />
          <div className='items-center  text-gray-400'>
          <CiSearch className='size-5'/>
          </div>
        </div>
        <div className='flex px-8'>
          <div className='px-6 space-y-4 w-[940px]'>
            <h2 className='font-bold'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
            <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            <ul className='pl-20px'>
              <li className='px-4'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li><br />
              <li className='px-4'>If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card. <br /></li>
              <li className='px-4'>Apple Pay</li>
            </ul>
            <p>
              <b className='underline'>Nike Members</b> Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you are not already a Member, join us today.
            </p>
          <p className='flex gap-5'>
        <button className='bg-black rounded-[30px] py-2 px-4 text-white'>JOIN US</button>
        <button className='bg-black rounded-[30px] py-2 px-4 text-white'>SHOP NIKE</button>
        </p>
        <h2 className='font-bold'>FAQs</h2>
        <p className='font-bold'>Does my card need international purchases enabled?</p>
        <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled. <br /><br />Please note, some banks may charge a small transaction fee for international orders. <br /><br /></p>
        <h4 className='font-bold'>Can I pay for my order with multiple methods?</h4>
        <p>No, payment for Nike orders cant be split between multiple payment methods.</p><br />
        <h4 className='font-bold'>What payment method is accepted for SNKRS orders?</h4>
        <p>You can use any accepted credit card to pay for your SNKRS order.</p><br />
        <h4 className='font-bold'>Why dont I see Apple Pay as an option?</h4>
        <p>To see Apple Pay as an option in the Nike App or on Nike.com, you will need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you will need to use Safari to use Apple Pay on Nike.com.</p>
        <p>Was this answer helpful?</p>
        <div className='flex size-[50px]'>
        <BsFillHandThumbsUpFill />
        <BsFillHandThumbsDownFill />
        </div>
        <h2 className='text-gray-300 font-bold'>RELATED</h2>
        <ul className='pl-20px'>
          <li className='underline px-4 font-bold'>WHAT ARE NIKES DELIVERY OPTIONS?</li>
          <li className='underline px-4 font-bold'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</li>
        </ul>



          </div>
  
          <div className='border-l-[7px] border-gray-300 h-fit w-[314px] rounded-md px-12 space-y-4'>
            <h2 className='font-bold text-center '>CONTACT US</h2>
            <Image src='/Images/mob.png' alt='img' width={64} height={64} className='mx-16 py-6'/>
            <p className='text-center w-[266px]'>000 800 919 0566 <br />Products & Orders: 24 hours a day, 7 days a week
            Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
          <br />
          <Image src='/Images/msg.png' alt='img' width={64} height={64} className='mx-16 py-6'/>
          <p className='font-bold text-center'>24 hours day</p>
          <p className='text-center'>7 days a week</p>
          <Image src='/Images/env.png' alt='img' width={64} height={64} className='mx-16 py-6'/>
          <p className='font-bold text-center'>We will reply within</p>
          <p className='text-center'>five business days</p>
          <Image src='/Images/locator.png' alt='img' width={64} height={64} className='mx-16 py-6'/>
          <p className='font-bold text-center'>STORE LOCATOR</p>
          <p>Find Nike retail stores near you</p>

          </div>
        </div>
        </div>
 
    </div>
  )
}

export default Gethelp
