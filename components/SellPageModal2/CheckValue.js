import React, { useState } from 'react'

const CheckValue = ({ UserCar,setlast_id, BookSlot, setBookSlot, bookingRef ,setUserNumber ,UserNumber}) => {

    const [OtpSend, setOtpSend] = useState(false)
    const [OTPVerify, setOTPVerify] = useState(false)
    const [OTPNumber, setOTPNumber] = useState("")
    const [ExpectedPrice, setExpectedPrice] = useState([0,0])

    const sendOtp = async (data) => {
        const fetchData = await fetch("https://www.unificars.com/api/sendotp", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const jsonRes = await fetchData.json()
        return jsonRes
    }

    const HandleGetOtp = async () => {
        getCarValuation()
        if (UserNumber != "") {
            const data = { ...UserCar, "mobile_number": UserNumber, brand: UserCar.brand.name, model: UserCar.model.name, varient: UserCar.varient.name }
            const res = await sendOtp(data)
            if (res.code == 200) {
                setOtpSend(true)
            }

        }
    }

    const getCarValuation = async() => {
        const data = {
            "year": UserCar.year,
            "model_name": UserCar.varient.name,
            "id": UserCar.model.id
        }
        try {
            const valuation =await fetch("https://www.unificars.com/api/getvarientmodelamount",{
                method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            })

            const value =await valuation.json()
            if(value.code==200){
                const response = value.data
                let calculatedyear=15
                if(UserCar.fuelType==="DIESEL"){
                    calculatedyear=10
                }
                let calculation = (response / calculatedyear);
                let remainingyears = (UserCar.year + calculatedyear - new Date().getFullYear());
                let expectedprice = Math.round(calculation * remainingyears);
                let expectedprice1 = Math.round(calculation * remainingyears) + 100240;
                console.log([expectedprice,expectedprice1])
                setExpectedPrice([expectedprice,expectedprice1])
            }
        } catch (error) {
            
        }
    }

    const HandleVerifyOTP = async () => {
        if (OTPNumber != "") {

            const data = { ...UserCar, "otp": OTPNumber, "mobile_number": UserNumber, brand: UserCar.brand.name, model: UserCar.model.name, varient: UserCar.varient.name }
            console.log(JSON.stringify(data))

            const fetchData = await fetch("https://www.unificars.com/api/customerrequestverify", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const jsonRes = await fetchData.json()
            if (jsonRes.code == 200) {
                setOTPVerify(true)
                setlast_id(jsonRes.last_id)
                getCarValuation();
            }
        }
    }

    const HandleEditNumber = () => {
        setOtpSend(false)
        setOTPNumber("")
        setUserNumber("")
    }

    return (
        <div className='w-9/12 mx-auto my-4'>

            <div>
                <ol class="md:flex hidden items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                    <li class="flex md:w-full items-center text-orange-600 dark:text-orange-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Basic  <span class="hidden sm:inline-flex sm:ml-2">Details</span>
                        </span>
                    </li>
                    <li class="flex md:w-full items-center after:content-[''] after:w-full text-orange-600 dark:text-orange-500 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Car  <span class="hidden sm:inline-flex sm:ml-2">Information</span>
                        </span>
                    </li>
                    <li class="flex md:w-full items-center after:content-[''] after:w-full text-orange-600 dark:text-orange-500 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Car <span class="hidden sm:inline-flex sm:ml-2">Condition</span>
                        </span>
                    </li>
                    <li class="flex md:w-full items-center after:content-[''] after:w-full text-orange-600 dark:text-orange-500 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Expected  <span class="hidden sm:inline-flex sm:ml-2">Offer </span>
                        </span>
                    </li>
                    <li class="flex items-center">
                        <span class="mr-2">Book </span>
                        Appointment
                    </li>
                </ol>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-8'>
                <div className='bg-white shadow-xl border rounded-xl p-8'>
                    <div className='flex flex-col mt-2'>
                        <p className='tracking-widest font-bold text-gray-600 text-lg'>Your Car Detail</p>
                        <img src='/home/title_line.png' alt="line" className='w-24' />
                    </div>
                    <div className='flex flex-col gap-2 my-2 mt-6'>
                        <h3 className='text-2xl'>{UserCar.year} {UserCar.brand.name} {UserCar.model.name} {UserCar.varient.name}</h3>
                        <p><span className='w-24 text-gray-800 inline-block mr-2'>Ownership</span>{UserCar.ownerShip}</p>
                        <p><span className='w-24 text-gray-800 inline-block mr-2'>Fuel Type</span>{UserCar.fuelType}</p>
                        <p><span className='w-24 text-gray-800 inline-block mr-2'>KM DRIVEN</span>{UserCar.kmDriven}</p>
                        <p><span className='w-24 text-gray-800 inline-block mr-2'>Location</span>{UserCar.location}</p>
                    </div>
                </div>
                <div className='bg-white shadow-xl border rounded-xl p-8'>
                    <div className='flex flex-col'>
                        <p className='tracking-widest font-bold text-gray-600 text-lg'>Enter your Mobile Number to know your car's valuation</p>
                        <img src='/home/title_line.png' alt="line" className='w-24' />
                    </div>
                    <div className='flex flex-col gap-2 my-2 mt-6'>

                        {OTPVerify ? <>
                            {ExpectedPrice[0]!==0?<div className='flex tracking-widest flex-col text-blue-900 justify-center items-center'>
                            <div className='text-xl'>Expected Price</div>
                            <h3 className='text-2xl my-2 '>₹{(ExpectedPrice[0]<0?0:ExpectedPrice[0]).toLocaleString('en-IN')} - ₹{(ExpectedPrice[1]).toLocaleString('en-IN')}</h3>
                            <div className='bg-blue-500/20 p-2 rounded text-green-700 my-2'><p>Price May Vary On Inspection</p></div>
                            </div>:<></>
                            }
                            <button onClick={() => {setBookSlot(true); bookingRef.current.scrollIntoView({ behavior: "smooth" }) }} className='w-full p-2 text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out '>Book Slot</button>
                        </> : <div>
                            <div className='w-full my-2'>
                                <input placeholder='Enter Your Mobile Number' disabled={OtpSend} onChange={(e) => setUserNumber(e.target.value)} value={UserNumber} className='w-full p-2 border outline-gray-200 rounded border-gray-200 ' />
                            </div>
                            {OtpSend ? <div>
                                <input placeholder='Enter Your OTP' onChange={(e) => setOTPNumber(e.target.value)} value={OTPNumber} className='w-full p-2 border outline-gray-200 rounded border-gray-200 ' />
                                <div className='flex justify-between gap-2 my-2'>
                                    <button onClick={HandleVerifyOTP} className='w-full p-2 text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out '>Verify OTP</button>
                                    <button onClick={HandleEditNumber} className='w-full p-2 text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out '>Edit Number</button>
                                </div>
                            </div> :
                                <div className='w-full'>
                                    <button onClick={HandleGetOtp} className='w-full p-2 text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out '>GET OTP</button>
                                </div>}
                        </div>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckValue