import React from 'react'

const SelectFuel = ({ setUserCar, UserCar, setCurrentTab, UserCarTabArray }) => {

  const Fuel = ["PETROL", "DIESEL" ,"CNG"]

  return (
     <div className='flex flex-wrap w-11/12 mx-auto gap-4 my-4'>
      {Fuel.length > 0 ? Fuel.map((e, index) => {
        return <div onClick={() => { setUserCar({ ...UserCar, fuelType: e }); UserCarTabArray[5] = e; setCurrentTab("6") }} className='shadow-md border p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded flex items-center justify-center' key={index}>
          <div className='text-base'>{e} </div>
        </div>
      }) : <></>}
    </div>
  )
}

export default SelectFuel