import React from 'react'

const SelectKm = ({ setUserCar, UserCar, setCurrentTab, UserCarTabArray }) => {

  const Km = ["below 10,000km", "10,000 - 20,000km" ,"20,000 - 40,000km"  ,"40,000 - 70,000km" ,"70,000 - 1,20,000km"  ,"1,20,000 - 1,40,000km" ,"above 1,40,000km"]

  return (
     <div className='flex flex-wrap w-11/12 mx-auto gap-4 my-4'>
      {Km.length > 0 ? Km.map((e, index) => {
        return <div onClick={() => { setUserCar({ ...UserCar, kmDriven: e }); UserCarTabArray[6] = e; setCurrentTab("7") }} className='shadow-md border p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded flex items-center justify-center' key={index}>
          <div className='text-base'>{e} </div>
        </div>
      }) : <></>}
    </div>
  )
}

export default SelectKm