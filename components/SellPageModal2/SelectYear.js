import React from "react";

const SelectYear = ({ setCarInfo, carInfo, value, setValue }) => {
  const date = new Date();
  const Year = [];
  const CurrentYear = date.getFullYear();

  for (let i = 0; i < 17; i++) {
    Year.push(CurrentYear - i);
  }

  // onClick={() => { setUserCar({ ...UserCar, year: e }); UserCarTabArray[3] = e; setCurrentTab("4") }}

  const handleClick = (e) => {
    setCarInfo({ ...carInfo, year: e });
    setValue(parseInt(value) + 1 + "");
  };
  return (
    <div className="flex flex-wrap mx-auto gap-4 ">
      {Year.length > 0 ? (
        Year.map((e, index) => {
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

export default SelectYear;
