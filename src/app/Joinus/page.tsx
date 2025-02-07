import React from 'react'
import Image from 'next/image'

const Join= () => {
  return (
    <div className='md:max-w-[1440px] h-fit py-6'>
      
       <div className='mt-10 mb-4 md:mx-[37%] items-center'>
                    <Image
                            className='w-[60px] h-21 pb-[-3px] ml-[30%]'
                            src={'/Images/nav2.png'}
                            alt='shoes banner'
                            width={450}
                            height={200}/>
                    
                    <h2 className='font-bold text-center w-[187px] h-fit text-[20px] ml-[15%]'>BECOME A NIKE MEMBER</h2>
                    <p className='text-gray-400 text-center w-[187px] h-fit text-[15px] ml-[15%]'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                
                        <div className='form mr-[-5%] items-center'>
                            <input className=' border-2 w-96 px-5 py-2 my-2' type="text" placeholder='Email Address' /> <br />
        
                            <input className='border-2 w-96 px-5  py-2 my-2' type="password" placeholder='Password' />
                            <input className='border-2 w-96 px-5  py-2 my-2' type="password" placeholder='First Name ' />
                            <input className='border-2 w-96 px-5  py-2 my-2' type="password" placeholder='Last Name' />
                            <input className='border-2 w-96 px-5  py-2 my-2' type="password" placeholder='Date of Birth' />
                            <p className='font-light text-gray-300 '>Get a Nike Member Reward every year on your Birthday.</p>
                            <input className='border-2 w-96 px-5  py-2 my-2' type="password" placeholder='India' />
                            <div className='flex space-x-4'>
                            <input className='border-2 w-44 px-5  py-2 my-2' type="password" placeholder='Male' />
                            <input className='border-2 w-44 px-5  py-2 my-2' type="password" placeholder='Female' />
                            </div>
                            <div className='flex gap-2'>
                            <input type='checkbox' className='text-white'/>
                            <p className='text-[15px] text-gray-400 '>save this product to my profile</p></div>
                            <br /> 
                            <input type='checkbox' className='text-white'/>
                            <p className='text-center text-gray-400 text-[15px]'>make this preferred address<span className='underline'> Privacy Policy</span> and<span className='underline'> Terms of Use.</span></p>
                        <br />
                        <button className='text-white bg-black w-[350px] h-[40px]'>Join Us</button>
                        <br />
                        <p className='text-[15px] text-gray-400 text-center py-4'>Already a member?<span className='underline'>Sign In</span></p>
                        </div>
                        </div>
                        </div>
                    
  )
}

export default Join