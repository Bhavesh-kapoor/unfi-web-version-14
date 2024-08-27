import React, { useState } from "react";

const BookSlot = ({ last_id }) => {
  const SelectDate = [];

  const SelectTime = [
    "12:00 - 01:00 PM",
    "01:00 - 02:00 PM",
    "02:00 - 03:00 PM",
    "03:00 - 04:00 PM",
    "05:00 - 06:00 PM",
    "06:00 - 07:00 PM",
  ];

  const [BookingDetails, setBookingDetails] = useState({
    inspection: "",
    days: "",
    timeslot: "",
    name: "",
    address: "",
  });

  const [BookedStatus, setBookedStatus] = useState(null);

  for (let i = 0; i < 7; i++) {
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + i);
    const date = tomorrow.toDateString();
    SelectDate.push(date.slice(0, date.length - 5));
  }

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    if (BookingDetails.name != "" && BookingDetails.address != "") {
      try {
        const bookingDone = await fetch(
          "https://www.unificars.com/api/appointmentenquiry ",
          {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...BookingDetails, id: last_id }),
          }
        );

        const booked = await bookingDone.json();
        if (booked.code == 200) {
          setBookedStatus(booked.status);
        }
      } catch (error) {}
    }
    console.log(last_id);
  };

  return (
    <>
      {BookedStatus == null ? (
        <>
          <div className="w-11/12 mx-auto">
            <div className="text-center items-center flex flex-col mt-12">
              <p className="tracking-widest text-gray-600 text-lg">
                YOU WON'T JUST LOVE OUR SERVICE, YOU'LL LOVE THE WAY YOU RECEIVE
                THEM.
              </p>
              <h2 className="text-4xl text-[#f38102] my-2">
                Fill Your Appointment Details
              </h2>
              <img src="/home/title_line.png" alt="line" />
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="tracking-widest text-gray-600 text-lg my-5">
                Where would you like to get your car inspected?
              </h3>
              <button
                className={`p-2 text-center  text-white rounded shadow transition-all duration-200 ease-in-out ${
                  BookingDetails.inspection != ""
                    ? "bg-blue-800"
                    : "bg-[#f38102] hover:bg-black"
                }`}
                onClick={() =>
                  setBookingDetails({ ...BookingDetails, inspection: "home" })
                }>
                Home Inspection
              </button>
            </div>

            {BookingDetails.inspection != "" ? (
              <div className="flex flex-col justify-center items-center">
                <h3 className="tracking-widest text-gray-600 text-lg my-5">
                  When Would You Like to get your car inspected?
                </h3>
                <div className="flex justify-center items-center flex-wrap gap-4">
                  {SelectDate.map((e, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() =>
                          setBookingDetails({ ...BookingDetails, days: e })
                        }
                        className={`p-2 text-center  text-white rounded shadow transition-all duration-200 ease-in-out ${
                          BookingDetails.days == e
                            ? " bg-blue-800"
                            : "bg-[#f38102] hover:bg-black"
                        }`}>
                        {e}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <></>
            )}

            {BookingDetails.days != "" ? (
              <div className="flex flex-col justify-center items-center">
                <h3 className="tracking-widest text-gray-600 text-lg my-5">
                  Time Slot
                </h3>
                <div className="flex justify-center items-center flex-wrap gap-4">
                  {SelectTime.map((e, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() =>
                          setBookingDetails({ ...BookingDetails, timeslot: e })
                        }
                        className={`p-2 text-center  text-white rounded shadow transition-all duration-200 ease-in-out ${
                          BookingDetails.timeslot == e
                            ? " bg-blue-800"
                            : "bg-[#f38102] hover:bg-black"
                        }`}>
                        {e}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <></>
            )}

            {BookingDetails.timeslot != "" ? (
              <div className="flex flex-col justify-center items-center">
                <h3 className="tracking-widest text-gray-600 text-lg my-5">
                  Your Detalis
                </h3>

                <form onSubmit={HandleFormSubmit} className="md:min-w-[400px]">
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={BookingDetails.name}
                      onChange={(e) => {
                        setBookingDetails({
                          ...BookingDetails,
                          name: e.target.value,
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your Number"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="Address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Address
                    </label>
                    <input
                      type="text"
                      id="Address"
                      value={BookingDetails.address}
                      onChange={(e) => {
                        setBookingDetails({
                          ...BookingDetails,
                          address: e.target.value,
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your Address"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <button
                      type="submit"
                      className="p-2 text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out ">
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center text-2xl my-4 text-blue-900">
          <img src="booked.png" className="w-80" />
          <p className="px-4">{BookedStatus}</p>
        </div>
      )}
    </>
  );
};

export default BookSlot;
