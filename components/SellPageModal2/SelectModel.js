import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const SelectModel = ({ setCarInfo, carInfo, setValue, value }) => {
  const [BrandsModels, setBrandsModels] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchBrands = async () => {
    setLoading(true);
    // const data = { "brand_id": UserCar.brand.id }
    const data = { brand_id: carInfo.brand.id };

    try {
      const fetchBrand = await fetch(
        "https://api.unificars.com/api/getbrandsmodel",
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
        setBrandsModels(jsonRes.data);
        setLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleClick = (model) => {
    setCarInfo({ ...carInfo, model: { name: model.model, id: model.id } });
    setLoading(false);
    setValue(parseInt(value) + 1 + "");
  };

  return (
    <>
      {!Loading ? (
        // <div className="mx-auto gap-4 lg:grid-cols-5 grid grid-cols-2">
        <div className="mx-auto gap-4 flex flex-wrap">
          {BrandsModels.length > 0 ? (
            BrandsModels.map((e, index) => {
              return (
                <div
                  onClick={() => handleClick(e)}
                  className="shadow-md p-2 px-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-[#f38102] hover:text-white rounded-lg"
                  key={index}>
                  <div className="text-base text-center">{e.model} </div>
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

export default SelectModel;

// onClick={() => { setUserCar({ ...UserCar, model: { name: e.model, id: e.id } }); UserCarTabArray[1] = e.model; setCurrentTab("2") }}
