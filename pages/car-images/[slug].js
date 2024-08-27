// import React, { useEffect, useRef, useState } from 'react'
// import { useRouter } from 'next/router'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import { BsCardChecklist, BsCashCoin, BsWhatsapp } from 'react-icons/bs';
// import { TiTick } from 'react-icons/ti';
// import { IoMdCheckboxOutline } from 'react-icons/io';
// import RingLoader from "react-spinners/RingLoader";
// import Image from 'next/image';
// import Link from 'next/link';
// import ClipLoader from "react-spinners/ClipLoader";
// import CarPageRelatedCars from '@/components/CarDetailsComponents/CarPageRelatedCars';

// const car = () => {
//   const router = useRouter()
//   const { slug } = router.query

//   const [Car, setCar] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [ValidateOtp, setValidateOtp] = useState(false);
//   const [Loader, setLoader] = useState(false);
//   const [Message, setMessage] = useState({});
//   const UserNumber = useRef("")
//   const OtpVerify = useRef("")

//   const fetchCarList = async () => {
//     const params = { "lead_id": slug }
//     const fecthCars = await fetch("https://crm.unificars.com/api/assuredcardetail", {
//       method: 'POST',
//       body: JSON.stringify(params),
//       headers: {
//         'Content-type': 'application/json',
//       },
//     })
//     const jsonData = await fecthCars.json()
//     if (jsonData.code == 200) {
//       console.log(jsonData)
//       setCar(jsonData.data)
//     }
//   };

//   useEffect(() => {
//     fetchCarList()
//   }, [slug]);

//   const HandleSendOtp = async () => {
//     if (UserNumber.current.value != "" && (UserNumber.current.value).match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)) {
//       setMessage([])
//       setLoader(true)
//       const phoneNumer = UserNumber.current.value
//       const data = {
//         mobile: phoneNumer,
//         lead_id: slug
//       }
//       const url = `https://crm.unificars.com/api/webotp`
//       const fetchOtpRes = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-type': 'application/json',
//         },
//       })
//       const jsonResponse = await fetchOtpRes.json()
//       if (jsonResponse.code != 200) {
//         setLoader(false)
//         setValidateOtp(false)
//         setMessage(jsonResponse)
//       } else {
//         setMessage(jsonResponse)
//         setLoader(false)
//         setValidateOtp(true)
//       }
//     }
//     else {
//       setLoader(false)
//       setMessage({code:400, status:["Please Enter a Valid Number"]})
//     }
//   }
//   // 8595529873
//   const HandleVereifyOtp = async () => {
//     if (OtpVerify.current.value != "") {
//       setMessage([])
//       setLoader(true)
//       const phoneNumer = UserNumber.current.value
//       const otp = OtpVerify.current.value
//       const data = {
//         mobile: phoneNumer,
//         lead_id: slug,
//         otp: otp
//       }
//       const url = `https://crm.unificars.com/api/webotpverify`
//       const fetchOtpRes = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-type': 'application/json',
//         },
//       })
//       const jsonResponse = await fetchOtpRes.json()
//       console.log(jsonResponse)
//       if(jsonResponse.code==200){
//         setMessage(jsonResponse)
//         if(jsonResponse.link){
//           setMessage({code:200, status:["Please Wait while Fecthing a Report"]})
//           router.push(jsonResponse.link)
//           setTimeout(() => {
//             setShowModal(false)
//             setMessage(false)
//             setLoader(false)
//             UserNumber.current.value=""
//             OtpVerify.current.value=""
//           }, 5000);
//         }
//         // setValidateOtp(true)
//       }  else{
//         setLoader(false)
//         setMessage(jsonResponse)
//         setValidateOtp(true)
//       }
//     }
//   }

//   return (
//     <>
//       {Car && Car != "" ? <section className="text-gray-600 body-font relative">
//         <div className="container px-2 py-10 mx-auto">
//           <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">

//             <div className=" w-full px-4 col-span-2">

//               <div>
//                 <Carousel
//                   showStatus={false}
//                   showArrows={true}
//                   autoPlay={true}
//                   swipeable={true}
//                   interval={4000}
//                   infiniteLoop={true}
//                   swipeScrollTolerance={50}
//                   preventMovementUntilSwipeScrollTolerance={true}
//                   emulateTouch={true}
//                   dynamicHeight={true}
//                 >
//                   {Car && Car.images ? Car.images.map((image, index) => {
//                     return <div key={index}> <img
//                       src={image.image}
//                       className="rounded-xl h-full"
//                     /></div>

