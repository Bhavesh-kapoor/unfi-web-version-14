import React from "react";

const ChallanMoreInfo = ({ modalChallan, handleCloseModal }) => {
  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">Challan Details</h2>

            <p className="text-orange-500 font-bold">
              Pay your challan dues before it moves to court
            </p>
          </div>

          <button
            className="text-blue-500 font-bold"
            onClick={handleCloseModal}>
            Close
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-end">{formatDate(modalChallan.challanDate)}</p>
          <p className="flex flex-col">
            <span className="text-gray-700 font-bold">Offense: </span>
            <span>{modalChallan.offenseDetails}</span>
          </p>
          <p className="flex flex-col">
            <span className="text-gray-700 font-bold">Issue Date: </span>
            <span>{formatDate(modalChallan.challanDate)}</span>
          </p>
          <p>
            <strong className="text-gray-700 font-bold">Fine Amount: </strong>
            <span className="font-bold text-red-500">
              ₹{modalChallan.amount}
            </span>
          </p>
          {modalChallan.court_status && (
            <p>
              <strong>Court:</strong> {modalChallan.court_status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallanMoreInfo;
