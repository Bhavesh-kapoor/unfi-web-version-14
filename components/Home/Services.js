import React from 'react'
import { BsFillGiftFill } from 'react-icons/bs';
import { BiSolidLockAlt } from 'react-icons/bi';
import { HiDocumentText } from 'react-icons/hi';
import { FaRupeeSign } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='my-6'>
            <div className='text-center items-center flex flex-col'>
                <p className='tracking-widest text-gray-600 text-lg'>What We Offer !</p>
                <h2 className='text-4xl text-[#f38102] my-2'>Services We Offer</h2>
                <img src='/home/title_line.png' />
            </div>

            <div className='flex flex-col lg:flex-row items-center'>

                <div className='w-full flex flex-col md:flex-row lg:flex-col lg:justify-end justify-center items-center lg:items-end lg:text-end'>

                    <div className=' flex flex-col justify-end items-center text-center lg:items-end lg:text-end'>
                        <div className='rounded-full w-auto border-dotted p-6 border-2 text-gray-600 text-4xl hover:text-orange-500 transition-all duration-200'>
                            <BsFillGiftFill />
                        </div>
                        <div className='my-2'>
                            <h2 className='text-xl mb-2'>BEST DEALS</h2>
                            <p className='max-w-xs font-medium'>We guarantee the best deals and offer the best price for your car with zero selling charge.</p>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-end items-center text-center lg:items-end lg:text-end'>
                        <div className='rounded-full w-auto border-dotted p-6 border-2 text-gray-600 text-4xl hover:text-orange-500 transition-all duration-200'>
                            <HiDocumentText />
                        </div>
                        <div className='my-2'>
                            <h2 className='text-xl mb-2'>RC TRANSFER ASSURANCE</h2>
                            <p className='max-w-xs font-medium'>Transfer of ownership from the seller to the buyer is our utmost priority.</p>
                        </div>
                    </div>

                </div>


                <div className='w-full flex'>
                    <img src='/home/featured.webp' />
                </div>


                <div className='w-full flex flex-col md:flex-row lg:flex-col lg:justify-start justify-center items-center lg:items-start lg:text-start'>


                    <div className='flex flex-col items-center text-center lg:text-start lg:items-start'>
                        <div className='rounded-full w-auto border-dotted p-6 border-2 text-gray-600 text-4xl hover:text-orange-500 transition-all duration-200'>
                            <FaRupeeSign />
                        </div>
                        <div className='my-2'>
                            <h2 className='text-xl mb-2'>INSTANT PAYMENT</h2>
                            <p className='max-w-xs font-medium'>Get the whole amount transfer to your bank account instantly after signing the deal.</p>
                        </div>
                    </div>

                    <div className=' flex flex-col items-center text-center lg:text-start lg:items-start'>
                        <div className='rounded-full w-auto border-dotted p-6 border-2 text-gray-600 text-4xl hover:text-orange-500 transition-all duration-200'>
                            <BiSolidLockAlt />
                        </div>
                        <div className='my-2'>
                            <h2 className='text-xl mb-2'>PRIORITY CLOSER</h2>
                            <p className='max-w-xs font-medium'>Deals are closed on a first-come-first serves basis and without any lengthy procedure.</p>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Services