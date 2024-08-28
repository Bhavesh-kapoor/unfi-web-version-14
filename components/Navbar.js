"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoCallOutline } from "react-icons/io5";
import { ArrowDown, CloseIcon, Hamburger } from "@/common/IconsSvg";

const TopBar = dynamic(() => import("./TopBar"));

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [slider, setSlider] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 2560) setSlider(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <nav className=" max-w-[1920px] mx-auto w-full z-20 bg-white shadow-sm fixed top-0">
        <TopBar />
        <div className="flex justify-between items-center navmargin">
          <div>
            <Link href="/">
              <Image
                width={150}
                height={80}
                src="/logo.png"
                className="w-36"
                alt="logo"
              />
            </Link>
          </div>
          <div>
            <div className="" onClick={() => setSlider(!slider)}>
              <Hamburger className="block text-xl font-semibold xl:hidden me-2" />
            </div>
            <ul
              className={`font-medium hidden text-base items-start xl:flex space-x-6`}
              style={{ alignItems: "center" }}
            >
              <Link
                href="/"
                className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                  router.pathname == "/"
                    ? "text-orange-600 underline underline-offset-8"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/buy-used-cars"
                className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                  router.pathname == "/buy-used-cars"
                    ? "text-orange-600 underline underline-offset-8"
                    : ""
                }`}
              >
                {" "}
                Buy Car
              </Link>
              <Link
                href="/sell-used-cars"
                className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                  router.pathname == "/sell-used-cars"
                    ? "text-orange-600 underline underline-offset-8"
                    : ""
                }`}
              >
                Sell Car
              </Link>

              <Link
                href="/contact"
                className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                  router.pathname == "/contact"
                    ? "text-orange-600 underline underline-offset-8"
                    : ""
                }`}
              >
                Contact Us
              </Link>

              <div
                className="relative py-2"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <button
                  onClick={toggleDropdown}
                  className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102]  flex items-center ${
                    isOpen ? "text-orange-600 underline underline-offset-8" : ""
                  }`}
                >
                  More <ArrowDown className="p-1 ml-2" />
                </button>
                {isOpen && (
                  <ul
                    className="absolute -left-[25%] pt-8 text-sm"
                    style={{ width: "max-content" }}
                  >
                    <div className="bg-white shadow-lg rounded-lg">
                      <li
                        className={`hover:bg-gray-100 ${
                          router.pathname == "/about" ? "bg-gray-200" : ""
                        }`}
                      >
                        <Link href="/about" className="block px-4 py-2">
                          About Us
                        </Link>
                      </li>

                      {/* <li
                        className={`hover:bg-gray-100 ${
                          router.pathname == "/assured-cars"
                            ? "bg-gray-200"
                            : ""
                        }`}>
                        <Link href="/assured-cars" className="block px-4 py-2">
                          Assured Fix
                        </Link>
                      </li> */}

                      <li
                        className={`hover:bg-gray-100 ${
                          router.pathname == "/car-health-report"
                            ? "bg-gray-200"
                            : ""
                        }`}
                      >
                        <Link
                          href="/car-health-report"
                          className="block px-4 py-2"
                        >
                          Car Health Report
                        </Link>
                      </li>

                      <li
                        className={`hover:bg-gray-100 ${
                          router.pathname == "/scrap-cars" ? "bg-gray-200" : ""
                        }`}
                      >
                        <Link href="/scrap-cars" className="block px-4 py-2">
                          Scrap Car
                        </Link>
                      </li>

                      <li
                        className={`hover:bg-gray-100 ${
                          router.pathname == "/challan-check"
                            ? "bg-gray-200"
                            : ""
                        }`}
                      >
                        <Link href="/challan-check" className="block px-4 py-2">
                          Challan Check
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </div>
              {/* <Link
                href="/login"
                className={`hover:text-[#f38102] active:text-orange-600 `}
                >
                <div
                  className="border-orange-500 border-2 cursor-pointer flex rounded-xl font-bold text-orange-500  px-4 whitespace-nowrap p-1"
                  style={{ width: "max-content" }}>
                  Login
                </div>
              </Link> */}
              <Link
                href={
                  pathname && pathname.includes("/cars/")
                    ? "tel:+919911771977"
                    : "/become-our-partner"
                }
                className={`md:pl-12 hover:text-[#f38102] active:text-orange-600 ${
                  router.pathname == "/become-our-partner"
                    ? "text-orange-600 "
                    : ""
                }`}
              >
                <div
                  className={`cursor-pointer flex rounded-xl font-bold text-white p-1 px-4 whitespace-nowrap border-2 ${
                    pathname && pathname.includes("/cars/")
                      ? "bg-orange-400 border-orange-400"
                      : "bg-orange-500 border-orange-500"
                  }`}
                  style={{ width: "max-content" }}
                >
                  {pathname && pathname.includes("/cars/") ? (
                    <p className="inline-flex gap-1 items-center text-white">
                      <IoCallOutline />
                      Call Us
                    </p>
                  ) : (
                    "Become our partner"
                  )}
                </div>
              </Link>
            </ul>

            {/* navbar for small devices */}
            <ul
              className={`text-base fixed w-0 opacity-0 z-50 h-full bg-black/60 overflow-hidden right-0 bottom-0 transition-all xl:hidden text-white ${
                slider ? "w-full opacity-100" : ""
              }`}
            >
              <div className="bg-[#202020] h-full w-64 right-0 absolute flex flex-col space-y-2 font-bold tracking-wider">
                <div
                  className="absolute right-2 text-2xl top-4 p-4"
                  onClick={() => setSlider(!slider)}
                >
                  <CloseIcon />
                </div>
                <li className="px-4">
                  <Link
                    href="/"
                    onClick={() => {
                      setSlider(false);
                    }}
                  >
                    <Image
                      width={150}
                      height={80}
                      src="/whitelogo.png"
                      className="w-36"
                      alt="logo"
                    />
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px] border-t-[1px] ">
                  <Link
                    href="/"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/" ? "text-[#f38102] " : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/buy-used-cars"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/buy-used-cars"
                        ? "text-[#f38102] "
                        : ""
                    }`}
                  >
                    Buy Car
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/sell-used-cars"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/sell-used-cars"
                        ? "text-[#f38102] "
                        : ""
                    }`}
                  >
                    Sell Car
                  </Link>
                </li>

                {/* <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/assured-cars"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/assured-cars"
                        ? "text-[#f38102] "
                        : ""
                    }`}>
                    Assured Fix
                  </Link>
                </li> */}

                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/car-health-report"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/car-health-report"
                        ? "text-[#f38102] "
                        : ""
                    }`}
                  >
                    Car Health Report
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/scrap-cars"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/scrap-cars" ? "text-[#f38102] " : ""
                    }`}
                  >
                    Scrap Car
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/challan-check"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/challan-check"
                        ? "text-[#f38102] "
                        : ""
                    }`}
                  >
                    Challan Check
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/about"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/about" ? "text-[#f38102] " : ""
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/contact"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/contact" ? "text-[#f38102] " : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>

                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/become-our-partner"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/become-our-partner"
                        ? "text-[#f38102] "
                        : ""
                    }`}
                  >
                    Become our partner
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
