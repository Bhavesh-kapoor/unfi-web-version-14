import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const MoblieCarDetailsHeader = (props) => {
  const { car, setShowEnquiryModal } = props;
  return (
    <div className="grid grid-cols-1 justify-around">
      {car ? (
        <>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-black/80 text-base font-bold mb-1">
                {car && car.lead ? car.lead[0]["Brand"] : ""}{" "}
              </h1>
              <p className="text-xs mb-2 text-black/70">
                {car && car.lead ? car.lead[0].varient : ""}
              </p>
            </div>
            <div className="text-end text-black/80 text-base pr-2">
              ₹
              {car && car.lead
                ? parseInt(car.lead[0]["refurbished_price"]).toLocaleString("en-IN")
                : "..."}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2 col-span-2 text-xs text-black/70">
              <p>{car && car.lead ? car.lead[0]["Model"] : ""}</p>
              <p>{car.lead[0]["Km Driven"]}</p>
              <p> {car.lead[0]["Registration In"].slice(0, 2)}</p>
              <p>{car.lead[0]["Fuel Type"]}</p>
            </div>
            <div>
              <button
                className="flex text-[#f38102] border-[1px] border-[#f38102] text-xs active:text-white active:bg-[#f38102]  p-2 focus:outline-none items-center rounded-xl"
                onClick={() => setShowEnquiryModal(true)}>
                <p>ENQUIRE</p> <AiOutlineArrowRight className="mx-1" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MoblieCarDetailsHeader;
