import React from "react";

const SelectFuel = ({ setCarInfo, carInfo, value, setValue }) => {
  const Fuel = ["PETROL", "DIESEL", "CNG"];

  const handleClick = (e) => {
    setCarInfo({ ...carInfo, fuelType: e });
    setValue(parseInt(value) + 1 + "");
  };
  return (
    <div className="flex flex-wrap mx-auto gap-4">
      <p className="w-full text-lg mb-2">Select a fuel type for next step</p>
      {Fuel.length > 0 ? (
        Fuel.map((e, index) => {
          return (
            <div
              onClick={() => handleClick(e)}
              className="shadow-md p-2 px-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded-lg"
              key={index}>
              <div className="text-base">{e} </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default SelectFuel;
