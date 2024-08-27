import { CheckIcon, ShieldCHeckIcon } from "@/common/IconsSvg";
import PaidChallan from "@/components/ChallanComponent/PaidChallan";
import PendingChallan from "@/components/ChallanComponent/PendingChallan";
import PhoneNumberVerification from "@/components/ChallanComponent/PhoneVerification";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ChallanDetail = () => {
  const router = useRouter();
  const { carNumber, chassisNumber } = router.query;

  const [currentTab, setCurrentTab] = useState("pending");
  const [challanData, setChallanData] = useState({});
  const [isVerified, setIsVerified] = useState(false); // Change to false initially
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const getChallanData = async (carNumber, chassisNumber) => {
    setIsLoading(true);

    try {
      let res = await fetch(
        "https://api.invincibleocean.com/invincible/vehicleChallanData",
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
            vehicleNumber: carNumber,
            chassisNumber: chassisNumber,
            advanceSearch: true,
          }),
        }
      );

      let challanInfo = await res.json();
      console.log("Challan API response:", challanInfo);

      if (challanInfo.code === 200) {
        setChallanData(challanInfo);
      } else {
        console.error(
          "Response from Vehicle Challan API is not valid:",
          challanInfo.message
        );
        // Handle error state or show appropriate message to the user
      }
    } catch (error) {
      console.error("Error fetching challan data:", error);
      // Handle network or other errors
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (isVerified) {
      getChallanData(carNumber, chassisNumber);
    }
  }, [carNumber, chassisNumber, isVerified]);

  const handleVerification = (verifiedPhoneNumber) => {
    setPhoneNumber(verifiedPhoneNumber);
    setIsVerified(true);
  };

  if (!isVerified) {
    return <PhoneNumberVerification onVerify={handleVerification} />;
  }

  return (
    <div className="mt-4 max-w-6xl px-2 mx-auto min-h-screen flex flex-wrap gap-4">
      <div className="md:min-h-screen w-full md:w-[18rem] bg-blue-50 p-4 flex flex-col gap-4 items-start">
        <h1 className="text-2xl font-bold">My Challan</h1>
        <div className="font-semibold space-y-4">
          <button
            onClick={() => setCurrentTab("pending")}
            className={`px-4 rounded-lg ${
              currentTab === "pending" ? "text-orange-500" : " px-4 rounded-lg"
            }`}>
            Pending Challan
          </button>
          <button
            onClick={() => setCurrentTab("paid")}
            className={`px-4 rounded-lg ${
              currentTab === "paid" ? "text-orange-500" : " px-4 rounded-lg"
            }`}>
            Paid Challan
          </button>
        </div>

        {/* info card */}
        <div className="hidden md:flex flex-col gap-2 bg-blue-500 p-4 rounded-lg text-white text-sm">
          <div className="flex items-center gap-2">
            <ShieldCHeckIcon className="w-5 h-5" />
            <span className="font-semibold text-base">
              Pay securely with unificars
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <span>Avoid Late Penalties</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <span>Pay From Anywhere</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <span>No Hassle Of Court Visits</span>
          </div>
        </div>
      </div>

      <div className="h-full flex-1 p-4">
        {isLoading ? (
          <p className="text-center mt-8">Loading...</p>
        ) : (
          <>
            {currentTab === "pending" && (
              <PendingChallan
                carNumber={carNumber}
                chassisNumber={chassisNumber}
                challanData={challanData}
                phoneNumber={phoneNumber}
              />
            )}
            {currentTab === "paid" && (
              <PaidChallan
                carNumber={carNumber}
                chassisNumber={chassisNumber}
                challanData={challanData}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChallanDetail;
