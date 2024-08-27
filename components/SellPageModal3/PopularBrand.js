import Image from "next/image";
import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { useRouter } from "next/router";

const SellByPopularBrands = ({
  setOpenModal,
  setUserCar,
  UserCar,
  UserCarTabArray,
  setCurrentTab,
  OpenModal,
}) => {
  const router = useRouter();

  const [BrandsLogo, setBrandsLogo] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchBrands = async () => {
    setLoading(true);
    try {
      const fetchBrand = await fetch(
        "https://api.unificars.com/api/getwebrands",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const jsonRes = await fetchBrand.json();
      if (jsonRes.code == 200) {
        setBrandsLogo(jsonRes.data);
        setLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
      {!Loading ? (
        <div
          className={`grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 ${
            OpenModal ? "w-11/12" : "w-10/12"
          } gap-4 my-8 mx-auto `}>
          {BrandsLogo.length > 0 ? (
            BrandsLogo.map((e, index) => {
              return (
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
                  className="shadow-md border p-1 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gray-50 flex items-center justify-center rounded-2xl"
                  key={index}>
                  <Image
                    priority
                    width={80}
                    height={100}
                    src={e.image}
                    alt={e.brand_name}
                    className=""
                  />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src="../logo.png"
            className="h-20 animate-bounce  mx-auto"
            alt="logo"
          />
          <BarLoader color="#f38120" width={100} className="mx-auto" />
        </div>
      )}
    </>
  );
};

export default SellByPopularBrands;
