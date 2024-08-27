import React from 'react'
import { BsCheckSquareFill } from 'react-icons/bs';

const CheckCarValue = () => {
    return (
        <div className='bg-blue-50 p-8'>
            <div className='md:w-5/6 mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div><img src='https://api.unificars.com/front/img/product/compressedsupport1.png' className='rounded opacity-80' /></div>
                    <div className='flex items-center px-8 p-4'>
                        <div>
                            <h3 className='text-4xl text-blue-900'>Check Your Car Value Now</h3>
                            <div className='grid grid-cols-2 gap-4 mt-8 text-blue-900 text-lg'>
                                <div className='flex items-center gap-4'><BsCheckSquareFill className="text-2xl text-orange-500 flex-none" />Online Tentative Price</div>
                                <div className='flex items-center gap-4'><BsCheckSquareFill className="text-2xl text-orange-500 flex-none" />Instant Payment</div>
                                <div className='flex items-center gap-4'><BsCheckSquareFill className="text-2xl text-orange-500 flex-none" />Sell From Your Home</div>
                                <div className='flex items-center gap-4'><BsCheckSquareFill className="text-2xl text-orange-500 flex-none" />Free RC Transfer</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckCarValue