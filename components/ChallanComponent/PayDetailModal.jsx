import { CloseIcon } from "@/common/IconsSvg";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const PayDetailModal = ({ selectedChallans, handleCloseModal }) => {
  const [paymentMessage, setPaymentMessage] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  useEffect(() => {
    // Check if Razorpay script is loaded
    if (window.Razorpay) {
      setIsRazorpayLoaded(true);
    } else {
      // Retry after some time if the script is not yet loaded
      const interval = setInterval(() => {
        if (window.Razorpay) {
          setIsRazorpayLoaded(true);
          clearInterval(interval);
        }
      }, 1000);
    }
  }, []);

  const handleConfirmPayment = () => {
    const totalChallanAmount = selectedChallans.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );
    const PlatformFee = Math.ceil(totalChallanAmount / 18 + 100);
    const totalAmount = PlatformFee + totalChallanAmount;

    const options = {
      key: "rzp_test_tX7OYv8wO9psps",
      amount: totalAmount * 100, // Amount in paise
      currency: "INR",
      name: "Unificars",
      description: "Chalan Payment",
      image: "/logo.png",
      handler: function (response) {
        console.log(response);
        setPaymentMessage("Payment Successful!");
        setPaymentError("");
      },
      prefill: {
        contact: selectedChallans[0].phoneNumber,
      },
      notes: {
        VehicleNumber: selectedChallans[0].carNumber,
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          setPaymentError("Payment Cancelled.");
          setPaymentMessage("");
        },
      },
    };

    if (isRazorpayLoaded) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      setPaymentError("Payment gateway is not loaded. Please try again later.");
    }
  };

  const totalChallanAmount = selectedChallans.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const PlatformFee = Math.ceil(totalChallanAmount / 18 + 100);
  const totalAmount = PlatformFee + totalChallanAmount;

  return (
    <div>
      <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" />
      </Head>

      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-[100]">
        <div className="relative bg-orange-50 rounded-lg p-4 md:p-6 min-w-96 max-w-[600px] w-[95%] md:min-w-[500px] h-[90%] overflow-y-auto">
          <div
            className="sticky top-0 right-0 flex justify-end cursor-pointer"
            onClick={handleCloseModal}>
            <CloseIcon className="bg-gray-300 p-1 rounded-full" />
          </div>

          <h2 className="text-2xl font-bold mb-4 -mt-8">Payment Summary</h2>

          <div className="mb-4 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Challan No:
              </h3>
              <ul className="font-semibold border border-gray-500 p-4 rounded-xl">
                {selectedChallans.map((challan, index) =>
                  challan.challanNumber ? (
                    <li key={index}>{challan.challanNumber}</li>
                  ) : null
                )}
              </ul>
            </div>

            <div className="flex gap-2 flex-wrap justify-between items-center">
              <h3>Vehicle No:</h3>
              <p className="text-gray-700 font-bold">
                {selectedChallans[0].carNumber}
              </p>
            </div>

            {selectedChallans[0].phoneNumber && (
              <div className="flex gap-2 flex-wrap justify-between items-center">
                <h3>Phone No:</h3>
                <p className="text-gray-700 font-bold">
                  {selectedChallans[0].phoneNumber}
                </p>
              </div>
            )}

            <hr />

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Offence:</h3>
              {selectedChallans.map((challan, index) => (
                <p key={index} className="border-b last:border-none pb-2">
                  {challan.offenseDetails}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Challan Amount
              </h3>
              <p className="text-2xl font-bold">₹{totalChallanAmount}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Platform Fee + GST
              </h3>
              <p className="text-2xl font-bold">₹{PlatformFee}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Total Amount
              </h3>
              <p className="text-2xl font-bold">₹{totalAmount}</p>
            </div>
          </div>

          {paymentMessage && (
            <div className="text-green-500 mb-4">{paymentMessage}</div>
          )}
          {paymentError && (
            <div className="text-red-500 mb-4">{paymentError}</div>
          )}

          <div className="sticky -bottom-6 pb-4 p-2 md:p-2 flex justify-end bg-orange-50/90">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
              onClick={handleConfirmPayment}>
              Confirm Payment
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayDetailModal;
