import Link from "next/link";
import React, { useEffect, useState } from "react";
import FeaturedCars from "../FeaturedCars";
import Image from "next/image";

const Buycar = () => {
  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const response = await fetch(
          "https://crm.unificars.com/api/featuredcars",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch featured cars");
        }

        const data = await response.json();

        setFeaturedCars(data.data || []);
      } catch (error) {
        console.error("Error fetching featured cars:", error);
      }
    };

    fetchFeaturedCars();
  }, []);

  return (
    <div className="my-6 text-center text-gray-600">
      <div className="mx-auto space-y-6 w-[95%]">
        <div className="text-center font-normal text-xl">
          <h3 className="text-[#000] font-black text-center sellheadfont">
            Why Buy Car From Us
          </h3>
          {/* <span className="uppercase tracking-widest">
            Keys to cash Unlock the value of your car
          </span> */}
        </div>
        <div className="flex gap-6 lg:flex-row flex-col h-full md:w-[90%] mx-auto">
          <Link href="/buy-used-cars" className="w-full">
            <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg">
              <Image
                width={400}
                height={400}
                src="/carousel/used-car-1.png"
                className="img-fluid w-full h-80 object-cover rounded-lg"
                alt="200 point inspection report"
              />
              <div className="text-left space-y-4 py-4">
                <h4 className="text-xl text-black font-black tracking-widest mt-4 flex-none buyh4">
                  210 point Inspection report
                </h4>
                <p className="text-lg">
                  Unifi Cars believes in providing better deal for our users
                  with 210-point inspection report.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/buy-used-cars" className="w-full">
            <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg">
              <Image
                width={400}
                height={400}
                src="/carousel/used-car-2.png"
                className="img-fluid w-full h-80 object-cover rounded-lg"
                alt="2000 km engine warranty"
              />
              <div className="text-left space-y-4 py-4">
                <h4 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4">
                  2000 km engine warranty
                </h4>
                <p className="text-lg">
                  We assure your journey with upto 2000 km engine warranty with
                  us.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/buy-used-cars" className="w-full">
            <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg">
              <Image
                width={400}
                height={400}
                src="/carousel/used-car-3.png"
                className="img-fluid w-full h-80 object-cover rounded-lg"
                alt="free accessories worth 10k"
              />
              <div className="text-left space-y-4 py-4">
                <h4 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4">
                  Free accessories worth ₹10k
                </h4>
                <p className="text-lg">
                  On your purchase from Unifi Cars we provide free accessories
                  worth upto 10K.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/buy-used-cars" className="w-full">
            <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg">
              <Image
                width={400}
                height={400}
                src="/carousel/used-car-4.png"
                className="img-fluid w-full h-80 object-cover rounded-lg"
                alt="first service free"
              />
              <div className="text-left space-y-4 py-4">
                <h4 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4">
                  First service free with Unifi Cars
                </h4>
                <p className="text-lg">
                  We provide first free car service for our buyers i.e. car
                  servicing, washing etc. 
                  <br />
                  &nbsp;
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/*        <div className="py-8 space-y-6">
          <h2 className="text-[#000] font-black text-center sellheadfont">
            Featured Cars
          </h2>

          <FeaturedCars featuredlist={featuredCars} desktopItemNum={4} />
        </div>*/}

        <Link href="/buy-used-cars" className="w-full">
          <button className="bg-orange-500 text-white mt-6 px-4 py-1 text-2xl rounded-lg hover:bg-orange-600 browsbtn border">
            Browse Car
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Buycar;
