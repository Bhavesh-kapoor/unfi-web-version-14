import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const SelectVariant = ({ setCarInfo, carInfo, value, setValue }) => {
  const [BrandsModelVareints, setBrandsModelVareints] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchBrands = async () => {
    const data = { modal_id: carInfo.model.id };
    setLoading(true);
    try {
      const fetchBrand = await fetch(
        "https://api.unificars.com/api/getvarientofmodel",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const jsonRes = await fetchBrand.json();
      if (jsonRes.code == 200) {
        setBrandsModelVareints(jsonRes.data);
        setLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleClick = (varient) => {
    setCarInfo({
      ...carInfo,
      variant: { id: varient.id, name: varient.varient },
    });
    setValue(parseInt(value) + 1 + "");
  };

  return (
    <>
      {!Loading ? (
        <div className="flex flex-wrap mx-auto gap-4 ">
          {BrandsModelVareints.length > 0 ? (
            BrandsModelVareints.map((e, index) => {
              return (
                <div
                  onClick={() => handleClick(e)}
                  className="shadow-md p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded-lg"
                  key={index}>
                  <div className="text-sm">{e.varient} </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-base text-[#f38102]">
              Sorry! We are not Dealing in this segment
            </h2>
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

export default SelectVariant;

// onClick={() => { setUserCar({ ...UserCar, varient: { name: e.varient, id: e.id } }); UserCarTabArray[2] = e.varient; setCurrentTab("3") }}
