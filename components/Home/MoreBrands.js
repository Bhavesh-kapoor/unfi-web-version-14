import Image from "next/image";
import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const MoreBrands = ({
  setOpenModal,
  setUserCar,
  UserCar,
  UserCarTabArray,
  setCurrentTab,
  OpenModal,
}) => {
  const [BrandsLogo, setBrandsLogo] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const fetchBrands = async () => {
    // console.log("Called");
    setLoading(true);
    try {
      const fetchBrand = await fetch(
        "https://api.unificars.com/api/getwebrands",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      const jsonRes = await fetchBrand.json();

      if (jsonRes.code == 200) {
        setBrandsLogo(jsonRes.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching brands:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
      {!Loading ? (
        <div
          className={`grid grid-cols-3 md:grid-cols-6 lg:grid-cols-4 ${
            OpenModal ? "w-11/12" : "w-11/12"
          } gap-4 my-8`}>
          {(showAll ? BrandsLogo : BrandsLogo.slice(0, 10)).map((e, index) => (
            <div
              onClick={() => {
                setUserCar({
                  ...UserCar,
                  brand: { name: e.brand_name, id: e.id },
                });
                UserCarTabArray[0] = e.brand_name;
                setOpenModal(true);
                setCurrentTab("1");
              }}
              className="shadow-md border w-auto cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gray-50 flex items-center justify-center rounded-2xl"
              key={index}>
              <Image
                priority
                width={60}
                height={80}
                src={e.image}
                alt={e.brand_name}
                className=""
              />
            </div>
          ))}
          {!showAll && BrandsLogo.length > 10 && (
            <button
              onClick={() => setShowAll(true)}
              className="shadow-md border w-full p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gray-50 flex items-center justify-center rounded-2xl font-sans text-[#da251c] text-lg">
              More
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src="../logo.png"
            className="h-20 animate-bounce mx-auto"
            alt="logo"
          />
          <BarLoader color="#f38120" width={100} className="mx-auto" />
        </div>
      )}
    </>
  );
};

export default MoreBrands;
