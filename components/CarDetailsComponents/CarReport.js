import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import AllCarParts from './AllCarParts';

const CarReport = ({ carDetails }) => {
    const [ModalToggle, setModalToggle] = useState(true)

    return (
        <>
            {carDetails.length > 0 ? <div className='cursor-pointer shadow rounded-xl'>
                <div onClick={() => setModalToggle(!ModalToggle)} className={`flex items-center rounded-t-xl hover:bg-gray-100 gap-1 p-4 ${ModalToggle ? "bg-gray-200" : ""}`}>
                    <h2>Feature</h2>
                    <p className=''>{ModalToggle ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
                </div>
                <div className={`${ModalToggle ? "h-auto p-4" : "h-0"}  transition-all duration-200 overflow-hidden grid grid-cols-1 gap-2`}>
                    {carDetails.map((e, index) => {
                        return <div key={index}>
                            <AllCarParts part={e} />
                        </div>
                    })}

                </div>
            </div> : <></>}
        </>
    )
}

export default CarReport