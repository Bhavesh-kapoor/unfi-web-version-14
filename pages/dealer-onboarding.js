import React, { useState } from "react";

import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";
import Link from "next/link";
import { dealerTestimonialData } from "@/common/testimonialData";
import { CheckIcon } from "@/common/IconsSvg";

const dealership = () => {
  const router = useRouter();
  const [UserDetails, setUserDetails] = useState({
    fname: "",
    email: "",
    mobile: "",
    state: "",
    check: false,
  });
  const [msg, setMsg] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const UserInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) =>
      name === "check"
        ? { ...prevDetails, check: !prevDetails.check }
        : { ...prevDetails, [name]: value }
    );
  };

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, state, otp } = UserDetails;

    if (otp) {
      const res = await fetch("https://crm.unificars.com/api/verifyotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp, is_verify: "1" }),
      });
      const data = await res.json();
      if (data.code === 200) {
        setMsg(data.message);
        router.push("/thankyou");
      } else {
        setMsg(data.message);
      }
    } else if (
      fname &&
      state &&
      mobile.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/) &&
      email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    ) {
      const res = await fetch("https://crm.unificars.com/api/mobileotpsend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UserDetails),
      });
      const data = await res.json();
      if (data.code === 200) {
        setMsg(data.message);
        setIsFormSubmitted(true);
      }
    }
  };

  return (
    <div className="relative">
      <div className="relative pb-12 min-h-[600px]">
        <div className="-mt-8">
          <div className="bg-[#0E223B] w-full h-[70%] absolute -z-20" />
          <div className="xl:container mx-auto md:block hidden -top-12">
            <Image
              width={1479 / 2}
              height={1450 / 2}
              src="/Banner-Image.png"
              className="h-full w-fit absolute -z-10"
            />
          </div>
        </div>

        <div className="py-8 container mx-auto">
          <div
            className="w-[90%] bg-white p-4 md:p-7 rounded-xl m-12 mb-0 mx-auto md:mr-12 max-w-xl"
            style={{
              boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.25)",
              marginLeft: "auto",
            }}
          >
            <h3 className="font-bold text-2xl my-2 capitalize text-center">
              BECOME OUR CHANNEL PARTNER
            </h3>

            <form onSubmit={HandleFormSubmit} id="enquiry">
              <div className="box form-grp w-full mt-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fname"
                  id="fname"
                  onChange={(e) => UserInputChange(e)}
                  value={UserDetails.fname}
                  required
                />
              </div>
              <div className="box form-grp w-full mt-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  onChange={(e) => UserInputChange(e)}
                  value={UserDetails.email}
                  required
                />
              </div>

              <div className="box form-grp w-full mt-2">
                <select
                  className="form-select"
                  name="state"
                  onChange={(e) => UserInputChange(e)}
                  id="state"
                  style={{
                    padding: "8px",
                    border: "1px solid black",
                    borderRadius: "15px",
                    color: "rgb(34 34 34/79%)",
                    fontWeight: "200",
                    background: "white",
                  }}
                  required
                >
                  <option selected>Select Your State</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>

              <div className="box form-grp w-full mt-2">
                <input
                  type="number"
                  placeholder="Your Mobile"
                  name="mobile"
                  id="mobile"
                  onChange={(e) => UserInputChange(e)}
                  value={UserDetails.mobile}
                  required
                />
              </div>

              <div
                className="box w-full form-grp mt-5"
                style={{ display: isFormSubmitted ? "flex" : "none" }}
              >
                <input
                  type="number"
                  placeholder="OTP"
                  name="otp"
                  id="otp"
                  onChange={(e) => UserInputChange(e)}
                  value={UserDetails.otp}
                  requiredb={isFormSubmitted}
                />

                <span id="otp_error" className=""></span>
              </div>
              <div className="form-grp">
                {!isFormSubmitted && ( // Show the 'Send OTP' button if form is not submitted
                  <button
                    type="submit"
                    className="bg-orange-500 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-700 mt-4"
                  >
                    Register Now
                  </button>
                )}
                {isFormSubmitted && ( // Show the 'Verify OTP' button if form is submitted
                  <button
                    type="submit"
                    className="bg-orange-700 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-700 mt-4"
                    style={{ width: "100%" }}
                  >
                    Verify OTP
                  </button>
                )}
              </div>
              <span className="prvtag">
                We respect your privacy. Your information is confidential with
                us.
              </span>
              <div className="text-green-500">{msg}</div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto items-center">
        <div className="p-4">
          <div className="">
            <div className="text-center items-center flex flex-col mb-6">
              <h2 className="text-3xl font-black">Why Partners with Us</h2>
              <p className="my-4 mx-4">
                Unifi Cars ensures every deal is built on clarity, trust, and
                experience so you can make smart and secure purchases.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center flex flex-wrap justify-center align-item-center">
                <Image
                  width={250}
                  height={250}
                  src="/carousel/WCU1.jpg"
                  className="img-fluid h-64 transition object-cover duration-300 transform hover:scale-110 whychooseus relative"
                  alt="howitworks"
                />
                <div className="after"></div>
                <div className="px-4 absolute"></div>
              </div>
              <div className="text-center flex flex-wrap justify-center align-item-center">
                <Image
                  width={250}
                  height={250}
                  src="/carousel/WCU2.jpg"
                  className="img-fluid h-64 transition object-cover duration-300 transform hover:scale-110 whychooseus relative"
                  alt="howitworks"
                />
                <div className="px-4 absolute"></div>
              </div>
              <div className="text-center flex flex-wrap justify-center align-item-center">
                <Image
                  width={250}
                  height={250}
                  src="/carousel/WCU3.png"
                  className="img-fluid h-64 transition object-cover duration-300 transform hover:scale-110 whychooseus relative"
                  alt="howitworks"
                />
              </div>
              <div className="text-center flex flex-wrap justify-center align-item-center">
                <Image
                  width={250}
                  height={250}
                  src="/carousel/WCU4.png"
                  className="img-fluid h-64 transition object-cover duration-300 transform hover:scale-110 whychooseus relative"
                  alt="howitworks"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-10 text-center bg-gradient-radial from-white text-gray-600">
          <div className="w-11/12 mx-auto">
            <div className="text-center items-center flex flex-col mb-6">
              <h2 className="text-3xl text-[#000] font-black">
                How It Works !
              </h2>
              <p className="text-lg my-4 md:max-w-xl">
                Follow these steps to become our partner and start benefiting
                from our wide range of cars.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center flex items-end flex-wrap justify-center py-6 gap-4">
                <Image
                  width={150}
                  height={200}
                  src="/icons/biding.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    Bid placing
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    You can easily start bidding from our wide range of cars.
                  </p>
                </div>
              </div>

              <div className="text-center flex items-end flex-wrap justify-center cardhow py-6 gap-4">
                <Image
                  width={150}
                  height={200}
                  src="/icons/dealclose.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    Deal closing
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    Close the great car deal after successfully winning the bid.
                  </p>
                </div>
              </div>

              <div className="text-center flex items-end flex-wrap justify-center py-6 gap-4">
                <Image
                  width={150}
                  height={200}
                  src="/icons/deliverytime.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    Delivery time
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    After payment, we provide doorstep delivery with documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap-reverse md:flex-nowrap container mx-auto gap-4 mt-10 mb-16 lg:mt-10 border-2 rounded-xl">
        <div className=" mx-4 mt-2 font-bold place-self-center">
          <h2 className="py-2 text-4xl font-black text-black text-center md:text-start">
            How to join us
          </h2>
          <p className="font-semibold text-black my-2 text-center md:text-start">
            Join our family in 4 simple steps.
          </p>
          <ul className="my-12 flex flex-col gap-6 ">
            <li className="flex font-bold text-lg">
              <div className="flex-none pt-1 mr-2">
                <CheckIcon className="bg-[#FFB648] text-xl rounded-full text-[#ffffff]" />
              </div>
              <span>
                Register yourself and our Executive will contact you within 24
                Hours.
              </span>
            </li>

            <li className="flex font-bold text-lg">
              <div className="flex-none pt-1 mr-2">
                <CheckIcon className="bg-[#FFB648] text-xl rounded-full text-[#ffffff]" />
              </div>
              <span>Download the app via playstore or app store</span>
            </li>

            <li className="flex font-bold text-lg">
              <div className="flex-none pt-1 mr-2">
                <CheckIcon className="bg-[#FFB648] text-xl rounded-full text-[#ffffff]" />
              </div>
              <span>Verifying your profile</span>
            </li>

            <li className="flex font-bold text-lg">
              <div className="flex-none pt-1 mr-2">
                <CheckIcon className="bg-[#FFB648] text-xl rounded-full text-[#ffffff]" />
              </div>
              <span>Start bidding on the cars</span>
            </li>
          </ul>
        </div>

        <div className="w-fit">
          <Link href="https://api.unificars.com/front/img/icon/hiw1copy.png">
            <Image
              width={400}
              height={300}
              src={"/howtojoin.png"}
              alt="How to join us"
              className="rounded-xl max-w-full"
            />
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <Link href="https://api.unificars.com/front/img/icon/hiw1copy.png">
          <Image
            width={3840 / 3}
            height={1302 / 3}
            src={"/dealer-download.jpg"}
            className="rounded-xl object-cover w-full"
            alt="Download Banner"
          />
        </Link>
      </div>

      <TestimonialCarousel testimonialData={dealerTestimonialData} />

      <style jsx>{`
        * {
          -webkit-appearance: none;
        }
        ::placeholder {
          color: gray;
          font-size: 14px;
          font-weight: lighter;
          // padding-left:10px;
        }
        .ribbon-pop {
          background: linear-gradient(270deg, #f45006 5.25%, #f4a72b 96.68%);
          display: inline-block;
          padding: 10px 40px 10px 40px;
          color: white;
          position: relative;
          margin-left: -44px;
          width: 100%;
        }
        .ribbon-pop:after {
          content: "";
          width: 0;
          height: 0;
          top: 0;
          position: absolute;
          right: 0;
          border-right: 20px solid #c3e0ff;
          border-top: 25px solid transparent;
          border-bottom: 25px solid transparent;
        }
        .ribbon-pop:before {
          height: 0;
          width: 0;
          border-top: 15px solid #e38102;
          border-left: 15px solid transparent;
          bottom: -15px;
          position: absolute;
          content: "";
          left: 0;
        }

        input {
          font-size: 20px;
          font-weight: 500;
          padding-left: 10px;
          line-height: inherit;
          color: gray !important;
        }
        .bannerimage {
          object-fit: cover;
          width: 100%;
        }
        form .box {
          display: inline-flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 0 3px #ddd;
          overflow: hidden;
          border-radius: 15px;
          background: #fff;
        }
        form .box label {
          position: absolute;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 0 0 10px;
          width: 100%;
          height: 100%;
          color: rgb(34 34 34 / 79%);
          user-select: none;
          transition: 0.5s;
          font-weight: 200;
        }
        form .box input {
          padding: 8px;
          border: 1px solid #5b5b5b;
          outline: none;
          border-radius: 15px;
          transition: 0.5s;
        }

        // form .box input:focus + label, form .box input:not(:placeholder-shown) + label {
        //     transform: translateY(-30%);
        //     font-size: 0.6rem;
        // }

        // form .box input:not(:placeholder-shown) {
        //     border-bottom: 3px solid #f38120;
        // }

        form button {
          width: 100%;
          align-self: flex-end;
          padding: 10px 5px;
          border-radius: 0.75rem;
          color: #fff;
          border: none;
          transition: 0.3s;
        }
        form button:hover {
          background: #aaa;
        }
        .setmaindiv3 {
          border-radius: 20px;
        }
        .customgryfnt {
          color: #5b5b5b;
          font-weight: 200;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* Firefox */
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://crm.unificars.com/api/endpoint");
  const text = await res.text(); // response ko text format me read karein

  let data;
  try {
    data = JSON.parse(text); // text ko JSON parse karein
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    console.error("Response Text:", text);
    data = null; // agar JSON parse fail hota hai, to data ko null set karein
  }

  // Pass data to the page via props
  return { props: { data } };
}

export default dealership;
