import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import "react-multi-carousel/lib/styles.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import HomeQuestions from "@/components/Home/HomeQuestions";
import WhatDoYouGet from "@/components/WhatDoYouGet";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { fromLatLng, setDefaults } from "react-geocode";
import {
  FetchCarBrands,
  FetchCarBrandsModels,
  FetchCarVarient,
  confirmAddress,
  pdiCarHealthenquiry,
  verifyOtpForPdiCarHealthEnquiry,
} from "@/common/common";
import Image from "next/image";
import { inspectionTestimonialData } from "@/common/testimonialData";
import { PdiFaqData } from "@/common/faqData";
import { Loader } from "@/common/IconsSvg";

const pdi = ({ isOpen, onClose }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    otp: "",
    email: "",
    carDetails: {
      brand: "",
      model: "",
      variant: "",
      transmission: "",
      fuelType: "",
      location: "",
      status: "",
    },
    confirmation: false,
  });
  const [otpSent, setOtpSent] = useState(false);
  const [msg, setMsg] = useState("");
  const [otpResId, setOtpResId] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    // setIsModalOpen(false);
    setStep(1); // Reset step when modal closes
    setFormData({
      name: "",
      address: "",
      phoneNumber: "",
      otp: "",
      email: "",
      carDetails: {
        brand: "",
        model: "",
        variant: "",
        transmission: "",
        fuelType: "",
        location: "",
        status: "",
      },
      confirmation: false,
    });
    setOtpSent(false);
  };

  const handleNext = async () => {
    if (step === 1 && !otpSent) {
      // Send OTP API call
      // Assuming sendOtpApi is a function that sends the OTP and returns a promise
      try {
        await sendOtpApi(
          formData.name,
          formData.phoneNumber,
          formData.email,
          formData.address
        );

        setMsg("OTP sent successfully");
      } catch (error) {
        setMsg("Failed to send OTP");
      }
    } else if (step === 1 && otpSent) {
      // Verify OTP API call
      // Assuming verifyOtpApi is a function that verifies the OTP and returns a promise
      try {
        const res = await verifyOtpForPdiCarHealthEnquiry(
          formData.phoneNumber,
          formData.otp
        );

        if (res.code === 200) {
          setStep((prev) => prev + 1);
          setMsg("");
        }

        // await verifyOtpApi(formData.phoneNumber, formData.otp);
      } catch (error) {
        setMsg("Invalid OTP");
      }
    } else if (step === 2) {
      const confirmAddressRes = await confirmAddress(
        formData.carDetails.brand,
        formData.carDetails.model,
        formData.carDetails.variant,
        formData.carDetails.transmission,
        formData.carDetails.fuelType,
        otpResId
      );

      if (confirmAddressRes?.code === 200) {
        setStep((prev) => prev + 1);
      }
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getPhoneNumber = (number) => {
    const formattedNumber = number.replace(/\D/g, "");
    return formattedNumber ? parseInt(formattedNumber) : "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update step 1 fields directly
    if (step === 1) {
      setFormData({
        ...formData,
        [name]: name === "phoneNumber" ? getPhoneNumber(value) : value,
      });
    } else if (step === 2 || step === 3) {
      // Update nested fields for carDetails
      setFormData({
        ...formData,
        carDetails: { ...formData.carDetails, [name]: value },
      });
    }

    // Additional logic based on field names
    if (name === "brand") {
      const selectedCar = fetchCarBrandsDetails.find(
        (car) => car.brand_name === value
      );
      if (selectedCar) {
        getModelsDetails(selectedCar);
      }
    }

    if (name === "model") {
      const selectedModel = fetchCarModels.find(
        (model) => model.model === value
      );
      if (selectedModel) {
        getVariantDetails(selectedModel);
      }
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, confirmation: e.target.checked });
  };

  const handleSubmit = () => {
    // Final API call to submit all data
    console.log("Final form data:", formData);
    closeModal();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateEmailForm = () => {
    const email = document.getElementById("email").value;
    const errorElement = document.getElementById("error-message");
    if (email.length === 0) {
      errorElement.textContent = "";
      errorElement.style.color = "";
      return;
    }
    if (!validateEmail(email)) {
      errorElement.textContent = "Invalid email address.";
      errorElement.style.color = "red";
    }
  };

  // handle razorpay payment
  const handlePayment = () => {
    const options = {
      key: "rzp_test_tX7OYv8wO9psps",
      amount: 100, // Amount in paise
      currency: "INR",
      name: "Unificars",
      description: "Car Inspection Payment",
      image: "/logo.png",
      handler: function (response) {
        console.log(response);
        alert("Payment Successful!");
        setStep(step + 1);
      },
      prefill: {
        name: formData.name,
        email: formData.email || "example@example.com",
        contact: formData.phoneNumber,
      },
      notes: {
        address: formData.address,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const title = "PDI | Experience Delightful Car Ownership | Unificars";
  const description =
    "Unificars is your top destination for buy and sell used cars, offering competitive pricing and valuable car-related information.";
  const canonicalUrl = "https://unificars.com/about";

  // animation logic

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  // set current location
  setDefaults({
    key: "AIzaSyDVCW7NP6pt8-JMxxOQe7GNa6nG1SksGVk", // google API key.
    language: "en", // Default language for responses.
    region: "in", // Default region for responses.
  });

  const [isLocation, setIsLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  const setLocation = async () => {
    try {
      setIsLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fromLatLng(position.coords.latitude, position.coords.longitude)
            .then(({ results }) => {
              setFormData({
                ...formData,
                address: results[0].formatted_address,
              });
              setLocationError(null);
              setIsLocation(false);
            })
            .catch((error) => {
              console.error(error);
              setLocationError("Failed to retrieve address from location");
              setIsLocation(false);
            });
        },
        (error) => {
          console.error(error);
          setLocationError("Please allow location access");
          setIsLocation(false);
        }
      );
    } catch (error) {
      console.error(error);
      setLocationError("Failed to retrieve location");
      setIsLocation(false);
    }
  };

  // Simulated OTP API calls for demonstration purposes
  const sendOtpApi = async (name, phone, email, address) => {
    // return new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await pdiCarHealthenquiry(name, phone, email, address);
    setOtpResId(res.last_id);
    console.log("OTP RES ID", res.last_id); //OTP RES ID 35584
    if (res.code === 200) {
      setOtpSent(true);
    }
  };

  const [fetchCarBrandsDetails, setFetchCarBrandsDetails] = useState([]);
  const [fetchCarModels, setFetchCarModels] = useState([]);
  const [fetchCarVariant, setFetchCarVariant] = useState([]);

  useEffect(() => {
    const fetchCarFunc = async () => {
      const fetchCarRes = await FetchCarBrands();
      setFetchCarBrandsDetails(fetchCarRes.data);
    };
    fetchCarFunc();
  }, []);

  const getModelsDetails = async (item) => {
    const FetchCarBrandsModelsRes = await FetchCarBrandsModels(item?.id);

    setFetchCarModels(FetchCarBrandsModelsRes.data);
  };

  const getVariantDetails = async (item) => {
    const FetchCarBrandsVariantsRes = await FetchCarVarient(item?.id);

    setFetchCarVariant(FetchCarBrandsVariantsRes.data);
  };

  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Add other meta tags if needed */}
      </Head>
      {/* top banner*/}
      <div className="relative">
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full -z-10">
            <Image
              width={3840 / 3}
              height={1488 / 3}
              src="/pdi-new.png"
              alt="Car health Report"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-end md:p-12 py-8 px-2 pb-0 container mx-auto">
            <div className="relative bg-white rounded-lg shadow-lg w-[550px] p-6 border">
              {step === 1 && (
                <div>
                  <div className="flex gap-4 justify-center items-center">
                    <h1 className="text-2xl font-black mb-4 text-center">
                      Used Car Health Report Know Before You Buy
                      {/* <span className="text-orange-500"> </span> */}
                    </h1>
                  </div>
                  <input
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Enter your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={validateEmailForm}
                  />
                  <p id="error-message" className="text-sm mt-1 mb-2"></p>
                  <input
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Enter your address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <button
                    className="w-full mb-2 p-2 border border-gray-300 rounded bg-yellow-300 flex items-center justify-center gap-4"
                    onClick={setLocation}
                  >
                    {isLocation && <Loader className="animate-spin" />}
                    <span>Select your location</span>
                  </button>
                  {locationError && (
                    <div className="text-red-500 text-sm text-center">
                      {locationError}
                    </div>
                  )}

                  <input
                    className={`w-full mb-2 p-2 border border-gray-300 rounded ${
                      msg === "OTP sent successfully" && "bg-gray-200"
                    }`}
                    type="text"
                    maxLength={10}
                    name="phoneNumber"
                    inputMode="numeric"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    placeholder="Enter Phone Number"
                    disabled={msg === "OTP sent successfully"}
                  />
                  {otpSent && (
                    <input
                      className="w-full mb-2 p-2 border border-gray-300 rounded"
                      placeholder="Enter OTP"
                      name="otp"
                      type="number"
                      minLength={6}
                      disabled={formData.phoneNumber === ""}
                      value={formData.otp}
                      onChange={handleChange}
                    />
                  )}
                  {msg && (
                    <div
                      className={`mb-4 ${
                        msg === "OTP sent successfully"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {msg}
                    </div>
                  )}
                  <button
                    className="w-full p-2 bg-blue-500 text-white rounded"
                    onClick={handleNext}
                  >
                    {otpSent ? "Verify OTP" : "Send OTP"}
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Enter Car Details</h2>
                  <select
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    name="brand"
                    value={formData.carDetails.brand}
                    defaultValue="Select Car Brand"
                    onChange={handleChange}
                  >
                    <option value="Select Car Brand">Select Car Brand</option>

                    {/* Add more options */}
                    {fetchCarBrandsDetails.map((car) => (
                      <option key={car.id} value={car.brand_name}>
                        {car.brand_name}
                      </option>
                    ))}
                  </select>

                  <select
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    name="model"
                    value={formData.carDetails.model}
                    onChange={handleChange}
                  >
                    <option>Model</option>

                    {/* Add more options */}
                    {fetchCarModels.map((car) => (
                      <option key={car.id} value={car.model}>
                        {car.model}
                      </option>
                    ))}
                  </select>

                  <select
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    name="variant"
                    value={formData.carDetails.variant}
                    onChange={handleChange}
                  >
                    <option>Variant</option>

                    {/* Add more options */}
                    {fetchCarVariant.map((car) => (
                      <option key={car.id} value={car.varient}>
                        {car.varient}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    name="transmission"
                    value={formData.carDetails.transmission}
                    onChange={handleChange}
                  >
                    <option>Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    {/* Add more options */}
                  </select>
                  <select
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    name="fuelType"
                    value={formData.carDetails.fuelType}
                    onChange={handleChange}
                  >
                    <option>Fuel Type</option>
                    {/* Add more options */}
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                  </select>
                  {/*<input
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Current location of the car"
                    name="location"
                    value={formData.carDetails.location}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Current status of the car"
                    name="status"
                    value={formData.carDetails.status}
                    onChange={handleChange}
                  />*/}
                  <div className="flex justify-between">
                    <button
                      className="p-2 bg-gray-300 rounded"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button
                      className="p-2 bg-blue-500 text-white rounded"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Confirm Details and Pay
                  </h2>
                  <label className="mb-4 flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.confirmation}
                      onChange={handleCheckboxChange}
                    />
                    Confirm that the provided details are correct
                  </label>
                  <button
                    className="w-full p-2 bg-blue-500 text-white rounded"
                    onClick={handlePayment}
                  >
                    Pay ₹999
                  </button>
                  <div className="flex justify-between mt-4">
                    <button
                      className="p-2 bg-gray-300 rounded"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* car numbers */}
      <div className="flex flex-wrap gap-2 justify-around mt-16 md:mx-20 p-4 md:p-10 border bg-gradient-to-r from-white rounded-2xl to-blue-50/50">
        <div className="lg:flex items-center gap-4 font-black">
          <div
            ref={ref}
            className="flex justify-center items-center md:text-4xl gap-1 text-orange-500"
          >
            {inView && (
              <CountUp start={10} end={50} duration={2} decimals={0}>
                {({ countUpRef }) => <div ref={countUpRef} />}
              </CountUp>
            )}
            <span> Lakh+</span>
          </div>
          <p className="md:text-lg text-sm text-center md:text-left">
            Report
            <br />
            Generated
          </p>
        </div>

        <div className="lg:flex items-center gap-4 font-black">
          <div
            ref={ref}
            className="flex justify-center items-center md:text-4xl gap-1 text-orange-500"
          >
            {inView && (
              <CountUp start={10} end={50} duration={2} decimals={0}>
                {({ countUpRef }) => <div ref={countUpRef} />}
              </CountUp>
            )}
            <span>Lakh +</span>
          </div>
          <p className="md:text-lg text-sm text-center md:text-left">
            Happy
            <br />
            Customers
          </p>
        </div>

        <div className="lg:flex items-center gap-4 font-black">
          <div
            ref={ref}
            className="flex justify-center items-center md:text-4xl gap-1 text-orange-500"
          >
            {inView && (
              <CountUp start={100} end={200} duration={2} decimals={0}>
                {({ countUpRef }) => <div ref={countUpRef} />}
              </CountUp>
            )}
            <span>+</span>
          </div>
          <p className="md:text-lg text-sm text-center md:text-left">
            Locations
            <br />
            Available
          </p>
        </div>
      </div>

      {/* fault card start here */}
      <div className="flex md:gap-6 gap-2 lg:flex-row flex-col mt-16 md:px-20 px-4">
        <div className="text-center justify-center md:my-4 bg-[#FBFBFB] text-black p-2 rounded-lg w-full">
          <img
            src="/hiden-accidental-history.png"
            className="img-fluid w-full h-60 object-cover rounded-lg"
            alt="howitworks"
            width="280"
          />
          <div className="text-left space-y-4 py-4">
            <h3 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4 text-center">
              Hidden Accident History
            </h3>
            <p className="text-lg text-center">
              <span className="text-orange-500 font-semibold">40%</span> of used
              cars have some accidental history
            </p>
          </div>
        </div>

        <div className="text-center justify-center md:my-4 bg-[#FBFBFB] text-black p-2 rounded-lg w-full">
          <img
            src="/fake-service-history.png"
            className="img-fluid w-full h-60 object-cover rounded-lg"
            alt="howitworks"
            width="280"
          />
          <div className="text-left space-y-4 py-4">
            <h3 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4 text-center">
              Fake Service History
            </h3>
            <p className="text-lg text-center">
              <span className="text-orange-500 font-semibold">15%</span> of used
              car sales have fabricated service records
            </p>
          </div>
        </div>

        <div className="text-center justify-center md:my-4 bg-[#FBFBFB] text-black p-2 rounded-lg w-full">
          <img
            src="/tempered-odometer.png"
            className="img-fluid w-full h-60 object-cover rounded-lg"
            alt="howitworks"
            width="280"
          />
          <div className="text-left space-y-4 py-4">
            <h3 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4 text-center">
              Tampered Odometers
            </h3>
            <p className="text-lg text-center">
              <span className="text-orange-500 font-semibold">20-30%</span> of
              used car sales have fabricated service records
            </p>
          </div>
        </div>

        <div className="text-center justify-center md:my-4 bg-[#FBFBFB] text-black p-2 rounded-lg w-full">
          <img
            src="/water-damage.png"
            className="img-fluid w-full h-60 object-cover rounded-lg"
            alt="howitworks"
            width="280"
          />
          <div className="text-left space-y-4 py-4">
            <h3 className="text-xl text-black font-black tracking-widest mt-4 flex-none buyh4 text-center">
              Water Damage
            </h3>
            <p className="text-lg text-center">
              <span className="text-orange-500 font-semibold">1 Lakh+</span> by
              floods annually, resulting in water damage, rust, and electrical
              issues
            </p>
          </div>
        </div>
      </div>
      {/* fault card end here */}

      <div className="mt-16 md:px-20 px-4 space-y-6">
        <h2 className="text-center font-black text-4xl">
          <span className="text-orange-500 font-semibold">What </span>
          Do You Get?
        </h2>
        <WhatDoYouGet />
      </div>

      {/* What Does the 210-Point Inspection Cover? */}
      <div className="relative mx-auto px-4 pt-16 mb-4">
        <div className="mb-12 font-bold md:text-center">
          <h2 className="text-4xl text-black">
            What Does the 210-Point
            <br />
            Inspection Cover
          </h2>
        </div>
        <div className="flex flex-wrap-reverse md:flex-nowrap container mx-auto gap-4 md:px-20 px-4">
          <div className="text-xl  text-black">
            <h3 className="py-2 font-bold">Engine and Transmission:</h3>
            <p className="text-lg text-gray-700 my-2">
              Thorough checks of the engine, transmission, and related
              components to ensure smooth and efficient performance.
            </p>
            <h3 className="py-2 font-bold">Brakes and Suspension:</h3>
            <p className="text-lg text-gray-700 my-2">
              Inspection of the brake system, suspension, and steering for
              optimal safety and handling.
            </p>
            <h3 className="py-2 font-bold">Electrical Systems:</h3>
            <p className="text-lg text-gray-700 my-2">
              Testing of all electrical systems, including the battery,
              alternator, and lighting.
            </p>
            <h3 className="py-2 font-bold">Interior and Exterior:</h3>
            <p className="text-lg text-gray-700 my-2">
              Examination of the car’s interior and exterior for any signs of
              wear, damage, or defects.
            </p>
            <h2 className="py-2 font-bold">Safety Features:</h2>
            <p className="text-lg text-gray-700 my-2">
              Verification of all safety features, such as airbags, seat belts,
              and anti-lock braking systems.
            </p>
          </div>

          <div className="line">
            <Image
              width={1200}
              height={1200}
              src={"/pdi2.png"}
              alt=""
              className="w-[100%] mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto bg-blue-100 mt-16 ">
        <div className="font-bold text-center py-14 ">
          <h3 className="text-4xl text-black">
            Start with Unifi Cars Pre delivery <br />
            Inspection service
          </h3>
          <div
            className="text-3xl font-bold text-black"
            style={{ textAlign: "-webkit-center" }}
          >
            <Link
              href="#"
              className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102]`}
            >
              <div
                className="bg-blue-500 cursor-pointer flex rounded-md font-bold text-white px-4 py-2 whitespace-nowrap text-base mt-6"
                style={{ width: "max-content" }}
              >
                Book Inspection
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="relative mx-auto px-4 pt-16 md:px-20">
        <h1 className="py-2 text-center text-3xl font-bold text-black">
          Why Choose Pre Delivery Inspection{" "}
        </h1>
        <p className="text-center mb-8 text-lg">
          keys to cash unlock the value of your car
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="bg-blue-200 text-black p-6 rounded-lg carousel-item">
            <h4 className="text-xl font-black mb-2 buyh4 text-center">
              Thorough Inspection
            </h4>
            <p className="mb-4 text-center">
              Our certified technicians perform a detailed 210-point inspection
              covering all critical aspects of your car, from the engine and
              transmission to the brakes and suspension. This ensures that every
              component is in optimal working order.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg carousel-item">
            <h4 className="text-xl font-black mb-2 buyh4 text-center">
              Peace of Mind
            </h4>
            <p className="mb-4 text-center">
              With Unifi Cars PDI, you can be assured that your car is safe,
              reliable, and ready for the road. Our inspection identifies any
              potential issues, allowing you to address them before they become
              major problems.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg carousel-item">
            <h4 className="text-xl font-black mb-2 buyh4 text-center">
              Expert Technicians
            </h4>
            <p className="mb-4 text-center">
              Our team of experienced technicians uses the latest tools and
              technology to provide accurate and reliable inspection reports.
              Trust the experts at Unifi Cars to give you a clear picture of
              your car's condition.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg carousel-item">
            <h4 className="text-xl font-black mb-2 buyh4 text-center">
              Reports
            </h4>
            <p className="mb-4 text-center">
              Receive a detailed report outlining the condition of each
              inspected component. Our transparent reporting helps you make
              informed decisions about any necessary repairs or maintenance.
            </p>
          </div>
        </div>
      </div> */}

      <TestimonialCarousel testimonialData={inspectionTestimonialData} />

      <HomeQuestions faqData={PdiFaqData} />
    </div>
  );
};

export default pdi;
