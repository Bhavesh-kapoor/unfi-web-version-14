import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BarLoader from "react-spinners/BarLoader";
import dynamic from "next/dynamic";

const CarPageRelatedCars = dynamic(
  () => import("@/components/CarDetailsComponents/CarPageRelatedCars"),
  { ssr: true }
);
const CarImageCarousel = dynamic(
  () => import("@/components/CarDetailsComponents/CarImageCarousel"),
  { ssr: true }
);
const CarDetailsBox = dynamic(
  () => import("@/components/CarDetailsComponents/CarDetailsBox"),
  { ssr: true }
);
const CarOverView = dynamic(
  () => import("@/components/CarDetailsComponents/CarOverView"),
  { ssr: true }
);
const OtpModal = dynamic(
  () => import("@/components/CarDetailsComponents/OtpModal"),
  { ssr: true }
);

const EnquiryModal = dynamic(
  () => import("@/components/CarDetailsComponents/EnquiryModal"),
  { ssr: true }
);
const MoblieCarDetailsHeader = dynamic(
  () => import("@/components/CarDetailsComponents/MoblieCarDetailsHeader"),
  { ssr: true }
);

import Image from "next/image";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import { ImageDisplayHide } from "../../ReduxStore/actions/ModalImage";
import Car210PointsModal from "@/components/CarDetailsComponents/Car210PointsModal";
import HomeQuestions from "@/components/Home/HomeQuestions";
import { CloseIcon } from "@/common/IconsSvg";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { buyTestimonialData } from "@/common/testimonialData";
import { BuyFaqData } from "@/common/faqData";
import CarSpecification from "@/components/CarDetailsComponents/CarSpecification";
import CarDetailTable from "@/components/CarDetailsComponents/CarFeature";

const carPage = () => {
  const router = useRouter();
  const { slug, id, assured } = router.query;

  const [car, setCar] = useState("");
  const [relatedCars, setRelatedCars] = useState([]);
  const [ShowSpinner, setShowSpinner] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [carDetailsModal, setCarDetailsModal] = useState(false);

  const dispatch = useDispatch();
  const CurrentImage = useSelector((state) => state.CurrentImage);

  // data fetching for main car
  const fetchCarDetails = async () => {
    const params = { lead_id: id, assured: assured };
    const fecthCars = await fetch(
      "https://crm.unificars.com/api/assuredcardetail",
      {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const jsonData = await fecthCars.json();
    // console.log(jsonData,"car details")
    setShowSpinner(false);
    if (jsonData.code == 200) {
      setCar(jsonData.data);

      // console.log("car report details ", jsonData.data);
      if (jsonData.data.lead[0].Brand) {
        const brandName = jsonData.data.lead[0].Brand.split(" ")[0];
        fetchRelatedCars(brandName);
      }
    }
  };
  const fetchRelatedCars = async (brandName) => {
    const params = { lead_id: id, brand: brandName };
    const url =
      assured == 1
        ? "https://crm.unificars.com/api/getassuredrelatedcars"
        : `https://crm.unificars.com/api/getassuredrelatedcars`;
    const resdata = await fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-type": "application/json",
      },
    });
    const jsonData = await resdata.json();
    // console.log(jsonData, "fromRelatedCars")
    setRelatedCars(jsonData.data.auction);
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetchCarDetails();
    // console.log(assured , id)
  }, [router.isReady, slug, id]);

  return (
    <>
      <Head>
        <title>
          {car && car.lead[0] ? car.lead[0].Model : ""}{" "}
          {car && car.lead[0] ? car.lead[0].Brand : ""} - Unifi Cars
        </title>
      </Head>
      <div className="bg-gray-100/10" style={{ paddingTop: "18px" }}>
        {ShowSpinner ? (
          // showing spinner when car data is fecthing
          <div className="flex col-span-4 justify-center h-96 items-center w-11/12 my-8 m-auto rounded-xl">
            <div className="">
              <Image
                src="/logo.png"
                width={200}
                height={100}
                priority
                className="w-full h-20 animate-bounce mx-auto"
                alt="logo"
              />
              <BarLoader color="#f38120" width={100} className="mx-auto" />
            </div>
          </div>
        ) : (
          <>
            <div className="sticky top-0 lg:hidden z-10 bg-white border-b-[1px] border-black/10 p-4">
              <MoblieCarDetailsHeader
                car={car}
                setShowEnquiryModal={setShowEnquiryModal}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 mx-auto w-full py-4 px-2 lg:p-10">
              <div className="px-2 md:pr-5 mb-5 w-full lg:w-1/2">
                <div className="relative">
                  <CarImageCarousel
                    images={
                      car?.assuredimages?.length > 0
                        ? car.assuredimages
                        : car.images
                    }
                    car={car}
                  />
                </div>
                <div className="space-y-4">
                  <CarOverView CarDetails={car.lead} />
                  <CarSpecification CarSpecific={car.specifications} />
                  <CarDetailTable CarFeature={car.features} />
                </div>
              </div>
              <div className="md:p-0 md:pb-5 w-full lg:w-1/2">
                <div className="sticky top-36">
                  <CarDetailsBox
                    car={car}
                    id={id}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setShowEnquiryModal={setShowEnquiryModal}
                  />

                  <img src="/carDetailsInfoImg.png" className="w-full mt-4" />
                </div>
              </div>
            </div>

            {/* auto bid modal start here  */}
            <div
              className={`fixed z-50 overflow-hidden top-0 w-full transition-all duration-200 ease-in-out flex justify-center items-center ${
                CurrentImage.url != "" ? "h-full" : "h-0"
              }`}
            >
              <div
                className="absolute top-0 bg-black/50 w-full h-full"
                onClick={() => dispatch(ImageDisplayHide())}
              ></div>
              <div className="z-40 bg-white relative m-4">
                <div
                  className="absolute -top-2 -right-2 z-40 bg-white/70 rounded-full cursor-pointer"
                  onClick={() => {
                    dispatch(ImageDisplayHide());
                  }}
                >
                  {" "}
                  <CloseIcon className="text-2xl text-black" />{" "}
                </div>
                <div className="relative">
                  <img src={CurrentImage.url} className="w-96 h-96" />
                  <h3 className="absolute bottom-0 text-lg w-full p-2 bg-white/50 text-center">
                    {CurrentImage.part}
                  </h3>
                </div>
                <hr />
              </div>
            </div>

            {relatedCars && relatedCars.length > 0 ? (
              <div className="w-11/12 my-1 mx-auto">
                <CarPageRelatedCars
                  relatedCars={relatedCars}
                  assured={assured}
                />
              </div>
            ) : (
              <></>
            )}

            <TestimonialCarousel testimonialData={buyTestimonialData} />

            <div>
              <HomeQuestions faqData={BuyFaqData} />
            </div>
            <OtpModal
              showModal={showModal}
              setShowModal={setShowModal}
              carId={id}
              setCarDetailsModal={setCarDetailsModal}
            />
            <EnquiryModal
              carId={id}
              showEnquiryModal={showEnquiryModal}
              setShowEnquiryModal={setShowEnquiryModal}
            />

            <Car210PointsModal
              showModal={carDetailsModal}
              setShowModal={setCarDetailsModal}
              carDetails={car.detaiapi}
              // setCarDetailsModal={setCarDetailsModal}
            />
          </>
        )}
      </div>
    </>
  );
};

export default carPage;
