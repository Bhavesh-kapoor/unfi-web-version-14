import React, { useState } from "react";
import Head from "next/head";

import { FaRegHand, FaBuildingColumns } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";

const HomeQuestions = dynamic(() => import("@/components/Home/HomeQuestions"), {
  ssr: false,
});

const Challan = () => {
  const router = useRouter();

  const [carNumber, setCarNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
    input = input.replace(/(.{2})(?=.)/g, "$1 ");
    if (input.length > 10) {
      input = input.slice(0, 11) + input.slice(11, 15).trim();
    }
    if (input.length < 16) {
      setCarNumber(input.toUpperCase());
    }
  };

  const getCarDetails = async (carNum) => {
    try {
      const res = await axios.post(
        `https://crm.unificars.com/api/checkvehiclnumber`,
        { vehicle_number: carNum }
      );
      // console.log("res", res.data);
      return res.data.data;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

  const submitCarNumber = async () => {
    try {
      setLoading(true);
      if (carNumber.length === 13 || carNumber.length === 12) {
        let number = carNumber.split(" ").join("");

        let data = await getCarDetails(number);

        if (data === null) {
          const response = await fetch(
            "https://api.emptra.com/vehicleRegistrations",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                secretKey:
                  "MeCeLbdwp5KCuFuuCcQIuUKDTw5xyHPJT91zovHRmA5d6jBxAficW5kIP1DGvhNXL",
                clientId:
                  "d0d3422ec6d0ae9e4ed989dda9425204:b94cec676f7fb97bf04173cc262aeb9f",
              },
              body: JSON.stringify({
                vehicleNumber: number,
                blacklistCheck: true,
              }),
            }
          );

          data = await response.json();
        }

        if (data.code === 100) {
          router.push({
            pathname: "/challan-detail",
            query: {
              carNumber: number,
              chassisNumber: data.result.chassis.slice(-5),
            },
          });
        } else {
          setValidNumber(true);
          console.error("Response from Vehicle Info API is not valid");
        }
      }
    } catch (error) {
      setValidNumber(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>
          E Challan Check by Vehicle Number | Check E Challan Online
        </title>
        <meta
          name="description"
          content="E Challan Check by Vehicle Number made easy at UnifiCars. Quickly enter your vehicle number to pay or check e-challan online. Stay tuned with our service."
        />
        <meta
          name="keywords"
          content="E Challan Check by Vehicle Number, Check E Challan Online, Online Challan Payment, Pay Challan Online, E Challan Status, Unificars"
        />

        <meta
          property="og:title"
          content="E Challan Check by Vehicle Number | Check E Challan Online"
        />
        <meta
          property="og:description"
          content="E Challan Check by Vehicle Number made easy at UnifiCars. Quickly enter your vehicle number to pay or check e-challan online. Stay tuned with our service."
        />
        <meta
          property="og:url"
          content="https://www.unificars.com/challan-check"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="enter image url" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E Challan Check by Vehicle Number | Check E Challan Online"
        />
        <meta
          name="twitter:description"
          content="Quickly check and pay your e-challan online by entering your vehicle number. Unificars.com offers a fast and secure service."
        />
        <meta name="twitter:image" content="enter image url" />

        <link rel="canonical" href="https://www.unificars.com/challan-check" />
      </Head>

      <div className='bg-[url("/background/abtbg.jpg")]'>
        <div className="container mx-auto my-4 m-12 md:-mt-6">
          <div className="flex flex-wrap-reverse md:flex-nowrap items-start gap-16 md:m-9 m-4">
            <div className="space-y-12 w-full">
              <div className="relative w-full mx-auto">
                <img
                  src="/challan.png"
                  alt="Pay Challan with unifi cars"
                  className="w-full h-auto rounded-lg mt-6"
                />
                <div className="absolute inset-0 rounded-lg flex items-end p-4 mb-4">
                  <h1 className="text-white w-fit lg:text-5xl text-xl font-bold text-left">
                    Pay Challan with unifi cars
                  </h1>
                </div>
              </div>
              {/* <img src={"/challan.png"} className='rounded-xl' alt="E-challan" /> */}

              <div className="space-y-12">
                {/* e challan */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black mt-4 font-sansserif font-extrabold">
                    E-challan
                  </h2>
                  <p className="text-md font-normal">
                    An e-challan is a digital fine issued by the traffic police
                    for a traffic violation. An e-challan can be checked online,
                    which gives the details of the fine, the current challan
                    status, the challan amount, and an option to pay e-challan
                    online. An issued e-challan can be checked through the
                    Parivahan portal or by using the Spinny tool. The
                    step-by-step guide for paying e-challan online is easy to
                    follow and lets you conveniently clear the challan without
                    visiting the court.
                  </p>
                </div>

                {/* how to check  */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black mt-4 font-sansserif font-extrabold">
                    How to check e-challan
                  </h2>
                  <p className="text-md font-normal">
                    Enter the registration number of your car and click submit
                    to check any issued e-challan to know the challan status for
                    your car. All pending and unpaid e-challans for your car
                    will be shown, with the option to pay the fines to clear the
                    challan. Checking e-challan online is a convenient way to
                    stay updated with challan status of your car while also
                    paying the e-challan online for minimal inconvenience to
                    you.
                  </p>
                </div>

                {/* benifit of e-challan */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black font-sansserif font-extrabold">
                    Benefits of paying challan online with Unifi cars
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md h-56">
                      <FaRegHand className="text-2xl mb-4" />
                      <h3 className="text-base font-semibold mb-2 buyh4">
                        Avoid Late
                        <br />
                        Penalties
                      </h3>
                      <p className="mb-4">
                        Get an accurate and fair quote for scrapping your car
                        and helping the environment.
                      </p>
                    </div>
                    <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md h-56">
                      <FaRupeeSign className="text-2xl mb-4" />
                      <h3 className="text-base font-semibold mb-2 buyh4">
                        Pay From <br /> Anywhere
                      </h3>
                      <p className="mb-4">
                        Get benefits on buying a new car with a Certificate of
                        deposit.
                      </p>
                    </div>
                    <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md h-56">
                      <FaBuildingColumns className="text-2xl mb-4" />
                      <h3 className="text-base font-semibold mb-2 buyh4">
                        No Hassle Of <br />
                        Court Visits
                      </h3>
                      <p className="mb-4">
                        Unifi Cars partners only with Government-registered
                        vendors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* step */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black font-sansserif font-extrabold">
                    Steps to pay e-challan
                  </h2>
                  <div className="mt-3">
                    <p className="mb-4">
                      <b>Steps:1</b> Navigate to check and pay e-challan
                      Section.
                    </p>
                    <p className="mb-4">
                      <b>Steps:2</b> Enter Challan Details such as e-challan
                      number, vehicle number, or license plate number.
                    </p>
                    <p className="mb-4">
                      <b>Steps:3</b> Select Payment Method like credit/debit
                      cards, net banking, or digital wallets and make the
                      payment.
                    </p>
                    <p className="mb-4">
                      <b>Steps:4</b> Save Confirmation Receipt for your records.
                    </p>
                  </div>
                </div>

                {/* table */}
                <div className="space-y-4">
                  <h2 className="text-2xl text-black font-extrabold">
                    What are the common type of traffic challan?
                  </h2>
                  <div className="flex items-center justify-center h-full bg-gray-100 mt-3">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/4">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Challan
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Challan Penalty
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Driving Under Intoxication
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              First Offense: Rs. 10000 and/or 6 months in
                              prison. Second Offense: Rs. 15000 and/or 2 years
                              in prison
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Overloading Pillion Riders
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Rs. 2000 fine + disqualification of license and/or
                              community service for 3 months
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Over Speeding Vehicle
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Rs. 1000 for LMV, Rs. 2000 for MMV
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Driving Dangerously
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Rs. 1000 – Rs. 5000, seizure of license, and/or 6
                              months - 1 year in prison
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Driving Without License
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Rs. 5000 and/or community service
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Driving Without Valid Insurance
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              First Offense: Rs. 2000 and/or 3 months in prison,
                              community service. Second Offense: Rs. 4000
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 bg-white text-sm">
                              Signal Jumping
                            </td>
                            <td className="px-5 py-5 bg-white text-sm">
                              Rs. 1000 – Rs. 5000, license seizure, and/or fine
                              for dangerous driving
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* e-challan check */}
            <div className="border-2 border-red-500 md:mt-4 max-w-[500px] w-full md:sticky-element md:sticky md:top-36  md:bottom-28 bg-orange-500 p-4 self-baseline challan-headbg">
              <div className="bg-white p-6 md:px-2 px-6 rounded-2xl shadow">
                <div className="p-3 rounded-md">
                  <h2 className="text-3xl text-black my-2 font-sansserif font-extrabold text-center">
                    Check & Pay e-challan
                  </h2>
                  <div className="font-bold text-[#465166] w-full text-field mb-2">
                    <p className="text-md text-[#465166] my-2">
                      Enter your car Number
                    </p>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2 w-full"
                      placeholder="AA 11 AA 1111"
                      value={carNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  {loading ? (
                    <div className="loader">Loading...</div>
                  ) : (
                    <button
                      className={`bg-[#f38102] p-2 my-4 rounded-sm w-full font-bold text-white`}
                      onClick={submitCarNumber}
                    >
                      View Challan
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeQuestions />
      </div>
    </div>
  );
};

export default Challan;
