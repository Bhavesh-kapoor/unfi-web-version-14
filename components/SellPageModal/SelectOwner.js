import React from "react";

const SelectOwner = ({ setCarInfo, carInfo, value, setValue }) => {
  const Owner = [1, 2, 3, 4];

  const handleClick = (e) => {
    setCarInfo({ ...carInfo, ownerShip: e });
    setValue(parseInt(value) + 1 + "");
  };

  return (
    <div className="flex flex-wrap mx-auto gap-4">
      <p className="w-full text-lg mb-2">Select an owner for next step</p>
      {Owner.length > 0 ? (
        Owner.map((e, index) => {
          return (
            <div
              onClick={() => handleClick(e)}
              className="shadow-md p-2 px-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded-lg"
              key={index}>
              <div className="text-base"> {e} Ownership </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default SelectOwner;
