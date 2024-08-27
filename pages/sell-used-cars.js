import React, { useEffect, useState } from "react";

import SellModal from "@/components/SellPageModal3/SellModal";

import Howtosell from "@/components/Home/Howtosell";
import VehicleInfo from "@/components/NewComponents/VehicleInfo2";

import { useRouter } from "next/router";
import Head from "next/head";
import HomeQuestions from "@/components/Home/HomeQuestions";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { sellTestimonialData } from "@/common/testimonialData";
import { sellFaqData } from "@/common/faqData";

const sellCars = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const [UserCar, setUserCar] = useState({
    brand: { name: "", id: "" },
    model: { name: "", id: "" },
    varient: { name: "", id: "" },
    year: "",
    ownerShip: "",
    fuelType: "",
    kmDriven: "",
    location: "",
  });
  const arr = new Array(7);
  const [UserCarTabArray, setUserCarTabArray] = useState(arr);
  const [CurrentTab, setCurrentTab] = useState("0");

  const router = useRouter();

  const title = "Sell Used Car Online at Best Price from Home - Unificars";
  const description =
    "Sell your used cars online at the best price. Sell  used car conveniently in just  3 simple steps with free inspection and easy RC transfer at Unifi Cars";
  const canonicalUrl = "https://unificars.com/sell-used-cars";

  useEffect(() => {
    if (router.query.brand && router.query.id) {
      setUserCar({
        ...UserCar,
        brand: { name: router.query.brand, id: router.query.id },
      });
      console.log({ ...UserCar, brand: router.query.brand });
      UserCarTabArray[0] = router.query.brand;
      setUserCarTabArray([...UserCarTabArray]);
      setOpenModal(true);
      setCurrentTab("1");
    }
  }, [router]);

  const [verifyNum, setVerifyNum] = useState(false);

  return (
    <>
      <div className="pt-12">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="sell your used car, sell your car, selling used car, sell cars online, sell your car, selling your used car, sell your used cars online"
          />
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          />
          <link rel="canonical" href={canonicalUrl} />
        </Head>

        <div className="text-center items-center flex flex-col mx-4">
          <h1 className="text-2xl md:text-4xl text-black my-2 font-black">
            Sell Your Car At Best Price Instantly From Home
          </h1>

          <h3 className="text-lg md:text-2xl uppercase tracking-wide text-blue-950 my-6">
            Let's select your car brand
          </h3>
        </div>

        <div className="container mx-auto md:w-[70%] mb-6">
          <VehicleInfo />
        </div>

        <Howtosell />

        <div className="w-full h-fit">
          <TestimonialCarousel testimonialData={sellTestimonialData} />
        </div>

        <HomeQuestions faqData={sellFaqData} />

        {/* modal starts here  */}
        <div>
          <SellModal
            setUserCarTabArray={setUserCarTabArray}
            UserCarTabArray={UserCarTabArray}
            OpenModal={OpenModal}
            setOpenModal={setOpenModal}
            UserCar={UserCar}
            setUserCar={setUserCar}
            CurrentTab={CurrentTab}
            setCurrentTab={setCurrentTab}
            setVerifyNum={setVerifyNum}
          />
        </div>
      </div>
    </>
  );
};

export default sellCars;
