import React from 'react'
import { BiCalendar ,BiUser ,BiSolidColorFill  } from 'react-icons/bi';
import { BsFillFuelPumpFill,BsCarFront ,BsKey } from 'react-icons/bs';
import { IoMdSpeedometer } from 'react-icons/io';
import { GrDocumentVerified } from 'react-icons/gr';

const CarDetailTable = (props) => {
    const { CarDetails } = props
    // console.log("form Car details Table", CarDetails)

    return (
        <div className='border rounded-xl bg-gray-50 opacity-80 uppercase'>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 py-4'>
                <div className='flex'>
                    <div><BiCalendar className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 text-sm md:text-base font-normal text-gray-600'>
                        <div>Reg Year</div>
                        <div className='font-bold text-gray-900'>{CarDetails[0].Model}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BiUser className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 text-sm md:text-base font-normal text-gray-600'>
                        <div>Ownership</div>
                        <div className='font-bold text-gray-900'>{CarDetails[0].Ownership}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><IoMdSpeedometer className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 text-sm md:text-base font-normal text-gray-600'>
                        <div>Km Driven</div>
                        <div className='font-bold text-gray-900'>{CarDetails[0]["Km Driven"]}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BsFillFuelPumpFill className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 text-sm md:text-base font-normal text-gray-600'>
                        <div>Fuel Type</div>
                        <div className='font-bold text-gray-900'>{CarDetails[0]["Fuel Type"]}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BsCarFront className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 text-sm md:text-base font-normal text-gray-600'>
                        <div>Registration In</div>
                        <div className='font-bold text-gray-900'>{CarDetails[0]["Registration In"]}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BiSolidColorFill className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 text-sm md:text-base font-normal text-gray-600'>
                        <div>Colour</div>
                        <div className='font-bold text-gray-900'>{CarDetails[0].Colour}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><GrDocumentVerified className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 text-sm md:text-base font-normal text-gray-600'>
                        <div>Insurance</div>
                        <div className='font-bold text-gray-900'>Comprehensive</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BsKey className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 text-sm md:text-base font-normal text-gray-600'>
                        <div>Spare Key</div>
                        <div className='font-bold text-gray-900'>YES</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetailTable