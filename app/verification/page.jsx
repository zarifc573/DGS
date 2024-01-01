'use client'
import logo from '@/public/assets/navLogo.png'
import verificationimg1 from '@/public/assets/verificationimg1.png'
import verificationimg2 from '@/public/assets/verificationimg2.png'
import Image from 'next/image'
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const page = () => {
    const [otp, setOtp] = useState('');
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <div>
            <div className='flex justify-center mb-[90px]'>
            <Image src={logo} alt="logo"/>
            </div>
            <div className='text-center'>
            <h2 className='font-darker lg:text-[52px] font-bold text-[#FFF] leading-[75px] sm:text-[35px] md:text-[45px]'>Check your email for a code</h2>
            <p className='font-work text-xl font-normal text-[#FFF] w-[646px] mt-[20px] mx-auto'>We’ve sent a 6-character code to info@gmail.com The code expires shortly, so please enter it soon.</p>
            <div className='flex items-center mt-[40px]'>
                <div>
                <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                // renderSeparator={<span>-</span>}
                renderInput={(props) =><input {...props} style={{width:'99px',marginLeft:'20px',height:'99px'}} className='bg-transparent  border boeder-1 border-white-rgba text-center text-3xl rounded-md' type="text" id="First" maxlength="1"/>} 
                />
                </div>
            </div>
            <div className='flex justify-center items-center mt-[62px]'>
                <div className='flex'>
                    <span><Image src={verificationimg1} alt="verificationimg1"/></span>
                    <p className='font-work text-base font-medium text-white-rgba ml-[9px]'>Open Gmail</p>
                </div>
                <div className='flex items-center ml-[121px]'>
                    <span><span><Image src={verificationimg2} alt="verificationimg2"/></span></span>
                    <p className='font-work text-base font-medium text-white-rgba ml-[9px]'>Open Outlook</p>
                </div>
            </div>
        </div>
        <p className='font-work text-base font-medium text-[#FFF] text-center mt-6'>Can’t find your code? Check your spam folder!</p>
      </div>
    </div>
  )
}

export default page
