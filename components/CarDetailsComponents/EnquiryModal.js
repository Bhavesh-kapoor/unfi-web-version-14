import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const EnquiryModal = (props) => {
  const { carId, showEnquiryModal, setShowEnquiryModal } = props;

  const [loading, setLoading] = useState(false);
  const [userInputPage, setUserInputPage] = useState(true);
  const [otpInput, setOtpInput] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState([]);
  const [optNotRevieve, setOptNotRevieve] = useState(false);

  const HandleCloseModal = () => {
    setShowEnquiryModal(false);
    setUserInputPage(true);
    setLoading(false);
    setOtpVerified(false);
    setOtpInput("");
    setUserDetails({ name: "", email: "", phone: "" });
  };

  const HandleOtpVErifyFormSubmit = async (e) => {
    e.preventDefault();
    if (otpInput != "") {
      const data = {
        phone: userDetails.phone,
        otp: otpInput,
      };
      setLoading(true);
      const url = `https://crm.unificars.com/api/verifybooktestdrive`;
      const fetchOtpRes = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      const jsonResponse = await fetchOtpRes.json();
      // console.log(jsonResponse, "form otp verify")
      if (jsonResponse.code == 200) {
        setMessage(jsonResponse.message);
        setTimeout(() => {
          setOtpVerified(true);
        }, 2000);
      } else {
        setLoading(false);
        setMessage(jsonResponse.message);
      }
    }
  };

  // const HandleReSendOtp = () => {
  //   // send otp again
  //   setLoading(false)
  //   setOptNotRevieve(true)
  // }

  const sendOtp = async () => {
    const data = { ...userDetails, lead_id: carId };
    const url = `https://crm.unificars.com/api/booktestdrive`;
    const resdata = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    return resdata;
  };

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone } = userDetails;
    if (
      name != "" &&
      email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) &&
      phone.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)
    ) {
      setLoading(true);
      const sendOtpRes = await sendOtp();
      const jsonResponse = await sendOtpRes.json();
      // s.log(jsonResponse)
      if (jsonResponse.code == 200) {
        setMessage(jsonResponse.status);
        setLoading(false);
        setUserInputPage(false);
      } else {
        setLoading(false);
        setMessage(jsonResponse.status);
      }
    } else {
      setMessage(["Please Enter a Valid Number"]);
    }
    // console.log(userDetails)
  };

  const HandleFormChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const HandleReSendOtp = async () => {
    const fetchOtpRes = await sendOtp();
    const jsonResponse = await fetchOtpRes.json();
    if (jsonResponse) {
      setOptNotRevieve(true);
    }
  };

  return (
    <div
      className={`fixed bottom-0 flex justify-center items-center ${
        showEnquiryModal ? "h-full" : "h-0"
      } overflow-hidden bg-black/50 z-40 transition-all duration-500 w-full`}
    >
      <div className="bg-white rounded-xl shadow w-80 md:w-3/5 relative">
        <div
          className="absolute cursor-pointer top-4 right-4"
          onClick={() => HandleCloseModal()}
        >
          <AiOutlineClose className="text-xl" />
        </div>
        {otpVerified ? (
          <div>
            <div className="w-2/3 mx-auto">
              <Image
                src="/enquireBooked.svg"
                width={200}
                height={200}
                alt="enquie"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-2xl text-[#f38102] whitespace-nowrap">
                Enquiry has been booked
              </h3>
              <p className="text-sm text-black/60">
                Our team will reach out shortly!
              </p>
            </div>
          </div>
        ) : (
          <div className="lg:grid grid-cols-2">
            <div className="hidden lg:block">
              <Image
                src={"/enquiry.svg"}
                width={200}
                height={200}
                alt="enquie"
                className="w-full h-full"
              />
            </div>

            <div className="p-4">
              <div className="mb-4">
                <h1 className="text-xl font-black">
                  Fill The Form To Send Enquire
                </h1>
              </div>
              <form onSubmit={HandleFormSubmit}>
                <div className="flex flex-col gap-4 mb-3">
                  <label>
                    <p className="text-sm text-black/70 mb-1">
                      Enter Your Name
                    </p>
                    <input
                      name="name"
                      required
                      readOnly={!userInputPage}
                      value={userDetails.name}
                      onChange={(e) => {
                        HandleFormChange(e);
                      }}
                      className="peer text-black/60 outline-[#f38102] outline-1 border border-black/20 w-full p-1 rounded"
                    />
                  </label>
                  <label>
                    <p className="text-sm text-black/70 mb-1">
                      Enter Your E-Mail
                    </p>
                    <input
                      name="email"
                      required
                      type="email"
                      readOnly={!userInputPage}
                      value={userDetails.email}
                      onChange={(e) => {
                        HandleFormChange(e);
                      }}
                      className="peer text-black/60 outline-[#f38102] outline-1 border border-black/20 w-full p-1 rounded"
                    />
                  </label>
                  <label>
                    <p className="text-sm text-black/70 mb-1">
                      Enter Your Phone
                    </p>
                    <input
                      name="phone"
                      maxLength={10}
                      required
                      readOnly={!userInputPage}
                      value={userDetails.phone}
                      onChange={(e) => {
                        HandleFormChange(e);
                      }}
                      className="peer text-black/60 outline-[#f38102] outline-1 border border-black/20 w-full p-1 rounded"
                    />
                    <p className="text-[10px] font-thin text-black/70">
                      We will never share your detail with anyone
                    </p>
                  </label>
                </div>
                {userInputPage ? (
                  <button
                    type="submit"
                    className="border w-full p-2 rounded shadow transition-all duration-200 flex justify-center group bg-blue-500 text-white"
                    disabled={loading}
                  >
                    <svg
                      hidden={!loading}
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="gray"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75 fill-[#f38102] group-disabled:fill-[#f38102] group-hover:fill-white"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <p className="text-center">Send OTP</p>
                  </button>
                ) : (
                  <></>
                )}
                {message ? (
                  message.map((msg, index) => {
                    return (
                      <p
                        key={index}
                        className={`mt-2 text-red-500 text-xs ${
                          message.code == 200
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {msg}.
                      </p>
                    );
                  })
                ) : (
                  <></>
                )}
              </form>

              {!userInputPage ? (
                <form className="my-2" onSubmit={HandleOtpVErifyFormSubmit}>
                  <label htmlFor="">
                    <input
                      placeholder="Enter Your OTP"
                      value={otpInput}
                      onChange={(e) => {
                        setOtpInput(e.target.value);
                      }}
                      className="peer text-black/60 outline-[#f38102] outline-1 border border-black/20 w-full p-1 rounded"
                    />
                  </label>

                  <div>
                    {!optNotRevieve ? (
                      <p className="text-xs">
                        Did not Recieve OTP?
                        <button
                          className="text-blue-500"
                          onClick={() => {
                            HandleReSendOtp();
                          }}
                        >
                          {" "}
                          Click Here
                        </button>
                      </p>
                    ) : (
                      <p className="text-xs text-green-500">
                        OTP has been resend
                        {/* <button className='text-red-500' onClick={() => { setUserNumber(""); setOptNotRevieve(false) }}>Please Click Here</button> */}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="border my-4 border-[#f38102] text-[#f38102] active:bg-orange-600 hover:bg-[#f38102] hover:text-white w-full p-1 rounded shadow transition-all duration-200 flex justify-center group disabled:bg-white disabled:text-[#f38102]"
                    disabled={loading}
                  >
                    <svg
                      hidden={!loading}
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="gray"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75 fill-[#f38102] group-disabled:fill-[#f38102] group-hover:fill-white"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <p className="text-center">Submit Enquiry</p>
                  </button>
                </form>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
