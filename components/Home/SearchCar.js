import React, { useState } from 'react'
import { ImSearch } from 'react-icons/im';
import { FaCar } from 'react-icons/fa';
import Link from 'next/link';

const SearchCar = () => {

    const [SugestionFields, setSugestionFields] = useState([])

    async function HandleChange(params) {
        if(params==""){
            setSugestionFields([])
            return;
        }
        const data = {"brand_name":params}

        try {
            const fetchSuggestion = await fetch("https://api.unificars.com/api/getallbrandsdropdown2",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const suggestions = await fetchSuggestion.json()
        setSugestionFields(suggestions.data)
        } catch (error) {
           
        }
        
    } 

    return (
        <div className='w-5/6 mx-auto p-4 md:p-0 bg-white shadow rounded flex items-center justify-around'>
            <div className=''>
                <h1 className='text-xl lg:text-5xl font-extrabold text-blue-900 flex items-center gap-2'><FaCar className='text-orange-600'/> LOOKING FOR A <span className='text-orange-600'>CAR?</span> </h1>
                <p className='my-2 text-sm lg:text-base'>Choose From 50+ Brands And More Than 1500 Certified Used Cars</p>
                <div className='w-full border-2 text-xl p-2 relative shadow text-gray-700 rounded-xl '>
                    <div className='flex justify-stretch'>
                        <input className='p-2 outline-none w-full' onChange={(e)=>{HandleChange(e.target.value)}} placeholder='Search Car'/>
                        <button className='bg-orange-400 p-2 px-3 text-white shadow hover:scale-105 duration-200 transition-all rounded-full'><ImSearch/></button>
                    </div>
                    <div className='flex flex-col absolute bg-white shadow  rounded w-11/12'>
                        {SugestionFields.length>0?SugestionFields.map((e,index)=>{return<Link href={`/assured-cars?model=${e.model}`} className='p-2 px-4 text-start rounded hover:text-[#f38102]' key={index}>{e.make} {e.model}</Link>}):<></>}
                    </div>
                </div>
            </div>

            <div className='items-center hidden md:flex'>
                    <img src="/home/frame.png" alt='frame' className='w-96'/>
            </div>

        </div>
    )
}

export default SearchCar