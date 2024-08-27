import React from "react";
import { BiCalendar, BiUser, BiSolidColorFill } from "react-icons/bi";
import { BsFillFuelPumpFill, BsCarFront, BsKey } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { GrDocumentVerified } from "react-icons/gr";
import { FaCogs } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";
import { IoLogoModelS } from "react-icons/io";
import {
  CalenderIcon,
  CarFront,
  FileCheck,
  FuelIcon,
  GearIcon,
  KeyIcon,
  MeterIcon,
  PaintIcon,
  StarIcon,
  UserIcon,
} from "@/common/IconsSvg";

const CarDetailTable = (props) => {
  const { CarDetails } = props;
  // console.log("form Car details Table", CarDetails);

  return (
    <div>
      <h2 className="py-4 text-2xl font-black">Car overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4 bg-white rounded-xl opacity-80 carousel-item">
        {/* <div className='flex'>
                    <div><FaHashtag className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 '>
                        <div className='text-sm font-black text-gray-600'>Car ID</div>
                        <div className='font-black  text-black'>{CarDetails[0].unique_code}</div>
                    </div>
                </div> */}
        <div className="flex">
          <div>
            <CalenderIcon className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">
              Registration Year
            </div>
            <div className="font-black  text-black">
              {/* {CarDetails[0].Model} */}
              {CarDetails[0].registration_year}
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <UserIcon className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">Ownership</div>
            <div className="font-black  text-black">
              {CarDetails[0].Ownership}
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <MeterIcon className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">Km Driven</div>
            <div className="font-black  text-black">
              {CarDetails[0]["Km Driven"]}
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <FuelIcon className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">Fuel Type</div>
            <div className="font-black  text-black">
              {CarDetails[0]["Fuel Type"]}
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <CarFront className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">
              Registration In
            </div>
            <div className="font-black  text-black">
              {/* {CarDetails[0]["Registration In"].slice(0, 2)} */}
              {CarDetails[0]["Registration In"]}
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <PaintIcon className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">Colour</div>
            <div className="font-black  text-black">{CarDetails[0].Colour}</div>
          </div>
        </div>

        <div className="flex">
          <div>
            <FileCheck className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">Insurance</div>
            <div className="font-black  text-black">Comprehensive</div>
          </div>
        </div>

        <div className="flex">
          <div>
            <GearIcon className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">Transmission</div>
            <div className="font-black  text-black">
              {CarDetails[0].transmission}
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <KeyIcon className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">Spare Key</div>
            <div className="font-black  text-black">YES</div>
          </div>
        </div>

        <div className="flex">
          <div>
            <CarFront className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">Car Model</div>
            <div className="font-black  text-black"> {CarDetails[0].Model}</div>
          </div>
        </div>

        <div className="flex">
          <div>
            <StarIcon className="flex-none mr-2 my-1 p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-black text-gray-600">
              Engine Rating
            </div>
            <div className="font-black  text-black">
              {CarDetails[0].engine_rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailTable;
