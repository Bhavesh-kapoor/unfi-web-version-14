import Image from "next/image";
import React from "react";

const HowToSell = ({ hideText, processText, sellData }) => {
  return (
    <div className="relative container mx-auto px-4 my-12">
      {!hideText && (
        <>
          <div className="text-4xl min-w-[50] mx-auto md:px-6 px-2 order-last lg:order-first text-center mb-4">
            <h2 className="font-black">
              <span className="text-orange-500 sellheadfont">How</span>
              <span className="sellheadfont"> to Sell!</span>
            </h2>
          </div>
          <p className="text-center mb-4 hiwpara">
            Sell your Used Car in Three Simple Steps
          </p>
        </>
      )}
      {processText && (
        <div className="lg:px-20">
          <div className="min-w-[50] mx-auto md:px-6 px-2 order-last lg:order-first text-center mb-4">
            <h2 className="text-4xl mb-5 font-extrabold">
              Process of Selling a Used Car
            </h2>
          </div>
          <p className="text-center text-lg mb-5 mx-auto">
            Selling your car online gives peace of mind which offers a
            convenient and wide-reaching platform. You can take the help of some
            online websites that give you the instant quote of your car. To sell
            your car you can take the help of Unifi Cars. As we offer free
            inspections, instant price quotes, and handling all necessary
            paperwork which ensures a hassle-free experience.
          </p>
        </div>
      )}

      {!sellData && (
        <div className="flex lg:gap-6 md:flex-row flex-col w-full lg:px-10">
          <div className="relative text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg md:w-[45%] overflow-hidden">
            <Image
              width={100}
              height={100}
              src="/sell-fast.png"
              alt="Fast"
              className="absolute -top-5 -left-5 w-32"
            />
            <Image
              width={400}
              height={400}
              src="/carousel/carousel-new-1.png"
              className="img-fluid w-full object-cover h-80 md:h-48 lg:h-80 rounded-xl"
              alt="submit car details"
            />
            <div className="text-left space-y-2 lg:space-y-4 p-2 lg:p-4">
              <h3 className="text-xl md:text-lg lg:text-xl text-black font-bold mt-4 flex-none">
                SUBMIT YOUR CAR DETAILS
              </h3>
              <p className="text-lg">
                Provide simple details of your car like brand, model, year and
                mileage for accurate price.
              </p>
            </div>
          </div>

          <div className="relative text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg md:w-[45%] overflow-hidden">
            <Image
              width={100}
              height={100}
              src="/sell-fair.png"
              alt="fair"
              className="absolute -top-5 -left-5 w-32"
            />
            <Image
              src="/carousel/carousel-new-2.png"
              className="img-fluid w-full object-cover h-80 md:h-48 lg:h-80 rounded-xl"
              height={400}
              width={400}
              alt="car valuation"
            />
            <div className="text-left space-y-2 lg:space-y-4 p-2 lg:p-4">
              <h3 className="text-xl md:text-lg lg:text-xl text-black font-bold mt-4 flex-none">
                GET QUICK VALUATION
              </h3>
              <p className="text-lg">
                Our advance technology quickly analyze your car price and get
                the estimate value of your car.
              </p>
            </div>
          </div>

          <div
            className="relative text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg 
      md:w-[45%] overflow-hidden"
          >
            <Image
              width={100}
              height={100}
              src="/sell-done.png"
              className="absolute -top-5 -left-5 w-32"
              alt="sell done"
            />
            <Image
              width={400}
              height={400}
              src="/carousel/carousel-new-4.png"
              className="img-fluid w-full object-cover h-80 md:h-48 lg:h-80 rounded-xl"
              alt="payment methods"
            />
            <div className="text-left space-y-2 lg:space-y-4 p-2 lg:p-4">
              <h3 className="text-xl md:text-lg lg:text-xl text-black font-bold mt-4 flex-none">
                EASY PAYMENT METHODS
              </h3>
              <p className="text-lg">
                We Provide you online payment options according to your
                suitability after deal finalized
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 lg:px-10">
        {sellData &&
          sellData.length > 0 &&
          sellData.map((data, index) => {
            return (
              <div key={index} className="p-1 bg-orange-50/30 rounded-xl">
                <Image
                  width={400}
                  height={400}
                  unoptimized
                  priority
                  src={data?.imageUrl}
                  className="w-full object-contain"
                  alt="payment methods"
                />
                <div className="text-left space-y-2 lg:space-y-4 p-2 lg:p-4">
                  <h3 className="text-xl md:text-lg lg:text-xl text-black font-bold mt-4 flex-none">
                    {data?.title}
                  </h3>
                  <p className="">{data?.reason}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HowToSell;
