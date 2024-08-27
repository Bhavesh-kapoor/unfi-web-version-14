import Link from 'next/link';
import React from 'react'
import { BsFillCarFrontFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';

const WhyChoseUs = () => {
  return (
    <div className='flex items-center w-11/12 mx-auto my-6'>
        <div className='hidden lg:block'>
            <img src="/home/unifiwhychoose3.png" className='h-[30rem] w-[100rem]' />
        </div>
        <div className='lg:-ml-16 ml-0 bg-white p-6 rounded shadow'>
            <h3 className='text-[#f38102]'>Why Choose Us</h3>
            <h2 className='text-2xl text-blue-900'>We are Qualified & Professional Giving Best Services</h2>
            <p className='font-normal text-blue-900 my-2'>Selling a car through Unifi Cars is a hassle-free and flawless experience. Excellent customer service from inquiry till the final settlement of the amount, everything is super easygoing.</p>

            <div className='flex gap-4 flex-col md:flex-row'>
                <div className='w-full'>
                    <h2 className='text-xl text-[#f38102] my-2 flex items-center gap-2'><FaShoppingBag/> View Our Inventory</h2>
                    <hr/>
                    <p className='my-2 font-medium text-blue-900'>Before each car is even listed, it goes through a rigorous evaluation process - so you can be sure you're buying a second-hand car in as good a condition as it can be in. Every car undergoes a thorough inspection - 150+ checkpoint quality tests need to be passed.</p>
                </div>
                <div className='w-full'>
                    <h2 className='text-xl text-[#f38102] my-2 flex items-center gap-2'><BsFillCarFrontFill/> Sell your Car Now !</h2>
                    <hr/>
                    <p className='my-2 font-medium text-blue-900'>Selling a car through Unifi Cars is a hassle-free and flawless experience. Excellent customer service from inquiry till the final settlement of the amount, everything is super easygoing.. Here we make the selling process seamless and easygoing.</p>
                </div>

            </div>
            <div>
                <Link href={"/assured-cars"} className='text-[#f38102] hover:text-blue-900 transition-all duration-200'> &gt;&gt; View More</Link>
            </div>
        </div>
    </div>
  )
}

export default WhyChoseUs