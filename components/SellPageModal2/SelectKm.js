import React from "react";

const SelectKm = ({
  setCarInfo,
  carInfo,
  value,
  setValue,
  carNumber,
  setScreen,
}) => {
  const Km = [
    "below 10,000km",
    "10,000 - 20,000km",
    "20,000 - 40,000km",
    "40,000 - 70,000km",
    "70,000 - 1,20,000km",
    "1,20,000 - 1,40,000km",
    "above 1,40,000km",
  ];

  const handleClick = (e) => {
    setCarInfo({ ...carInfo, kmDriven: e });

    if (carNumber === "") {
      setValue(parseInt(value) + 1 + "");
    } else {
      setScreen(3);
    }
  };
  return (
    <div className="flex flex-wrap mx-auto gap-4 ">
      {Km.length > 0 ? (
        Km.map((e, index) => {
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

export default SelectKm;
