import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { TiTick } from 'react-icons/ti';


const Report = () => {
  const router = useRouter()
  const { slug } = router.query

  const [CarDetails, setCarDetails] = useState([]);
  const [CarName, setCarName] = useState("");

  const fetchCarList = async () => {
    const params={"lead_id":slug}
    const fecthCars = await fetch("https://crm.unificars.com/api/assuredcardetail", {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const jsonData = await fecthCars.json()
    if(jsonData.code==200){
      setCarDetails(jsonData.data.details.part)
      setCarName(jsonData.data.lead.brand)
      // console.log("from report/slug.js",jsonData.data.details.part)
    }
  };

  useEffect(() => {
    fetchCarList()
  }, [slug]);

  return (
    <div className='w-11/12 mx-auto my-4'>
      <h1 className='text-2xl font-bold ml-4'>Report-{CarName}</h1>
      <div className='grid grid-cols-2 gap-4 my-4 '>
      {CarDetails&& CarDetails.length>0 ?CarDetails.map((detail,index)=>{
                    return <div className='shadow border-2 border-b-0 border-gray-300' key={index}>
                    <div className='bg-gray-200 text-xl font-bold p-2'>{detail.name}</div>
                    {detail.types.length>0?detail.types.map((e,index)=>{
                      return <div className='p-2 px-8 bg-gray-100 border-b-2 border-gray-300 text-base font-semibold flex justify-between' key={index}>
                        <div>{e.name}</div>
                        <div className='flex gap-4 items-center'>
                          <div>{e.status=="Ok"||e.status=="ok"?<TiTick className='bg-green-500 rounded-xl text-white'/>:e.condition}</div>
                          {/* s<div>{e.image.length>0?<img src={e.image[0].image} className='w-10 rounded'/>:<></>}</div> */}
                          </div>
                      </div>
                    }):<></>}
                  </div>}):<></>
                  }
      </div>
    </div>
  )
}

export default Report