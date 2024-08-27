import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const SellByPopularBrands = () => {
  const [BrandsLogo, setBrandsLogo] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchBrands = async () => {
    // console.log("Called")
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
    } catch (error) {}
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
      {!Loading ? (
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 w-9/12 mx-auto gap-4 my-8">
          {BrandsLogo.length > 0 ? (
            BrandsLogo.map((e, index) => {
              return (
                <Link
                  href={`/sell-used-cars?brand=${e.brand_name}&id=${e.id}`}
                  className="shadow-md border w-full p-1 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gray-50 flex items-center justify-center"
                  key={index}>
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={e.image}
                    alt={e.brand_name}
                    className="w-full h-full"
                  />
                </Link>
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
