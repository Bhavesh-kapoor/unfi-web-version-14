import React, { useEffect, useState } from 'react'
import BarLoader from "react-spinners/BarLoader";

const SelectStates = ({ setUserCar, UserCar, setCurrentTab, UserCarTabArray ,setVerifyNum,setOpenModal }) => {

    const [States, setStates] = useState([])
    const [Loading, setLoading] = useState(true)


    const fetchBrands = async () => {
        setLoading(true)
        try {
            const fetchBrand = await fetch("https://api.unificars.com/api/states", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
            })
            const jsonRes = await fetchBrand.json()
            if (jsonRes.code == 200) {
                setStates(jsonRes.data)
                setLoading(false)
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        fetchBrands()
    }, [])

    return (
        <>
            {!Loading ? <div className='flex flex-wrap w-11/12 mx-auto gap-4 my-4'>
                {States.length > 0 ? States.map((e, index) => {
                    return <div onClick={() => { setUserCar({ ...UserCar, location:e.statename});setOpenModal(false); UserCarTabArray[6] = e.statename; setCurrentTab("7"); setVerifyNum(true) }} className='shadow-md border p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded flex items-center justify-center' key={index}>
                        <div className='text-base'>{e.statename} </div>
                    </div>
                }) : <></>}

            </div> :
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <img src='../logo.png' className='h-20 animate-bounce  mx-auto' />
                    <BarLoader color="#f38120" width={100} className="mx-auto" />
                </div>}

        </>
    )
}

export default SelectStates