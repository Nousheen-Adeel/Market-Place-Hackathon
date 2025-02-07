import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
    return (
        <div className="md:max-w-[1440px] items-center justify-center pb-16">


            <div className='mt-10 mb-4 md:mx-[37%] items-center'>
                <Image
                    className='w-[60px] h-21 pb-[-3px] ml-[30%]'
                    src={'/Images/nav2.png'}
                    alt='shoes banner'
                    width={450}
                    height={200}/>
            
            <h2 className='font-bold text-center w-[187px] h-fit text-[20px] ml-[15%]'>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
        
                <div className='form mr-[-5%] items-center'>
                    <input className=' border-2 w-96 px-5 py-2 my-2' type="text" placeholder='Email Address' /> <br />

                    <input className='border-2 w-96 px-5  py-2 my-2' type="password" placeholder='Password' />
                </div>
    
                </div>
            <div className='flex justify-center items-center '>
                <div className='flex justify-between items-center text-sm w-[324px]'>
                    <div className='items-center flex py-4'>
                        <input type="checkbox" />
                        <span className='text-gray-500 px-2'>Keep me signed in</span>
                    </div>
                    <div>
                        <span className='text-gray-400'>Forgetton password?</span>
                    </div>
                </div>

            </div>
\
            <div className='flex justify-center'>
                <p className='text-gray-600 text-center text-[15px]' >By logging in, you agree to {`Nike's`} <span className='text-gray-500 underline'>Privacy Policy <br /> and Terms of Use.</span> </p>

            </div>


            <div className='flex justify-center'>
                <button className='w-96 bg-black text-white py-3 rounded-lg mt-6 mb-3'>Sign In</button><br /><br />

            </div>
            <div className='flex justify-center items-center mb-16'>
                <span className='text-gray-500' >Not a member?<Link href={'/join'}><span className='text-black underline pl-1'> Join Us.</span></Link></span>
            </div>




        </div> 
    )
}

export default SignIn