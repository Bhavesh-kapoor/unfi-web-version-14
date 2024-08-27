import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCarousel = () => {
  // const [showImages, setShowImages] = useState(false);

  // useEffect(() => {
  //     setShowImages(true);
  // }, []);

  // const scrollToPopularBrands = () => {
  //     const popularBrandsSection = document.getElementById('popularBrands');
  //     if (popularBrandsSection) {
  //         window.scrollTo({
  //             top: popularBrandsSection.offsetTop,
  //             behavior: 'smooth',
  //         });
  //     }
  // };

  return (
    <div className="cursor-pointer relative overflow-hidden">
      {/* For larger screens */}
      <div className="hidden md:flex relative w-full h-[35rem]">
        {/* Text section */}
        <div
          className={`absolute left-0 top-0 w-1/2 h-full bg-white bg-opacity-80 px-20 z-10 flex flex-col justify-center `}>
          <Carousel
            className=""
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay>
            <div>
              <h1 className="text-5xl font-bold mb-4 banheadfont">
                Choose Reliability, Choose Your New Car.
              </h1>
              <p className="text-lg mb-4 text-left font-sans">
                Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                Assured Cars
              </p>
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 font-sans"
                style={{ width: "fit-content", float: "left" }}>
                Buy Car
              </button>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 banheadfont">
                Fast. Fair. Done. Sell Your Car with Unifi.
              </h1>
              <p className="text-lg mb-4 text-left font-sans">
                Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                Assured Cars
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-sans"
                style={{ width: "fit-content", float: "left" }}>
                Sell Car
              </button>
            </div>
          </Carousel>
        </div>
        {/* Image section */}
        <div className="w-full flex justify-center items-center bg-[#fffde7]">
          <img
            src="/homecar.png"
            className={`object-contain`}
            alt="Car Image"
            style={{ width: "70%" }}
          />
        </div>
      </div>

      {/* For smaller screens */}
      <div className={`md:hidden `}>
        <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
          <div className="relative">
            <img
              src="/homecar.png"
              className="w-full object-cover"
              style={{ height: "400px" }}
              alt="Car Image"
            />
            <div className="absolute left-0 top-0 w-1/2 h-full text-black p-5 flex flex-col justify-center w-full z-10">
              <h1 className="text-3xl mb-2 font-bold">
                Choose Reliability, Choose Your New Car.
              </h1>
              <p className="text-sm mb-2">
                Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                Assured Cars
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Buy Car
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/homecar.png"
              className="w-full object-cover"
              style={{ height: "400px" }}
              alt="Car Image"
            />
            <div className="absolute left-0 top-0 h-full text-black p-5 flex flex-col justify-center w-full z-10">
              <h1 className="text-3xl mb-2 font-bold">
                Fast. Fair. Done. Sell Your Car with Unifi.
              </h1>
              <p className="text-sm mb-2">
                Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                Assured Cars
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sell Car
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BannerCarousel;
