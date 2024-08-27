import React from 'react'

const SelectYear = ({ setUserCar, UserCar, setCurrentTab, UserCarTabArray }) => {

  const date = new Date()
  const Year = []
  const CurrentYear = date.getFullYear()

  for (let i = 0; i < 17; i++) {
    Year.push(CurrentYear - i)
  }


  return (
     <div className='flex flex-wrap w-11/12 mx-auto gap-4 my-4'>
      {Year.length > 0 ? Year.map((e, index) => {
        return <div onClick={() => { setUserCar({ ...UserCar, year: e }); UserCarTabArray[3] = e; setCurrentTab("4") }} className='shadow-md border p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded flex items-center justify-center' key={index}>
          <div className='text-base'>{e} </div>
        </div>
      }) : <></>}
    </div>
  )
}

export default SelectYear