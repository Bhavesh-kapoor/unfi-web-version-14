import React from 'react'

const SelectOwner = ({ setUserCar, UserCar, setCurrentTab, UserCarTabArray }) => {

  const Owner = [1,2,3,4]

  return (
     <div className='flex flex-wrap w-11/12 mx-auto gap-4 my-4'>
      {Owner.length > 0 ? Owner.map((e, index) => {
        return <div onClick={() => { setUserCar({ ...UserCar, ownerShip: e }); UserCarTabArray[4] = e; setCurrentTab("5") }} className='shadow-md border p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded flex items-center justify-center' key={index}>
          <div className='text-base'>  {e} Ownership </div>
        </div>
      }) : <></>}
    </div>
  )
}

export default SelectOwner