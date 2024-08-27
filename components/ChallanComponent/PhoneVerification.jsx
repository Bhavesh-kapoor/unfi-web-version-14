import axios from "axios";
import React, { useState } from "react";

const PhoneNumberVerification = ({ onVerify }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState(""); // State to track messages
  const [error, setError] = useState(""); // State to track error messages

  const sendOtp = async () => {
    try {
      const response = await axios.post(
        "https://crm.unificars.com/api/userlogin",
        {
          mobile: phoneNumber,
        }
      );
      return response;
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError("Failed to send OTP. Please try again.");
      throw err;
    }
  };

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setMessage(""); // Clear previous messages

    if (
      phoneNumber.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)
    ) {
      try {
        const response = await sendOtp();
        const jsonResponse = await response.data;

        if (jsonResponse.code === 200) {
          setOtpSent(true);
          setMessage("OTP sent successfully.");
        } else {
          console.error("Error sending OTP:", jsonResponse);
          setError("Error sending OTP. Please try again.");
        }
      } catch (err) {
        // Error is already handled in sendOtp
        setError("Error sending OTP. Please try again.");
      }
    } else {
      console.error("Invalid phone number format");
      setError("Invalid phone number format. Please enter a valid number.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setMessage(""); // Clear previous messages

    try {
      const res = await axios.post(
        "https://crm.unificars.com/api/userotpverify",
        {
          mobile: phoneNumber,
          otp: otp,
        }
      );
      const data = await res.data;

      if (data.code === 200) {
        setIsVerified(true);
        setMessage("Phone number verified successfully.");
        onVerify(phoneNumber); // Notify parent component about verification
      } else {
        console.error("OTP verification failed:", data);
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.log("OTP Error", error);
      setError("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full my-8 min-h-[50vh] mx-2">
      {!isVerified ? (
        otpSent ? (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 text-white p-2 px-4 rounded-lg w-full">
              Verify OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold">Verify Your Phone Number</h2>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              maxLength={10}
              required
            />
            <button
              type="submit"
              className="bg-orange-600 text-white p-2 px-4 rounded-lg w-full">
              Send OTP
            </button>
          </form>
        )
      ) : (
        <div className="text-2xl font-bold">Phone Number Verified!</div>
      )}
      {message && <div className="text-green-500 mt-4">{message}</div>}
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
};

export default PhoneNumberVerification;
