import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { HomeFaqData } from "@/common/faqData";

const CookiesSection = dynamic(() => import("@/components/CookiesSection"), {
  ssr: true,
});
const HowToSell = dynamic(() => import("@/components/Home/Howtosell"), {
  ssr: true,
});
const ExploreActionCard = dynamic(
  () => import("@/components/ExploreActionCard"),
  { ssr: true }
);
const TestimonialCarousel = dynamic(
  () => import("@/components/TestimonialCarousel"),
  { ssr: true }
);
const HomeQuestions = dynamic(() => import("@/components/Home/HomeQuestions"), {
  ssr: true,
});
const SellCar = dynamic(() => import("@/components/Home/SellCar"), {
  ssr: true,
});
const Buycar = dynamic(() => import("@/components/Home/Buycar"), { ssr: true });

function index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [userLocation, setUserLocation] = useState({});

  const userGeolocation = async () => {
    const localLocation = localStorage.getItem("userLocation");

    if (!localLocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords);
          localStorage.setItem("userLocation", JSON.stringify(position.coords));
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  useEffect(() => {
    userGeolocation();
  }, []);

  return (
    <>
      <Head>
        <title>Buy & Sell Used Cars Online at Best Price - Unifi Cars</title>
        <meta
          name="description"
          content="Unifi Cars is your trusted online marketplace for buying and selling used cars. Explore a wide range of certified pre-owned vehicles at competitive prices!"
        />
        <meta
          name="keywords"
          content="Cars, buy used cars, sell used cars, used car marketplace, pre-owned vehicles, certified used cars, second-hand cars"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta
          property="og:title"
          content="Buy & Sell Used Cars Online | Trusted Marketplace -F Unifi Cars"
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
        <link rel="canonical" href="https://unificars.com" />
      </Head>

      <div className="space-y-20">
        <div className="relative">
          {/* <BannerCarousel /> */}

          <div className="cursor-pointer relative overflow-hidden">
            {/* For larger screens */}
            <div className="hidden md:flex relative w-full h-[35rem]">
              {/* Text section */}
              <div
                className={`absolute left-0 top-0 w-1/2 h-full bg-opacity-80 px-20 z-10 flex flex-col justify-center backdrop-blur-[6px] bg-[#f7f6f6]/30`}
              >
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                >
                  <div>
                    <h3 className="text-5xl font-black banheadfont">
                      Choose Reliability, Choose Your New Car
                    </h3>
                    <p className="text-lg my-4 mb-6 text-left font-sans">
                      Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                      Assured Cars
                    </p>

                    <Link href="/buy-used-cars">
                      <button
                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 font-sans"
                        style={{ width: "fit-content", float: "left" }}
                      >
                        Buy Car
                      </button>
                    </Link>
                  </div>

                  <div>
                    <h2 className="text-5xl font-black banheadfont">
                      Sell Your Car with Unifi Cars
                    </h2>
                    <p className="text-lg my-4 mb-6 text-left font-sans">
                      Experience a transparent and hassle-free car selling
                      journey with Us.
                    </p>

                    <Link href="/sell-used-cars">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-sans"
                        style={{ width: "fit-content", float: "left" }}
                      >
                        Sell Car
                      </button>
                    </Link>
                  </div>
                </Carousel>
              </div>

              {/* Image section */}
              <div className="w-full flex justify-center items-center">
                <div className="w-full h-full bg-[#f7f6f6]/30" />
                <div className="w-full h-full bg-[#fffde7]">
                  <Image
                    width={2850 / 3}
                    height={2094 / 3}
                    src="/homecar-new.png"
                    className="object-contain mx-auto scale-110 w-fit h-full absolute left-0 right-0"
                    alt="Car Image"
                  />
                </div>
              </div>
            </div>

            {/* For smaller screens */}
            <div className={`md:hidden`}>
              <div
                className="relative flex items-center justify-center pt-8"
                style={{ backgroundColor: "#fffde7", height: "400px" }}
              >
                <Image
                  width={2850 / 4}
                  height={2094 / 4}
                  src="/homecar-new.png"
                  className="absolute transform -translate-y-1/2 object-contain mt-12 h-64 w-full"
                  alt="Car Image"
                />
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop
                  autoPlay
                  className="absolute bottom-10 text-center w-full"
                >
                  <div className="flex flex-col mx-4 items-start justify-start">
                    <h2 className="text-2xl mb-2 font-bold text-start">
                      Sell Your Car with Unifi Cars
                    </h2>
                    <p className="text-sm mb-4 text-start">
                      Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                      Assured Cars
                    </p>
                    <Link href="/sell-used-cars">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Sell Car
                      </button>
                    </Link>
                  </div>

                  <div className="flex flex-col mx-4 items-start justify-start">
                    <h3 className="text-2xl mb-2 font-bold text-start">
                      Choose Reliability, Choose Your New Car
                    </h3>
                    <p className="text-sm mb-4 text-start">
                      Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                      Assured Cars
                    </p>
                    <Link href="/buy-used-cars">
                      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                        Buy Car
                      </button>
                    </Link>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <CookiesSection />

        <div className="relative container mx-auto px-4 my-6">
          <div className="text-4xl min-w-[50] mx-auto mb-6 px-2 md:px-6 order-last lg:order-first text-center">
            <h1 className="font-bold">
              <span className="text-orange-500 sellheadfont">What</span>
              <span className="sellheadfont"> We Do</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 h-full">
            <Link href="/sell-used-cars">
              <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src="/handshake-new.png"
                    className="w-16 h-16 object-contain"
                    alt="Sell Car"
                  />
                </div>
                <h3 className="text-2xl font-bold buyh4">Sell Car</h3>
                <p className="text-lg">
                  Sell your car easily with us and get better offers with hassle
                  free process and instant payment.
                </p>
              </div>
            </Link>

            <Link href="/buy-used-cars">
              <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src="/rentalcar-new.png"
                    className="w-16 h-16 object-contain"
                    alt="Buy Car"
                  />
                </div>
                <h3 className="text-2xl font-bold buyh4">Buy Car</h3>
                <p className="text-lg">
                  Explore top quality used cars at unbeatable price. Enjoy
                  stress free car buying experience.
                </p>
              </div>
            </Link>

            <Link href="/car-health-report">
              <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src="/car-insp-new.png"
                    className="w-16 h-16 object-contain"
                    alt="Car Health Report"
                  />
                </div>
                <h3 className="text-2xl font-bold buyh4">Car Health Report</h3>
                <p className="text-lg">
                  Car health report ensures the safety with 210 check points
                  covering by certified professionals
                </p>
              </div>
            </Link>

            <Link href="/challan-check">
              <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src="/challan-check.png"
                    className="w-16 h-16 object-contain"
                    alt="Challan Check"
                  />
                </div>
                <h3 className="text-2xl font-black buyh4">Challan Check</h3>
                <p className="text-lg">
                  Stay informed & avoid penalties with our direct and easy
                  process to fill your traffic challan online.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <HowToSell />

        <SellCar />

        <Buycar />

        <ExploreActionCard />

        <div className="md:px-4 px-2 mx-auto">
          <TestimonialCarousel />
        </div>

        <div className="container mx-auto pt-6">
          <Image
            width={3840 / 3}
            height={1302 / 3}
            src={"/download-banner.png"}
            className="rounded-xl object-cover w-full"
            alt="Download Banner"
          />
        </div>

        <div className="pb-6">
          <HomeQuestions faqData={HomeFaqData} />
        </div>
      </div>
    </>
  );
}

export default index;
