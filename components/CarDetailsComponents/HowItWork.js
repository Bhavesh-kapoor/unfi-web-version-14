import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const HowItWork = () => {
  return (
    <div className="py-10 text-center bg-gradient-radial from-white to-blue-50 text-gray-600">
      <div className="w-11/12 mx-auto">
        <div className="text-center my-8 font-normal text-xl">
          <span className="uppercase tracking-widest">
            Keys to cash Unlock the value of your car
          </span>
          <h2 className="text-4xl text-[#f38102] my-2">How It Works !</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="text-center flex flex-wrap justify-center">
            <img
              src="https://api.unificars.com/front/img/icon/hiw3.png"
              className="img-fluid"
              alt="howitworks"
              width="250px"
            />
            <div className="px-4">
              <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase mt-4 flex-none">
                Submit your car details{" "}
              </h4>
              <p className="mx-5 hiwpara">
                Provide simple details of your car like mobile number, year and
                mileage for accurate price.
              </p>
            </div>
          </div>
          <div className="text-center flex flex-wrap justify-center">
            <img
              src="https://api.unificars.com/front/img/icon/hiw2.png"
              className="img-fluid"
              alt="howitworks"
              width="250px"
            />
            <div className="px-4">
              <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">
                Get Quick Valuation
              </h4>
              <p className="mx-5 hiwpara">
                Our advance methods quickly analyse your car price and get the
                estimate value of your car.{" "}
              </p>
            </div>
          </div>
          <div className="text-center flex flex-wrap justify-center">
            <img
              src="https://api.unificars.com/front/img/icon/hiw1copy.png"
              className="img-fluid"
              alt="howitworks"
              width="250px"
            />
            <div className="px-4">
              <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">
                Easy Payment Methods{" "}
              </h4>
              <p className="mx-5 hiwpara">
                {" "}
                We Provide you online and cash payment options according to your
                suitablity.{" "}
              </p>
            </div>
          </div>
        </div>
        <button className="bg-blue-200 p-2 px-3 hover:animate-none animate-[bounce_1s_ease-in-out_infinite] font-medium text-lg text-blue-900 rounded-full mt-5">
          <span className="flex">
            <Link href={"/buy-used-cars"}> Buy a Car</Link>
            <AiOutlineArrowRight className="flex-none ml-2 my-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HowItWork;
