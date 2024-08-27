import React from "react";

const SelectOwner = ({ setCarInfo, carInfo, value, setValue }) => {
  const Owner = [1, 2, 3, 4];

  const handleClick = (e) => {
    setCarInfo({ ...carInfo, ownerShip: e });
    setValue(parseInt(value) + 1 + "");
  };
  
  return (
    <div className="grid grid-cols-2 mx-auto gap-4 ">
      {Owner.length > 0 ? (
        Owner.map((e, index) => {
          return (
            <div
              onClick={() => handleClick(e)}
              className="col-span-1 shadow-md border p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded flex items-center justify-center"
              key={index}
            >
              <div className='text-base'> {e} Ownership </div>
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
