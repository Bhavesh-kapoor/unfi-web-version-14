import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import BarLoader from "react-spinners/BarLoader";
import Rating from "../Rating";
const FeaturedCars = ({
  carListing,
  gridView,
  loading,
  imageLink,
  assured,
  folder,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <h3 className="md:px-10 text-2xl text-[#000] font-black my-2 buyh1fontfamily">
        Unifi Featured Cars
      </h3>

      <div className="grid md:px-6 transition-all duration-800 z-10 p-2 pt-0 lg:px-8">
        {!loading ? (
          carListing && carListing.length > 0 ? (
            <Carousel
              responsive={responsive}
              arrows={true}
              autoPlay={false}
              customTransition="transform 500ms ease-in-out"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              infinite={true}
            >
              {carListing.map((car, index) => (
                <div
                  key={index}
                  id="carList"
                  className="p-3 bg-white ease-in-out duration-400 transition-all border-gray-400/10 rounded-xl"
                >
                  <div>
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
                    >
                      <div>
                        {car.lead.images && car.lead.images.length > 0 && (
                          <Image
                            src={car.lead.images[0].image}
                            width={800}
                            height={800}
                            priority={1}
                            alt={`${car.lead.brand.replace(
                              / /g,
                              "_"
                            )}-${car.lead.varient.replace(
                              / /g,
                              "_"
                            )}-${car.lead.model
                              .split(" ")
                              .join("")}-${car.lead.registration_in
                              .replace(/ /g, "_")
                              .slice(0, 2)}`}
                            className="rounded-12"
                            style={{
                              borderRadius: "0.1rem",
                              height: "230px",
                              objectFit: "cover",
                            }}
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                  <div className="changecartext">
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
                        <p className="text-[12px] md:text-sm text-white/100">
                          Unifi Rating
                        </p>
                        <Rating
                          defaultValue={parseInt(car.lead.engine_rating)}
                        />
                        {/* <div className=''><a onClick={() => setIsOpen(true)}><img width="70" src="/assured.png" alt="info--v1"/></a></div> */}
                      </div>
                      <div className="relative">
                        <h4 className="text-sm mt-2 md:text-base " limit={10}>
                          {car.lead.model} {car.lead.brand}
                        </h4>
                        <p className="text-xs md:text-sm font-normal text-black/80">
                          {car.lead.varient}
                        </p>
                        <div className="pt-1 flex lg:items-center justify-between flex-col lg:flex-row">
                          <p>
                            ₹{" "}
                            {parseInt(car.lead.selling_amount).toLocaleString(
                              "en-IN"
                            )}
                          </p>
                          <div className="">
                            <img
                              src={`/${imageLink}.png`}
                              className="w-36 -mx-4 lg:mx-0"
                            />
                          </div>
                        </div>
                        {/* <div className='pt-1 flex lg:items-center justify-between flex-col lg:flex-row'>
                                                        <p>₹ {(parseInt(car.lead.selling_amount)).toLocaleString("en-IN")}</p>
                                                        <div className=''><img src={`/${imageLink}.png`} className='w-36 -mx-4 lg:mx-0' /></div>
                                                    </div> */}
                      </div>
                    </Link>
                    {parseInt(car.lead.refurbished_price) ? (
                      <div className="relative">
                        <div className="flex lg:items-center justify-between flex-col lg:flex-row">
                          <p>
                            ₹{" "}
                            {parseInt(
                              car.lead.refurbished_price
                            ).toLocaleString("en-IN")}
                          </p>
                          <div className="">
                            <a
                              onClick={() => setIsOpen(true)}
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                width="122"
                                src="/assured.png"
                                alt="info--v1"
                                style={{ marginRight: "15px" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

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
                      className="md:px-2"
                    >
                      <div
                        className="flex gap-4 justify-between text-white/100 text-[10px] md:text-sm"
                        style={{ marginTop: "-15px" }}
                      >
                        <p>
                          <span style={{ display: "flex" }}>
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/ios/20/ffffff/speed--v1.png"
                              alt="speed--v1"
                            />
                            &nbsp;&nbsp;&nbsp;{car.lead.km_driven.split(" ")[0]}{" "}
                            km
                          </span>
                        </p>
                        <p>
                          <span style={{ display: "flex" }}>
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/ios/20/ffffff/user--v1.png"
                              alt="user--v1"
                            />
                            &nbsp;&nbsp;&nbsp;{car.lead.ownership.split(" ")[0]}
                          </span>
                        </p>
                        <p>
                          <span style={{ display: "flex" }}>
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/ios/20/ffffff/petrol.png"
                              alt="petrol"
                            />
                            &nbsp;&nbsp;&nbsp;{car.lead.engine_type}
                          </span>
                        </p>
                        <p>
                          <span style={{ display: "flex" }}>
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/windows/ffffff/20/sign-document.png"
                              alt="sign-document"
                            />
                            &nbsp;&nbsp;&nbsp;
                            {car.lead.registration_in.slice(0, 2)}
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            <p>No Cars Found</p>
          )
        ) : (
          <div className="flex-col col-span-8 h-72 py-40 justify-center items-center">
            <img
              src="../logo.png"
              className="h-20 animate-bounce mx-auto"
              alt="logo"
            />
            <BarLoader color="#f38120" width={100} className="mx-auto" />
          </div>
        )}
      </div>
    </>
  );
};

export default FeaturedCars;
