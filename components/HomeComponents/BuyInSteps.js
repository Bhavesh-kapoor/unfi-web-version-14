import Link from "next/link";
import React from "react";
import { BsFillCarFrontFill, BsKeyFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePayments } from "react-icons/md";
import { HiDocumentDuplicate } from "react-icons/hi";

const BuyInSteps = () => {
  return (
    <div className="bg-blue-50 p-8">
      <div className="w-5/6 mx-auto">
        <h3 className="text-4xl text-blue-900">Buy Car In Just 4 Easy Steps</h3>
        <section className="text-gray-600 body-font">
          <div className="container my-4 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                    <BsFillCarFrontFill className="text-white" />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-gray-900 mb-1 tracking-wider  text-lg">
                      STEP 1{" "}
                      <span className="text-blue-900 ml-2">
                        Find Car On{" "}
                        <Link href={"/"} className="text-orange-500">
                          Unifi Cars
                        </Link>
                      </span>
                    </h2>
                    <p className="leading-relaxed">
                      All cars have passed a 1500+ point inspection with
                      registration included
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                    <SlCalender />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-gray-900 mb-1 tracking-wider  text-lg">
                      STEP 2{" "}
                      <span className="text-blue-900 ml-2">
                        Schedule Test Drive
                      </span>
                    </h2>
                    <p className="leading-relaxed">
                      Let's schedule a meeting to discuss car buying through
                      Cars Unifi Cars. Please provide your preferred date and
                      time.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                    <MdOutlinePayments />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-gray-900 mb-1 tracking-wider  text-lg">
                      STEP 3 <span className="text-blue-900 ml-2">Payment</span>
                    </h2>
                    <p className="leading-relaxed">
                      Pay outright, or apply for a loan, all online with no
                      paperwork
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                    <HiDocumentDuplicate />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-gray-900 mb-1 tracking-wider  text-lg">
                      STEP 4{" "}
                      <span className="text-blue-900 ml-2">RC Transfer</span>
                    </h2>
                    <p className="leading-relaxed">
                      We Provide A free RC Transfer
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                    <BsKeyFill />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      FINISH
                    </h2>
                    <p className="leading-relaxed text-blue-900 text-lg">
                      Enjoy Your Ride
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 opacity-90 shadow-lg"
                src="https://api.unificars.com/front/img/images/abtimg22.jpg"
                alt="step"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BuyInSteps;