//                   }) : <img />}
//                 </Carousel>
//               </div>
//               <div className='grid grid-cols-2 gap-2'>
//                 {Car && Car.lead ? Object.keys(Car.lead[0]).map((detail, index) => {
//                   return (
//                     <div className='grid grid-cols-2 text-base font-semibold text-center' key={index}>
//                       <div className='bg-gray-200 text-black p-2 whitespace-normal border rounded-l-xl'>{detail}</div>
//                       <div className='bg-gray-100 p-2 whitespace-normal border  rounded-r-xl'>{(Car.lead[0])[detail]}</div>
//                     </div>
//                   )
//                 })

//                   :
//                   <></>
//                 }

//               </div>

//               <div className=' grid grid-cols-1 md:grid-cols-2  my-4 bg-gray-50 rounded-xl shadow border-b-2 border-r-2' >
//                 <div className="">
//                   <Image
//                     src="/inpection.png"
//                     alt="background image"
//                     width={348}
//                     height={348}
//                   />
//                 </div>
//                 <div className="p-2">
//                   <h4 className='text-2xl my-4 font-bold text-blue-700'> Buy Your Car In Just 30 Mins !</h4>
//                   <p> We know you have heard it many times that buying or selling a pre owned car is hell lot of work. Yes. It is.But not for you. We will look for all the work required to process selling or buying of your car and guess what you would not even know it. It will be as easy as buying or selling anything on an ecommerce website. Place your order/add your listing and you are done. Our wide range of catalogs have all the details you need. Nothing to hide. All you need to worry about is where to park your new car.
//                   </p>
//                   <div className='grid grid-cols-2 gap-4 text-lg my-4 font-semibold'>
//                     <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Top Quality Cars</div>
//                     <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Buy From Your Home</div>
//                     <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Secure Payment</div>
//                     <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Free RC Transfer</div>
//                   </div>

//                 </div>
//               </div>

//             </div>

//             <div className=' '>
//               <div className="w-full border-2 border-gray-200 bg-gray-100 shadow rounded-xl p-5 lg:py-6 mt-6 lg:mt-0 sticky top-5">
//                 <div>
//                   <h1 className="text-gray-900 text-2xl title-font font-bold mb-1"> {Car && Car.lead ? Car.lead[0]["Model"] : ""}  {Car && Car.lead ? Car.lead[0]["Brand"] : "Brand"}  </h1> <span className="title-font font-medium text-base text-gray-900">₹{Car && Car.lead ? (parseInt(Car.lead[0]["Amount"])).toLocaleString("en-IN") : "..."}</span>
//                 </div>
//                 <div className='flex flex-wrap justify-start gap-3 my-4'>

//                   <div className='bg-white shadow rounded-xl p-2'>
//                     {(Car.lead[0])["Km Driven"]}
//                   </div>
//                   <div className='bg-white shadow rounded-xl p-2'>
//                     {(Car.lead[0])["Ownership"]}
//                   </div>
//                   <div className='bg-white shadow rounded-xl p-2'>
//                     {(Car.lead[0])["Fuel Type"]}
//                   </div>
//                   <div className='bg-white shadow rounded-xl p-2 px-4'>
//                     {(Car.lead[0])["Registration In"]}
//                   </div>
//                   <div className='bg-white shadow rounded-xl p-2'>
//                     {(Car.lead[0])["Colour"]}
//                   </div>

//                 </div>

//                 <div className='flex flex-col gap-4 text-blue-500 font-semibold text-sm border-b-2 p-2 border-gray-300'>
//                   <div className='flex'><BsCashCoin className='my-1 mr-2' />Free Rc transfer</div>
//                   <div className='flex'><TiTick className='my-1 mr-2' />Hassle free documentation</div>
//                   <div className='flex'><BsCardChecklist className='my-1 mr-2' />150+ point inspected</div>
//                   <div className='cursor-pointer'><a className='flex' href="https://wa.me/+919911771977?text=Hey Unificars  I want to buy Maruti Wagon-R VXI 1.2 containing  UNC-13666" target="_blank"><BsWhatsapp className='my-1 mr-2' />Connect on Whatsapp <AiOutlineArrowRight className="my-1 mx-1" /></a></div>
//                 </div>

//                 <div className='grid grid-cols-2 text-center my-2'>

//                   <div className="flex justify-end my-2 gap-4 col-span-2">
//                     <button className="flex  text-white bg-green-500 py-2 px-6 focus:outline-none shadow border-b-2 border-orange-00 border-r-2 transition-all duration-300  rounded-xl" onClick={() => setShowModal(true)}><BsCardChecklist className="my-1 mr-2" /> Download Report </button>
//                     {/* router.push({`/report/${slug}`}) once user enter their details */}
//                     <button className="flex text-white bg-orange-500 py-2 px-6 focus:outline-none shadow border-b-2 border-orange-00 border-r-2 transition-all duration-300  rounded-xl">Book a Test Drive Now <AiOutlineArrowRight className="my-1 mx-1" /></button>

//                   </div>

//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//         {/* Modal start here */}
//         <div className={`${showModal ? "block" : "hidden"} `}>
//           <div className=''>
//             <div
//               className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '

//             >

//               <div className="relative w-auto my-6 mx-auto max-w-3xl ">
//                 {/*content*/}
//                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                   <div className="relative flex-auto grid grid-cols-1 md:grid-cols-2">
//                     <div className='hidden md:block'><img src='/enqimg.png' className='w-full h-full' /></div>
//                     <div className="m-2 mx-4">
//                       <button type="button" className="text-2xl text-orange-500 font-bold float-right" onClick={() => setShowModal(false)}>
//                         <span aria-hidden="true">×</span>
//                       </button>
//                       <div className='flex flex-col gap-4 font-bold text-xl'>
//                         <h4 className='text-2xl font-bold p-2 text-blue-900'>Fill The Form <br /> To Download Report</h4>
//                         <div className="flex flex-col gap-2">
//                           <label htmlFor="tel">Phone</label>
//                           <input type="number" className={`bg-blue-50 border-blue-200 focus:outline-none p-2 rounded-xl`} name="phone" placeholder="Enter Your Phone" ref={UserNumber} readOnly={ValidateOtp} />
//                         </div>
//                         {Message && Message.code? <div className={`${Message.code==200?"text-green-500":"text-red-500"}`}>{Message.status.map((e, index) => { return <p className="text-sm" key={index} >{e}</p> })} </div>: <></>}
//                         <div className={`${ValidateOtp ? "flex flex-col gap-2" : "hidden"}`}>
//                           <label htmlFor="tel">Verify OTP</label>
//                           <input type="number" className="bg-blue-50 border-blue-200 focus:outline-none p-2 rounded-xl" name="phone" placeholder="Enter OTP HERE..." ref={OtpVerify} />
//                         </div>
//                         {Loader ?
//                           <ClipLoader color="#36d7b7" /> : <><div className={`${!ValidateOtp ? "flex flex-col gap-2" : "hidden"}`} onClick={HandleSendOtp}>
//                             <button className='p-2 text-white rounded-xl bg-orange-500 mt-2'>Send OTP</button>
//                           </div>
//                             <div className={`${ValidateOtp ? "flex flex-col gap-2" : "hidden"}`} onClick={HandleVereifyOtp}>
//                               <button className='p-2 text-white rounded-xl bg-orange-500 mt-2'>Send OTP</button>
//                             </div></>}

//                       </div>
//                     </div>
//                   </div>
//                   {/*footer*/}
//                   {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                     <button
//                       className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={() => setShowModal(false)}
//                     >
//                       Close
//                     </button>
//                     <button
//                       className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={() => setShowModal(false)}
//                     >
//                       Save Changes
//                     </button>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//             <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//           </div>
//         </div>
//         {/* modal ends here */}

//         <div className='w-11/12 m-auto mb-4 '>
//           <h2 className='text-4xl font-bold border-b-2 p-2 text-blue-900 capitalize'>You may also Like</h2>
//           <CarPageRelatedCars />
//         </div>

//       </section> : <div className="flex col-span-4 justify-center h-96 items-center w-11/12 my-8 bg-gray-100 m-auto rounded-xl">
//         <div className="">
//           <RingLoader color="#f38120" size={100} className="" />
//         </div>
//       </div>}
//     </>
//   )
// }

// export default car

import CarImageCarousel from "@/components/CarDetailsComponents/CarImageCarousel";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const carImages = () => {
  const router = useRouter();
  const { slug, id, assured } = router.query;
  const [car, setCar] = useState("");
  const [Loading, setLoading] = useState(true);

  const fetchCarDetails = async () => {
    try {
      const params = { lead_id: id, assured: assured };
      setLoading(true);
      const fecthCars = await fetch(
        "https://crm.unificars.com/api/assuredcardetail",
        {
          method: "POST",
          body: JSON.stringify(params),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const jsonData = await fecthCars.json();
      // setShowSpinner(false)
      if (jsonData.code == 200) {
        console.log(jsonData, "from car images");
        setCar(jsonData.data);
        setLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetchCarDetails();
  }, [router.isReady]);

  return (
    <>
      {Loading ? (
        <div className="flex col-span-4 justify-center h-96 items-center w-11/12 my-8 m-auto rounded-xl">
          <div className="">
            <img
              src="../logo.png"
              className="h-20 animate-bounce  mx-auto"
              alt="logo"
            />
            <BarLoader color="#f38120" width={100} className="mx-auto" />
          </div>
        </div>
      ) : (
        <>
          {car && car != "" ? (
            <div className="container w-10/12 mx-auto my-4">
              <CarImageCarousel
                images={
                  car.assuredimages.length > 0 ? car.assuredimages : car.images
                }
                car={car}
              />
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default carImages;
