import { Paper } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeCarsCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <div className='p-8'>
            <div className='w-5/6 mx-auto'>
                <h3 className='text-4xl text-blue-900'>New Arrivals</h3>
                <Carousel responsive={responsive} className='my-4 z-0 py-4'>
                    <Paper elevation={4} className='bg-gray-100 rounded mx-2 overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                        <div>
                            <div><img src='/carImages/car1.jpeg' className='rounded' /></div>
                            <div><div className="cursor-pointer p-4">
                                <div className="flex flex-col ">
                                    <Link
                                        href={`/`}
                                        className="my-2"
                                    >
                                        <h5 className="text-lg font-bold ">
                                            car.lead.brand
                                            <p className="text-sm font-normal">VXI 1.2 Manual </p>
                                        </h5>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="whitespace-nowrap text-xl font-bold">
                                                    ₹ {(parseInt("1456444")).toLocaleString("en-IN")}
                                                </span>
                                                <span className="font-semibold ml-2 line-through text-orange-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                                    <div className="p-2 pl-0 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                         5000km
                                        </p>
                                    </div>
                                    <div className="p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            1st Owner
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            Petrol
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            DL
                                        </p>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </Paper>
                    <Paper elevation={4} className='bg-gray-100 rounded mx-2 overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                        <div>
                            <div><img src='/carImages/car1.jpeg' className='rounded' /></div>
                            <div><div className="cursor-pointer p-4">
                                <div className="flex flex-col ">
                                    <Link
                                        href={`/`}
                                        className="my-2"
                                    >
                                        <h5 className="text-lg font-bold ">
                                            car.lead.brand
                                            <p className="text-sm font-normal">VXI 1.2 Manual </p>
                                        </h5>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="whitespace-nowrap text-xl font-bold">
                                                    ₹ {(parseInt("1456444")).toLocaleString("en-IN")}
                                                </span>
                                                <span className="font-semibold ml-2 line-through text-orange-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                                    <div className="p-2 pl-0 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                         5000km
                                        </p>
                                    </div>
                                    <div className="p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            1st Owner
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            Petrol
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            DL
                                        </p>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </Paper>
                    <Paper elevation={4} className='bg-gray-100 rounded mx-2 overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                        <div>
                            <div><img src='/carImages/car1.jpeg' className='rounded' /></div>
                            <div><div className="cursor-pointer p-4">
                                <div className="flex flex-col ">
                                    <Link
                                        href={`/`}
                                        className="my-2"
                                    >
                                        <h5 className="text-lg font-bold ">
                                            car.lead.brand
                                            <p className="text-sm font-normal">VXI 1.2 Manual </p>
                                        </h5>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="whitespace-nowrap text-xl font-bold">
                                                    ₹ {(parseInt("1456444")).toLocaleString("en-IN")}
                                                </span>
                                                <span className="font-semibold ml-2 line-through text-orange-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                                    <div className="p-2 pl-0 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                         5000km
                                        </p>
                                    </div>
                                    <div className="p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            1st Owner
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            Petrol
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            DL
                                        </p>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </Paper>
                    <Paper elevation={4} className='bg-gray-100 rounded mx-2 overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                        <div>
                            <div><img src='/carImages/car1.jpeg' className='rounded' /></div>
                            <div><div className="cursor-pointer p-4">
                                <div className="flex flex-col ">
                                    <Link
                                        href={`/`}
                                        className="my-2"
                                    >
                                        <h5 className="text-lg font-bold ">
                                            car.lead.brand
                                            <p className="text-sm font-normal">VXI 1.2 Manual </p>
                                        </h5>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="whitespace-nowrap text-xl font-bold">
                                                    ₹ {(parseInt("1456444")).toLocaleString("en-IN")}
                                                </span>
                                                <span className="font-semibold ml-2 line-through text-orange-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                                    <div className="p-2 pl-0 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                         5000km
                                        </p>
                                    </div>
                                    <div className="p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            1st Owner
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            Petrol
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            DL
                                        </p>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </Paper>
                    <Paper elevation={4} className='bg-gray-100 rounded mx-2 overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                        <div>
                            <div><img src='/carImages/car1.jpeg' className='rounded' /></div>
                            <div><div className="cursor-pointer p-4">
                                <div className="flex flex-col ">
                                    <Link
                                        href={`/`}
                                        className="my-2"
                                    >
                                        <h5 className="text-lg font-bold ">
                                            car.lead.brand
                                            <p className="text-sm font-normal">VXI 1.2 Manual </p>
                                        </h5>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="whitespace-nowrap text-xl font-bold">
                                                    ₹ {(parseInt("1456444")).toLocaleString("en-IN")}
                                                </span>
                                                <span className="font-semibold ml-2 line-through text-orange-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                                    <div className="p-2 pl-0 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                         5000km
                                        </p>
                                    </div>
                                    <div className="p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            1st Owner
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            Petrol
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            DL
                                        </p>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </Paper>
                    <Paper elevation={4} className='bg-gray-100 rounded mx-2 overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                        <div>
                            <div><img src='/carImages/car1.jpeg' className='rounded' /></div>
                            <div><div className="cursor-pointer p-4">
                                <div className="flex flex-col ">
                                    <Link
                                        href={`/`}
                                        className="my-2"
                                    >
                                        <h5 className="text-lg font-bold ">
                                            car.lead.brand
                                            <p className="text-sm font-normal">VXI 1.2 Manual </p>
                                        </h5>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="whitespace-nowrap text-xl font-bold">
                                                    ₹ {(parseInt("1456444")).toLocaleString("en-IN")}
                                                </span>
                                                <span className="font-semibold ml-2 line-through text-orange-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                                    <div className="p-2 pl-0 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                         5000km
                                        </p>
                                    </div>
                                    <div className="p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            1st Owner
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            Petrol
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            DL
                                        </p>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </Paper>
                    <Paper elevation={4} className='bg-gray-100 rounded mx-2 overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                        <div>
                            <div><img src='/carImages/car1.jpeg' className='rounded' /></div>
                            <div><div className="cursor-pointer p-4">
                                <div className="flex flex-col ">
                                    <Link
                                        href={`/`}
                                        className="my-2"
                                    >
                                        <h5 className="text-lg font-bold ">
                                            car.lead.brand
                                            <p className="text-sm font-normal">VXI 1.2 Manual </p>
                                        </h5>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="whitespace-nowrap text-xl font-bold">
                                                    ₹ {(parseInt("1456444")).toLocaleString("en-IN")}
                                                </span>
                                                <span className="font-semibold ml-2 line-through text-orange-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                                    <div className="p-2 pl-0 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                         5000km
                                        </p>
                                    </div>
                                    <div className="p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            1st Owner
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            Petrol
                                        </p>
                                    </div>
                                    <div className=" p-2 font-semibold  cursor-pointer text-sm">
                                        <p className="flex">
                                            DL
                                        </p>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </Paper>
                    
                </Carousel>
                <div><h5 className='text-base text-blue-900'>Still Confuse Check Our Inventory ? <Link href={"/sell-used-cars"} className='text-orange-500'>Browse All Cars</Link></h5></div>
            </div>
        </div>
    )
}

export default HomeCarsCarousel