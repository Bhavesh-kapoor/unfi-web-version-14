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

  const title = "Sell Your Used Car Online | Fast & Hassle-Free Process";
  const description =
    "Unifi Cars is your trusted online marketplace for buying and selling used cars. Explore a wide range of certified pre-owned vehicles at competitive prices!";
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
            content="Unifi Cars, buy used cars, sell used cars, used car marketplace, pre-owned vehicles, certified used cars, second-hand cars"
          />
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          />
          <meta
            property="og:title"
            content="Buy & Sell Used Cars Online | Trusted Marketplace - Unifi Cars"
          />
          <meta
            property="og:description"
            content="Unifi Cars offers a seamless platform to buy and sell used cars. Find certified pre-owned vehicles at great prices. Start your car search today!"
          />
          <meta property="og:url" content="https://unificars.com/" />
          <meta
            property="og:image"
            content="https://unificars.com/logo.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Buy & Sell Used Cars Online | Trusted Marketplace - Unifi Cars"
          />
          <meta
            name="twitter:description"
            content="Unifi Cars is the go-to platform for buying and selling used cars. Explore a wide selection of pre-owned vehicles today!"
          />
          <meta
            name="twitter:image"
            content="https://unificars.com/logo.png"
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
