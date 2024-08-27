import Link from 'next/link';
import React from 'react'
import { LuCheckSquare } from 'react-icons/lu';

const CheckCarValue = () => {
    return (
        <>
            <div className='flex relative mt-24'>
                <div className="bg-[url('/home/team_bg.jpg')] p-2 w-full">
                    <div className='flex flex-col justify-between lg:p-12 mb-4 lg:w-1/2 lg:ml-12'>
                        <h2 className='text-2xl lg:text-5xl text-orange-500 my-6'>Check Your Car Value Now</h2>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <li className='text-white text-xl flex font-normal items-center gap-2'><LuCheckSquare className='text-[#f38102]' />Online Tentative Price</li>
                            <li className='text-white text-xl flex font-normal items-center gap-2'><LuCheckSquare className='text-[#f38102]' />Instant Payment</li>
                            <li className='text-white text-xl flex font-normal items-center gap-2'><LuCheckSquare className='text-[#f38102]' />Sell From Your Home</li>
                            <li className='text-white text-xl flex font-normal items-center gap-2'><LuCheckSquare className='text-[#f38102]' /> Free RC Transfer</li>
                        </ul>
                        <div className='flex justify-center items-center mt-6'>
                            <Link href={"/sell-used-cars"} className='bg-orange-500 text-white hover:bg-orange-600 rounded cursor-pointer p-4'>Check Valuation</Link>
                        </div>
                    </div>
                    <div className='lg:absolute right-8 -top-12'>
                        <img src='/home/support.png' className='w-[34rem] mx-auto' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckCarValue