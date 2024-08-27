import React from 'react'

const SelectFuel = ({ setCarInfo, carInfo, value, setValue  }) => {

  const Fuel = ["PETROL", "DIESEL" ,"CNG"]

  const handleClick = (e) => {
    setCarInfo({...carInfo, fuelType:e})
    setValue((parseInt(value)+1)+"");
  }
  return (
     <div className='grid grid-cols-2 mx-auto gap-4 '>
      {Fuel.length > 0 ? Fuel.map((e, index) => {
        return <div onClick={() => handleClick(e)} className='col-span-1 shadow-md border p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded flex items-center justify-center' key={index}>
          <div className='text-base'>{e} </div>
        </div>
      }) : <></>}
    </div>
  )
}

export default SelectFuel