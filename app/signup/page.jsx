import React from 'react'
import signupimage1 from '@/public/assets/signupimage1.png'
import Image from 'next/image'
import signupimg2 from '@/public/assets/signupimg2.png'
const page = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div>
      <p className='font-darker text-3xl font-semibold text-[#FFF] text-center'>Create Account</p>
      <div className='flex justify-center gap-x-[55px] my-[55px]'>
        <button className='bg-[#303030] flex items-center py-[10px] px-[28px] rounded-md'>
        <span className='pr-[15px]'><Image src={signupimage1} alt="signupimage1"/></span>
        <p className='font-work text-xs font-semibold text-[#E2DFDF]'>Continue with Google</p>
        </button>
        <button className='bg-[#303030] flex items-center py-[12px] px-[28px] rounded-md'>
        <span className='pr-[15px]'><Image src={signupimg2} alt="signupimg2"/></span>                  
        <p className='font-work text-xs font-semibold text-[#E2DFDF]'>Continue with Google</p>
        </button>
      </div>
       <p className='font-work text-sm font-medium text-[#A1A1A1] text-center mb-[40px]'>- or Sign up with Email    </p>
       <div className='ml-[20px]'>
       <form>
        <label className='block font-pops text-sm font-normal text-[#FFF] tracking-[0.28px]' htmlFor="Email">Email</label>
        <input className='bg-transparent font-pops text-sm font-normal text-[#FFF] h-[48px] rounded-[5px] focus:outline-none focus:border-secondary w-[550px] border border-1' type="text" id="email"/>
       </form>
       </div>
       <div className='mt-[80px] text-center w-[590px] bg-secondary rounded-md'>
       <button className='font-pops text-base font-semibold text-[#000] py-[13px]'>Create Account</button>
       </div>
      </div>
    </div>
  )
}

export default page