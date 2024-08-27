import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const TitleX = ({title ,setOpenModal ,setUserCar ,setUserCarTabArray ,setCurrentTab}) => {

    const HandleClose=()=>{
        setOpenModal(false)
        setUserCar({"brand":{"name":"" , "id":""},"model":{"name":"" , "id":""} , "varient":{"name":"" , "id":""}, "year":"","ownerShip":"" ,"fuelType":"" , "kmDriven":"", "location":"" })
        const arr = new Array(7)
        setUserCarTabArray(arr)
        setCurrentTab(0)
    }

    return (
        <div className='flex items-center justify-between w-11/12 mx-auto my-2'>
            <h3 className='text-2xl uppercase text-[#f38102] '>{title}</h3>
            <button className='text-[#f38102] text-2xl' onClick={()=>HandleClose()}><AiOutlineClose/></button>
        </div>
    )
}

export default TitleX