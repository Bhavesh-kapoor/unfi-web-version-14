import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const SelectStates = ({ setCarInfo, carInfo, setValue, value, setScreen }) => {
  const [States, setStates] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchBrands = async () => {
    setLoading(true);
    try {
      const fetchBrand = await fetch("https://api.unificars.com/api/states", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      const jsonRes = await fetchBrand.json();
      if (jsonRes.code == 200) {
        setStates(jsonRes.data);
        setLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  // { setUserCar({ ...UserCar, location:e.statename});setOpenModal(false); UserCarTabArray[6] = e.statename; setCurrentTab("7"); setVerifyNum(true) }
  const handleClick = (e) => {
    setCarInfo({ ...carInfo, location: e.statename });
    setScreen(3);
  };
  return (
    <>
      {!Loading ? (
        <div className="flex flex-wrap items-center gap-4">
          <p className="w-full text-lg mb-2">Select a state for next step</p>
          {States.length > 0 ? (
            States.map((e, index) => {
              return (
                <div
                  onClick={() => handleClick(e)}
                  className="shadow-md p-2 px-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded-lg"
                  key={index}>
                  <div className="text-sm">{e.statename} </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img src="../logo.png" className="h-20 animate-bounce  mx-auto" />
          <BarLoader color="#f38120" width={100} className="mx-auto" />
        </div>
      )}
    </>
  );
};

export default SelectStates;
