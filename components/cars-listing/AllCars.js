import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

import Rating from "../Rating";
import {
  CarFront,
  MeterIcon,
  UserIcon,
  FuelIcon,
  InfoIcon,
} from "@/common/IconsSvg";
import FeaturedCars from "../FeaturedCars";

const responsiveCarouselConfig = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const AllCars = ({
  carListing,
  gridView,
  imageLink,
  assured,
  folder,
  featuredlist,
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      {/* Uncomment this section if you want to show FeaturedCars */}
      {/* 
      <h3 className="md:px-20 px-6 text-2xl text-[#000] font-black my-2 buyh1fontfamily">
        Featured Cars
      </h3>
      <div className="md:px-4">
        <FeaturedCars featuredlist={featuredlist} desktopItemNum={3} />
      </div> 
      */}

      <div className="my-8">
        <h3 className="md:px-20 px-6 text-2xl text-[#000] font-black my-2 buyh1fontfamily">
          All Cars
        </h3>

        <div
          className={`grid md:px-20 transition-all duration-800 ${
            gridView
              ? "sm:grid-cols-2 md:gap-4 md:rounded-xl md:justify-center  md:grid-cols-3 lg:grid-cols-3 lg:rounded-xl lg:justify-center lg:gap-8"
              : "grid-cols-1 gap-2 md:grid-cols-2"
          } z-10 gap-2 p-2 pt-0`}
        >
          {carListing && carListing.length > 0 ? (
            carListing.map((car, index) => (
              <div
                key={index}
                id="carList"
                className={`group/link duration-400 transition-all shadow-sm border-2 border-gray-400/10 rounded-3xl ${
                  gridView ? "" : "grid grid-cols-2 gap-4 items-center"
                }`}
              >
                <Link
                  href={{
                    pathname: `/cars/${car.lead.brand.replace(
                      / /g,
                      "_"
                    )}-${car.lead.varient.replace(/ /g, "_")}-${car.lead.model
                      .split(" ")
                      .join("")}-${car.lead.registration_in
                      .replace(/ /g, "_")
                      .slice(0, 2)}`.toLowerCase(),
                    query: { id: car.lead.id, assured: assured },
                  }}
                >
                  <Image
                    className="rounded-12"
                    src={car?.lead?.images[0]?.image}
                    width={400}
                    height={800}
                    priority={1}
                    alt={`${car.lead.brand} ${car.lead.model}`}
                  />
                </Link>
                {/*<Carousel
                  responsive={responsiveCarouselConfig}
                  infinite
                  autoPlay
                  autoPlaySpeed={3000}
                  keyBoardControl
                  showDots={false}
                  containerClass="carousel-container"
                  itemClass="carousel-item-padding-40-px"
                >
                  {car.lead.images &&
                    car.lead.images.map((img, idx) => (
                      <Link
                        href={{
                          pathname: `/cars/${car.lead.brand.replace(
                            / /g,
                            "_"
                          )}-${car.lead.varient.replace(
                            / /g,
                            "_"
                          )}-${car.lead.model
                            .split(" ")
                            .join("")}-${car.lead.registration_in
                            .replace(/ /g, "_")
                            .slice(0, 2)}`.toLowerCase(),
                          query: { id: car.lead.id, assured: assured },
                        }}
                        key={idx}
                      >
                        <Image
                          className="rounded-12"
                          src={img.image}
                          width={800}
                          height={800}
                          priority={1}
                          alt={`${car.lead.brand} ${car.lead.model}`}
                        />
                      </Link>
                    ))}
                </Carousel>*/}
                <div className="changeallcartext">
                  <Link
                    href={{
                      pathname: `/cars/${car.lead.brand
                        .replace(/ /g, "_")
                        .toLowerCase()}-${car.lead.varient
                        .replace(/ /g, "_")
                        .toLowerCase()}-${car.lead.model
                        .split(" ")
                        .join("")
                        .toLowerCase()}-${car.lead.registration_in
                        .replace(/ /g, "_")
                        .slice(0, 2)
                        .toLowerCase()}`,
                      query: { id: car.lead.id, assured: assured },
                    }}
                    className=""
                  >
                    <div className="justify-start items-center">
                      <p className="text-[12px] md:text-sm text-black/100 font-medium font-sans">
                        Unifi Rating
                      </p>
                      <Rating defaultValue={parseInt(car.lead.engine_rating)} />
                    </div>

                    <div className="relative">
                      <h4 className="text-md font-black my-2 font-sans text-start">
                        {car.lead.brand}
                      </h4>
                      <p className="mb-4 md:text-sm text-start space-x-2">
                        <span>{car.lead.model}</span>
                        <span>•</span>
                        <span>{car.lead.transmission}</span>
                      </p>
                    </div>
                  </Link>

                  <Link
                    href={{
                      pathname: `/cars/${car.lead.brand
                        .replace(/ /g, "_")
                        .toLowerCase()}-${car.lead.varient
                        .replace(/ /g, "_")
                        .toLowerCase()}-${car.lead.model
                        .split(" ")
                        .join("")
                        .toLowerCase()}-${car.lead.registration_in
                        .replace(/ /g, "_")
                        .slice(0, 2)
                        .toLowerCase()}`,
                      query: { id: car.lead.id, assured: assured },
                    }}
                  >
                    <div className="flex flex-wrap gap-2 text-xs mt-2">
                      <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <FuelIcon className="p-1" />
                        <span>{car.lead.engine_type}</span>
                      </div>

                      <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <MeterIcon className="p-1" />
                        <span>
                          {parseInt(
                            car.lead.km_driven.split(" ")[0]
                          ).toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <CarFront className="p-1" />
                        <span>{car.lead.registration_in}</span>
                      </div>

                      <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <UserIcon className="p-1" />
                        <span>{car.lead.ownership.split(" ")[0]} Owner</span>
                      </div>
                    </div>

                    <div className="relative pt-4 flex flex-wrap-reverse gap-1 lg:items-center flex-row lg:flex-row my-2">
                      <p className="font-bold font-sans px-2">
                        ₹{" "}
                        {parseInt(car.lead.selling_amount).toLocaleString(
                          "en-IN"
                        )}
                      </p>

                      <div
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <InfoIcon className="hidden lg:block fill-blue-500 text-white text-xl relative" />

                        {hoveredItem === index && (
                          <div className="bg-white p-4 shadow-lg rounded-2xl absolute bottom-10 z-10 w-full left-0">
                            <ul className="list-disc ps-6">
                              <li>Free ownership transfer</li>
                              <li>Free accessories</li>
                              <li>Comprehensive insurance</li>
                              <li>Certificate pollution certificate</li>
                              <li>
                                Complete warranty up to 2,000 km or 30 days,
                                whichever comes first.
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { gridView, assured, folder } = context.query;

  const res = await fetch(
    `https://api.yourservice.com/cars?assured=${assured}`
  );
  const carListing = await res.json();

  return {
    props: {
      carListing,
      gridView: gridView === "true",
      imageLink: "image-link-placeholder",
      assured: assured || null,
      folder: folder || "default-folder",
    },
  };
}

export default AllCars;
