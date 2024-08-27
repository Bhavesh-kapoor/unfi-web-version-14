import React, { useState, useEffect } from "react";
import ChallanMoreInfo from "./ChallanMoreInfo";
import PayDetailModal from "./PayDetailModal";
import { useRouter } from "next/router";

const PendingChallan = ({
  challanData,
  carNumber,
  chassisNumber,
  phoneNumber,
}) => {
  const router = useRouter();

  const [selectedChallans, setSelectedChallans] = useState([]);
  const [modalChallan, setModalChallan] = useState(null);
  const [payDetailModalOpen, setPayDetailModalOpen] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSelectChallan = (challan) => {
    const challanInfo = {
      challanNumber: challan?.challanNumber,
      offenseDetails: challan?.offenseDetails,
      carNumber: carNumber,
      phoneNumber: phoneNumber,
      amount: challan?.amount, // Include amount in selected challan
    };

    setSelectedChallans((prevSelected) =>
      prevSelected.some(
        (selected) => selected.challanNumber === challan?.challanNumber
      )
        ? prevSelected.filter(
            (selected) => selected.challanNumber !== challan?.challanNumber
          )
        : [...prevSelected, challanInfo]
    );
  };

  const handleSelectAll = () => {
    if (!challanData?.result) {
      return;
    }

    const allChallanInfo = challanData?.result?.map((challan) => ({
      challanNumber: challan?.challanNumber,
      offenseDetails: challan?.offenseDetails,
      carNumber: carNumber,
      phoneNumber: phoneNumber,
      amount: challan?.amount,
    }));

    setSelectedChallans((prevSelected) =>
      prevSelected.length === challanData?.result?.length
        ? [] // Deselect all if all are already selected
        : allChallanInfo
    );
  };

  const handleMoreInfo = (challan) => {
    setModalChallan(challan);
  };

  const handleCloseModal = () => {
    setModalChallan(null);
    setPayDetailModalOpen(false);
  };

  const handlePayNow = (challan) => {
    const challanInfo = {
      challanNumber: challan?.challanNumber,
      offenseDetails: challan?.offenseDetails,
      carNumber: carNumber,
      phoneNumber: phoneNumber,
      amount: challan?.amount, // Include amount in selected challan for payment
    };
    if (
      !selectedChallans.some(
        (selected) => selected.challanNumber === challan?.challanNumber
      )
    ) {
      setSelectedChallans((prevSelected) => [...prevSelected, challanInfo]);
    }
    setPayDetailModalOpen(true);
  };

  useEffect(() => {
    if (!challanData?.result) {
      console.log("No pending challans found.");
    }
  }, [challanData]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end gap-2">
        <div>
          <p className="text-2xl font-bold mb-2 text-gray-700">
            Registration No.
          </p>
          <p className="text-xl font-semibold">{carNumber}</p>
        </div>

        <button
          className="text-orange-500 font-bold text-right"
          onClick={() => router.push("/challan-check")}>
          Change Registration No.
        </button>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2">
        <p className="font-bold mb-2 text-gray-700">
          Pending Challan ({challanData?.result?.length})
        </p>
        <div className="flex flex-col items-end gap-2 ml-auto">
          <button
            className="bg-blue-600 p-2 px-4 font-bold text-white rounded-xl disabled:bg-gray-400"
            onClick={() => setPayDetailModalOpen(true)}
            disabled={selectedChallans?.length === 0}>
            Pay Now
          </button>

          <div
            className="flex items-center gap-2"
            style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={selectedChallans?.length === challanData?.result?.length}
              onChange={handleSelectAll}
              className="h-4 mt-1 w-fit"
            />
            <p
              className="font-semibold cursor-pointer"
              onClick={handleSelectAll}>
              {selectedChallans?.length === challanData?.result?.length
                ? "Deselect All"
                : "Pay All Challans"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {challanData?.result?.map((challan) => (
          <div
            key={challan.challanNumber}
            className={`p-4 rounded-xl ${
              selectedChallans.some(
                (selected) => selected.challanNumber === challan?.challanNumber
              )
                ? "bg-orange-300"
                : "bg-orange-100"
            }`}>
            <input
              type="checkbox"
              checked={selectedChallans.some(
                (selected) => selected.challanNumber === challan?.challanNumber
              )}
              onChange={() => handleSelectChallan(challan)}
              className="h-fit w-fit m-2 ms-0"
            />

            <div className="flex flex-wrap-reverse md:flex-nowrap gap-2">
              <div className="flex flex-col gap-2 w-full">
                <div className="w-full flex flex-wrap items-center gap-2 justify-between">
                  <div className="flex-col flex">
                    <span className="text-gray-700 font-bold">
                      Challan No.:
                    </span>
                    <span>{challan?.challanNumber}</span>
                  </div>

                  <div className="flex-col flex">
                    <span className="text-gray-700 font-bold">Issue Date</span>
                    <span>{formatDate(challan?.challanDate)}</span>
                  </div>

                  <div className="flex-col flex">
                    <span className="text-gray-700 font-bold">Fine Amount</span>
                    <span className="font-bold text-red-500">
                      ₹{challan?.amount}
                    </span>
                  </div>
                </div>

                <div className="w-full space-y-2">
                  <span className="text-gray-700 font-bold">Offence: </span>
                  <span>{challan?.offenseDetails}</span>
                </div>
              </div>

              <div className="space-y-2 text-right md:block flex flex-wrap justify-between w-full md:w-auto">
                <button
                  className="bg-blue-600 p-2 px-4 font-bold text-white rounded-xl"
                  onClick={() => handlePayNow(challan)}>
                  Pay Now
                </button>
                <button
                  className="text-orange-500 font-bold"
                  onClick={() => handleMoreInfo(challan)}>
                  More Info
                </button>
                {modalChallan &&
                  modalChallan?.challanNumber === challan?.challanNumber && (
                    <ChallanMoreInfo
                      modalChallan={modalChallan}
                      handleCloseModal={handleCloseModal}
                    />
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {payDetailModalOpen && (
        <PayDetailModal
          selectedChallans={selectedChallans}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PendingChallan;
