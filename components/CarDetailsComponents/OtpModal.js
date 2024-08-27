import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LinearProgress from "@mui/material/LinearProgress";
import { orange } from "@mui/material/colors";

const OtpModal = (props) => {
  const { showModal, setShowModal, carId, setCarDetailsModal } = props;
  const router = useRouter();

  const [UserNumber, setUserNumber] = useState("");
  const [progress, setProgress] = useState(0);
  const [Otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [optNotRevieve, setOptNotRevieve] = useState(false);
  const [message, setMessage] = useState({});
  const [ToggleNumberTabAfterOtpRecevied, setToggleNumberTabAfterOtpRecevied] =
    useState(false);

  const HandleCloseModal = () => {
    setUserNumber("");
    setToggleNumberTabAfterOtpRecevied(false);
    setOtp("");
    setLoading(false);
    setOptNotRevieve(false);
    setShowModal(false);
    setMessage({});
  };

  const sendOtp = async () => {
    const data = {
      mobile: UserNumber,
      lead_id: carId,
    };
    const url = `https://crm.unificars.com/api/webotp`;
    const resdata = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    return resdata;
  };

  const HandleReSendOtp = async () => {
    const fetchOtpRes = await sendOtp();
    const jsonResponse = await fetchOtpRes.json();
    if (jsonResponse) {
      setOptNotRevieve(true);
    }
  };

  const HandelFormSubmit = async (e) => {
    e.preventDefault();
    if (
      UserNumber.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)
    ) {
      setLoading(true);
      const fetchOtpRes = await sendOtp();
      const jsonResponse = await fetchOtpRes.json();
      if (jsonResponse.code == 200) {
        // setting message to empty before showing otp modalClasses
        setMessage({});
        setLoading(false);
        setToggleNumberTabAfterOtpRecevied(true);
      } else {
        setMessage(jsonResponse);
        setLoading(false);
      }
    } else {
      setLoading(false);
      setMessage({ code: 400, status: ["Please Enter a Valid Number"] });
    }
  };

  const HandelOtpSubmit = async (e) => {
    e.preventDefault();
    if (Otp != "") {
      const data = {
        mobile: UserNumber,
        lead_id: carId,
        otp: Otp,
      };
      const url = `https://crm.unificars.com/api/webotpverify`;
      const fetchOtpRes = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      const jsonResponse = await fetchOtpRes.json();
      if (jsonResponse.code == 200) {
        setMessage(jsonResponse);
        if (jsonResponse.link) {
          setLoading(true);
          setMessage({
            code: 200,
            status: ["Please Wait while Fecthing a Report..."],
          });
          // router.push(jsonResponse.link);
          setShowModal(false);

          setCarDetailsModal(true);

          // for showing progress
          setInterval(() => {
            setProgress((pre) => pre + 20);
            if (progress + 20 === 100) {
              clearInterval(interval);
            }
          }, 1000);
          setTimeout(() => {
            HandleCloseModal();
            setUserNumber("");
            setOtp("");
            setLoading(false);
          }, 6000);
        }
      } else {
        setMessage(jsonResponse);
      }
    }
  };

  return (
    <div
      className={`fixed bottom-0 flex justify-center items-center ${
        showModal ? "h-full" : "h-0"
      } overflow-hidden bg-black/50 z-40 transition-all duration-500 w-full`}>
      <div className="bg-white p-4 rounded-xl shadow w-80 md:w-1/3 relative">
        <div
          className="absolute cursor-pointer top-4 right-4"
          onClick={() => HandleCloseModal()}>
          <AiOutlineClose className="text-xl" />
        </div>
        <div
          className={`overflow-hidden transition-all duration-200 ${
            ToggleNumberTabAfterOtpRecevied ? "w-0 hidden" : "w-full"
          }`}>
          <div className="flex justify-center">
            <Image
              src={"/report.svg"}
              alt="report"
              width={200}
              height={200}
              className="w-20"
            />
          </div>
          <div className="text-center">
            <h6 className="text-lg font-black text-black/70 py-2">
              Enter Your Number to download Report
            </h6>
          </div>
          <form onSubmit={HandelFormSubmit}>
            <label className="block my-2">
              <input
                type="text"
                maxLength={10}
                required
                className="peer text-black/60 outline-[#f38102] outline-[1px] border border-black/20 w-full p-2"
                placeholder="Enter Phone Number"
                onChange={(e) => {
                  setUserNumber(e.target.value);
                }}
                value={UserNumber}
              />
              <p className="text-[8px] text-gray-400">
                We will never share your personal deatail with anyone.
              </p>
              {message && message.code ? (
                message.status.map((msg, index) => {
                  return (
                    <p
                      key={index}
                      className={`mt-2 text-red-500 text-xs ${
                        message.code == 200 ? "text-green-500" : "text-red-500"
                      }`}>
                      {msg}.
                    </p>
                  );
                })
              ) : (
                <></>
              )}
            </label>
            <button
              type="submit"
              className="border w-full p-2 rounded shadow transition-all duration-200 flex justify-center group bg-blue-500 text-white"
              disabled={loading}>
              <svg
                hidden={!loading}
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="gray"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75 fill-[#f38102] group-disabled:fill-[#f38102] group-hover:fill-white"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-center">Send OTP</p>
            </button>
          </form>
        </div>
        <div
          className={`overflow-hidden transition-all duration-200 ${
            ToggleNumberTabAfterOtpRecevied ? " w-full block" : "w-0 hidden"
          }`}>
          <div className="text-center">
            <h6 className="text-base text-black/70 pt-2">
              Please Enter Your OTP
            </h6>
            <p className="text-[10px] text-green-500">
              The OTP has send to ******{UserNumber.slice(6)}
            </p>
            <p className="text-center text-xs">
              Not Your Number?{" "}
              <button
                className="text-blue-500"
                onClick={() => {
                  setUserNumber("");
                  setToggleNumberTabAfterOtpRecevied(false);
                }}>
                {" "}
                click here
              </button>
            </p>
          </div>

          <form onSubmit={HandelOtpSubmit}>
            <label className="block mt-4">
              <input
                type="text"
                maxLength={6}
                className="peer text-black/60 outline-[#f38102] outline-[1px] border border-black/20 w-full p-2"
                placeholder="Enter Your OTP"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
              {message && message.code ? (
                message.status.map((msg, index) => {
                  return (
                    <p
                      key={index}
                      className={`mt-2 text-red-500 text-xs ${
                        message.code == 200 ? "text-green-500" : "text-red-500"
                      }`}>
                      {msg}.
                    </p>
                  );
                })
              ) : (
                <></>
              )}
            </label>
            <div className="my-2">
              {!optNotRevieve ? (
                <p className="text-xs">
                  Did not Recieve OTP?
                  <button
                    className="text-blue-500"
                    onClick={() => {
                      HandleReSendOtp();
                    }}>
                    {" "}
                    Click Here
                  </button>
                </p>
              ) : (
                <p className="text-xs text-green-500">
                  OTP has been resend
                  {/* <button className='text-red-500' onClick={() => { setUserNumber(""); setToggleNumberTabAfterOtpRecevied(false); setOptNotRevieve(false) }}>Please Click Here</button> */}
                </p>
              )}
            </div>
            {progress && progress > 0 ? (
              <div className="my-4">
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    "& .MuiLinearProgress-bar": { backgroundColor: "#f38102" },
                  }}
                />
              </div>
            ) : (
              <></>
            )}
            <button
              type="submit"
              className="border border-[#f38102] text-[#f38102] active:bg-orange-600 hover:bg-[#f38102] hover:text-white w-full p-1 rounded shadow transition-all duration-200 flex justify-center group disabled:bg-white disabled:text-[#f38102]"
              disabled={loading}>
              <svg
                hidden={!loading}
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="gray"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75 fill-[#f38102] group-disabled:fill-[#f38102] group-hover:fill-white"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-center">Submit OTP</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
