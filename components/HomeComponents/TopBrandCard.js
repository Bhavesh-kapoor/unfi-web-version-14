import React, { useEffect } from 'react'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const TopBrandCard = () => {


    const [brands, setbrands] = useState([]);

const getbrands   = async()=>{ 
        const brands =  await fetch('https://api.unificars.com/api/getbrands',{
            method: "GET", 
            mode: "no-cors", 
            headers: {
              "Content-Type": "application/json",
            }
          });
        console.log(brands)
        const jsondata = await brands.json();
        setbrands(jsondata.data);
}

useEffect(() => {
    getbrands()
  
},[]);

    return (
        <div className='bg-blue-50 p-8'>
            <div className='md:w-5/6 mx-auto'>
                <h3 className='text-4xl text-blue-900'>Find Cars By Top Brands</h3>
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 my-4 gap-8'>
                    {brands ? brands.map((brand, index)=>{
                   return <Link href={"/sell-used-cars"} key={index} className='bg-blue-50 rounded-xl hover:shadow-2xl cursor-pointer p-2 overflow-hidden transform transition-transform duration-300 hover:scale-110 shadow-xl'>
                <Image height={400} width={400} src={brand.image} priority={true} alt='brands'/>
                    </Link>    
                    }) : <></>}
                    
                </div>
                <div className='mt-2'><h5 className='text-base text-blue-900'>Do You Want To Sell Car ? <Link href={"/sell-used-cars"} className='text-orange-500'>Click Here</Link></h5></div>
            </div>

        </div>
    )
}

export default TopBrandCard