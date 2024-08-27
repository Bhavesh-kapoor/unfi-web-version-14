import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  BsSpeedometer,
  BsFuelPumpFill,
  BsFillCarFrontFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import RingLoader from "react-spinners/RingLoader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const listing = () => {
  const [CarListing, setCarListing] = useState([]);

  const fetchCarList = async () => {
    const fecthCars = await fetch("https://crm.unificars.com/api/assured-cars")
    const jsonData = await fecthCars.json()
    if (jsonData.code == 200) {
      setCarListing(jsonData.data.auction)
      // console.log(jsonData.data.auction)
    }
  };


  useEffect(() => {
    fetchCarList()
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 my-4 m-auto  rounded-xl py-8">
        {CarListing && CarListing.length > 0 ? CarListing.map((car, index) => {
          return (
            <div className="bg-gray-100 shadow rounded-xl p-2 border-b-2 border-r-2 border-gray-300" key={index}>
              <div>
                {/* <Carousel
              showStatus={false}
              showArrows={true}
              autoPlay={false}
              swipeable={true}
              dynamicHeight={false}
              swipeScrollTolerance={50}
              preventMovementUntilSwipeScrollTolerance={true}
              emulateTouch={true}
            >
              {car&& car.lead.images? car.lead.images.map((image, index)=>{return(
              <div><Image
                src={image.image}
                alt={car.lead.brand}
                // className="rounded-xl"
                width={90}
                height={90}
               key={index}/></div>)}): <RingLoader color="#f38120" className=""/>}
            </Carousel> */}



                <Carousel
                  showStatus={false}
                  showArrows={true}
                  autoPlay={false}
                  swipeable={true}
                  dynamicHeight={true}
                  swipeScrollTolerance={50}
                  preventMovementUntilSwipeScrollTolerance={true}
                  emulateTouch={true}
                  renderThumbs={() =>
                    car.lead.images ? car.lead.images.map((img, idx) => (
                      <div key={idx} className="w-full rounded-xl h-10 relative">
                        <Image
                          src={img.image}
                          layout="fill"
                          objectFit="cover"
                          alt="logo"
                          priority={index == 0}
                        ></Image>
                      </div>
                    )) : <img/>
                  }
                >
                  {car.lead.images ? car.lead.images.map((img, idx) => (
                    <div   key={idx} className=""><Image
                      src={img.image}
                      // alt={`${product.title} preview ${idx}`}
                      style={{"borderRadius":"0.5rem"}}
                      width={800}
                      height={800}
                    ></Image></div>
                  )) : <img/>}
                </Carousel>








              </div>
              <div className="cursor-pointer">
                <div className="flex flex-col ">
                    <Link
                      href={`/cars/${car.lead.id}`}
                      className="my-2"
                    >
                  <h5 className="text-lg font-bold ">
                      {car.lead.brand} - {car.lead.model}
                    <p className="text-sm font-normal">VXI 1.2 Manual </p>
                  </h5>
                  <div className="flex justify-between">
                    <div>
                      <span className="whitespace-nowrap text-xl font-bold">
                        ₹ {(parseInt(car.lead.selling_amount)).toLocaleString("en-IN")}
                      </span>
                      <span className="font-semibold ml-2 line-through text-red-500"> ₹{(parseInt(car.lead.selling_amount) + ((parseInt(car.lead.selling_amount)) / 10)).toLocaleString("en-IN")} </span>
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
                      <BsSpeedometer className="my-1 mr-2" /> {((car.lead.km_driven).split(' '))[0]} km
                    </p>
                  </div>
                  <div className="bg-gray-200  p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
                    <p className="flex">
                      <CgProfile className="my-1 mr-2" />{((car.lead.ownership).split(" "))[0]}
                    </p>
                  </div>
                  <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
                    <p className="flex">
                      <BsFuelPumpFill className="my-1 mr-2" />
                      {car.lead.engine_type}
                    </p>
                  </div>
                  <div className="bg-gray-200 p-2 font-semibold rounded-xl hover:bg-orange-400 cursor-pointer hover:text-white transition-all duration-200">
                    <p className="flex">
                      <BsFillCarFrontFill className="my-1 mr-2" />
                      {car.lead.registration_in}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          )
        }) : (
          <div className="flex col-span-4 justify-center h-96 items-center w-11/12 my-8 bg-gray-100 m-auto rounded-xl">
            <div className="">
              <RingLoader color="#f38120" size={100} className="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default listing;
