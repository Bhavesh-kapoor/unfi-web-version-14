import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BsSpeedometer,
  BsFuelPumpFill,
  BsFillCarFrontFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';

const Related = () => {
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
  };
  return (
    <Carousel responsive={responsive} className='my-4'>
      <div className='m-2 mx-4 bg-gray-100 p-4 rounded-xl'><div>
        <div><img src='/carImages/car1.jpeg' className='rounded-xl'/></div>
        <div><div className="cursor-pointer">
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
                  <span className="font-semibold ml-2 line-through text-red-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                </div>
                <div className="text-xl whitespace-nowrap font-bold text-green-700">
                  -10% OFF
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsSpeedometer className="my-1 mr-2" />54275 km
              </p>
            </div>
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <CgProfile className="my-1 mr-2" />1st Owner
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFuelPumpFill className="my-1 mr-2" />
                Petrol
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFillCarFrontFill className="my-1 mr-2" />
                DL
              </p>
            </div>
          </div>
        </div></div>
      </div></div>



      <div className='m-2 mx-4 bg-gray-100 p-4 rounded-xl'><div>
        <div><img src='/carImages/car1.jpeg' className='rounded-xl'/></div>
        <div><div className="cursor-pointer">
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
                  <span className="font-semibold ml-2 line-through text-red-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                </div>
                <div className="text-xl whitespace-nowrap font-bold text-green-700">
                  -10% OFF
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsSpeedometer className="my-1 mr-2" />54275 km
              </p>
            </div>
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <CgProfile className="my-1 mr-2" />1st Owner
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFuelPumpFill className="my-1 mr-2" />
                Petrol
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFillCarFrontFill className="my-1 mr-2" />
                DL
              </p>
            </div>
          </div>
        </div></div>
      </div></div><div className='m-2 mx-4 bg-gray-100 p-4 rounded-xl'><div>
        <div><img src='/carImages/car1.jpeg' className='rounded-xl'/></div>
        <div><div className="cursor-pointer">
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
                  <span className="font-semibold ml-2 line-through text-red-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                </div>
                <div className="text-xl whitespace-nowrap font-bold text-green-700">
                  -10% OFF
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsSpeedometer className="my-1 mr-2" />54275 km
              </p>
            </div>
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <CgProfile className="my-1 mr-2" />1st Owner
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFuelPumpFill className="my-1 mr-2" />
                Petrol
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFillCarFrontFill className="my-1 mr-2" />
                DL
              </p>
            </div>
          </div>
        </div></div>
      </div></div><div className='m-2 mx-4 bg-gray-100 p-4 rounded-xl'><div>
        <div><img src='/carImages/car1.jpeg' className='rounded-xl'/></div>
        <div><div className="cursor-pointer">
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
                  <span className="font-semibold ml-2 line-through text-red-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                </div>
                <div className="text-xl whitespace-nowrap font-bold text-green-700">
                  -10% OFF
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsSpeedometer className="my-1 mr-2" />54275 km
              </p>
            </div>
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <CgProfile className="my-1 mr-2" />1st Owner
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFuelPumpFill className="my-1 mr-2" />
                Petrol
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFillCarFrontFill className="my-1 mr-2" />
                DL
              </p>
            </div>
          </div>
        </div></div>
      </div></div><div className='m-2 mx-4 bg-gray-100 p-4 rounded-xl'><div>
        <div><img src='/carImages/car1.jpeg' className='rounded-xl'/></div>
        <div><div className="cursor-pointer">
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
                  <span className="font-semibold ml-2 line-through text-red-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                </div>
                <div className="text-xl whitespace-nowrap font-bold text-green-700">
                  -10% OFF
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsSpeedometer className="my-1 mr-2" />54275 km
              </p>
            </div>
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <CgProfile className="my-1 mr-2" />1st Owner
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFuelPumpFill className="my-1 mr-2" />
                Petrol
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFillCarFrontFill className="my-1 mr-2" />
                DL
              </p>
            </div>
          </div>
        </div></div>
      </div></div><div className='m-2 mx-4 bg-gray-100 p-4 rounded-xl'><div>
        <div><img src='/carImages/car1.jpeg' className='rounded-xl'/></div>
        <div><div className="cursor-pointer">
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
                  <span className="font-semibold ml-2 line-through text-red-500"> ₹{(parseInt("1456444") + ((parseInt("1456444")) / 10)).toLocaleString("en-IN")} </span>
                </div>
                <div className="text-xl whitespace-nowrap font-bold text-green-700">
                  -10% OFF
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsSpeedometer className="my-1 mr-2" />54275 km
              </p>
            </div>
            <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <CgProfile className="my-1 mr-2" />1st Owner
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFuelPumpFill className="my-1 mr-2" />
                Petrol
              </p>
            </div>
            <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
              <p className="flex">
                <BsFillCarFrontFill className="my-1 mr-2" />
                DL
              </p>
            </div>
          </div>
        </div></div>
      </div></div>



    </Carousel>

  )
}

export default Related