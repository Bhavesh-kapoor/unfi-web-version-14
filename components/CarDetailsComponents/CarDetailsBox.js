import React from "react";
import Link from "next/link";
import {
  CarFront,
  FacebookIcon,
  FuelIcon,
  GearIcon,
  InstagramIcon,
  MeterIcon,
  UserIcon,
  WhatsAppIcon,
} from "@/common/IconsSvg";

const CarDetailsBox = (props) => {
  const { car, showModal, setShowModal, setShowEnquiryModal, id } = props;

  return (
    <div className="p-4 mx-4 bg-white rounded-xl lg:mx-0 font-light carousel-item">
      <div>
        <h1 className="font-black text-3xl font-sans mb-1 tracking-wide">
          {car && car.lead ? car.lead[0]["Model"] : ""}{" "}
          {car && car.lead ? car.lead[0]["Brand"] : "Brand"}
        </h1>
        <p className="text-xs mb-2 text-black/70">
          {car && car.lead ? car.lead[0].varient : ""}
        </p>
        {/* <span className="font-semibold text-base text-black/90">
          ₹{" "}
          {car && car.lead
            ? parseInt(car.lead[0]["Amount"]).toLocaleString("en-IN")
            : "..."}
        </span>
        <br /> */}
      </div>
      {/* <hr className="mt-2" /> */}
      <div className="flex flex-wrap justify-start gap-2 my-4 text-black/80 text-sm">
        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <MeterIcon className="p-1" />
          {parseInt(car.lead[0]["Km Driven"]).toLocaleString("en-IN")} KM
        </div>

        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <UserIcon className="p-1" />
          {car.lead[0]["Ownership"].split(" ")[0]} Owner
        </div>

        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <GearIcon className="p-1" />
          {car.lead[0]["transmission"]}
        </div>

        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <FuelIcon className="p-1" />
          {car.lead[0]["Fuel Type"]}
        </div>

        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <CarFront className="p-1" />
          {car.lead[0]["Registration In"]}
        </div>
      </div>
      {/* <div className="flex flex-col gap-3 text-sm border-b-2 p-2">
        <div className="flex items-center">
          <BsCashCoin className="mr-2 text-[#f38102]" />
          <p className="font-semibold tracking-wider">Free Rc transfer</p>
        </div>
        <div className="flex items-center">
          <TiTick className="mr-2 text-[#f38102]" />
          <p className="font-semibold tracking-wider">
            Hassle free documentation
          </p>
        </div>
        <div className="flex items-center">
          <BsCardChecklist className="mr-2 text-[#f38102]" />
          <p className="font-semibold tracking-wider">210+ point inspected</p>
        </div>
        <div className="cursor-pointer text-[green] hover:text-green-600 active:text-green-700">
          <a
            className="flex items-center"
            href={`https://wa.me/+919911771977?text=Hey Unificars  I want to buy ${car.lead[0].Brand} ${car.lead[0].Colour} ${car.lead[0].Model} ${car.lead[0].Ownership} containing ${car.lead[0].unique_code}`}
            target="_blank">
            <BsWhatsapp className="mr-2" />
            <p className="font-semibold tracking-wider">
              Connect on Whatsapp
            </p>{" "}
            <AiOutlineArrowRight className="my-1 mx-1" />
          </a>
        </div>
      </div> */}

      <div className="my-6">
        <span className="font-black text-3xl text-black/90">
          ₹{" "}
          {car && car.lead
            ? parseInt(car.lead[0]["refurbished_price"]).toLocaleString("en-IN")
            : "..."}
        </span>
      </div>

      <div>
        <p className="font-bold text-xl">What you get</p>
        <ul className="list-disc py-2 font-medium opacity-80 ps-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <li>Free ownership transfer</li>
          <li>Free Accessories upto 10k</li>
          <li>Comprehensive insurance</li>
          <li>Pollution certificate</li>
          <li>
            Complete warranty upto 2,000 km or upto 30 days which ever comes
            first.
          </li>
        </ul>
      </div>

      <div className="flex gap-4 text-center my-4">
        <button
          className="transition-all hover:scale-105 duration-200 px-2 w-full bg-blue-500 text-white font-bold hover:text-white shadow rounded-lg"
          onClick={() => setShowModal(!showModal)}
        >
          <p className="tracking-widest">View Car Report</p>
        </button>

        <button
          className="transition-all hover:scale-105 w-full duration-200 p-2 bg-green-500 text-white font-bold shadow rounded-lg"
          onClick={() => setShowEnquiryModal(true)}
        >
          <div>
            <p className="text-base tracking-widest">Enquiry Now</p>
            {/* <p className="text-[10px] p-0">100% Refundable</p> */}
          </div>
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <p className="font-bold text-xl">Share With Friends :</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://api.whatsapp.com/send?phone=919911771977&text=Hi, I want to chat"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="text-green-500 text-2xl" />
          </Link>

          <Link
            href="https://www.instagram.com/unificars/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="text-red-500 text-2xl" />
          </Link>

          <Link
            href="https://www.facebook.com/UnifiCars/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="text-blue-500 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsBox;
