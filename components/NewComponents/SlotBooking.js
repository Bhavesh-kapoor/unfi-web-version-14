import React, { useState } from "react";

const SlotBooking = ({ last_id, setBookedStatus, BookedStatus }) => {
  const SelectDate = [];
  const [finalsubmission, setFinalsubmission] = useState(false);

  const SelectTime = [
    "09:00 - 10:00 PM",
    "10:00 - 11:00 PM",
    "11:00 - 12:00 PM",
    "12:00 - 01:00 PM",
    "01:00 - 02:00 PM",
    "02:00 - 03:00 PM",
    "03:00 - 04:00 PM",
    "04:00 - 05:00 PM",
    "05:00 - 06:00 PM",
  ];

  const [BookingDetails, setBookingDetails] = useState({
    inspection: "home",
    days: "",
    timeslot: "",
    name: "",
    address: "",
    state: "",
  });

  for (let i = 1; i <= 7; i++) {
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + i);
    const options = { weekday: "short", month: "short", day: "numeric" };
    const date = tomorrow.toLocaleDateString("en-US", options);
    SelectDate.push(date);
  }

  const HandleFormSubmit = async (e) => {
    e.preventDefault();

    if (BookingDetails.name != "" && BookingDetails.address != "") {
      try {
        const bookingDone = await fetch(
          "https://api.unificars.com/api/appointmentenquiry",
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
          setFinalsubmission(true);
        }
      } catch (error) {}
    }
    // console.log(last_id);
  };

  return (
    <>
      {finalsubmission == false ? (
        <>
          <div className="w-11/12 mx-auto">
            <div className="gap-2 flex-wrap text-base text-[#002441] flex items-center justify-center">
              {BookingDetails.days && <p>Your Slot {BookingDetails.days}</p>}
              {BookingDetails.timeslot && <p>{BookingDetails.timeslot}</p>}
            </div>

            {BookingDetails.days == "" ? (
              <div className="flex flex-col justify-center items-center my-4">
                <h3 className="tracking-widest text-gray-600 text-lg mb-5">
                  When Would You Like to get your car inspected?
                </h3>
                <div className="flex justify-start items-center flex-wrap gap-4">
                  {SelectDate.map((e, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() =>
                          setBookingDetails({ ...BookingDetails, days: e })
                        }
                        className={`p-2 text-center text-base  text-white rounded shadow transition-all duration-200 ease-in-out ${
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

            {BookingDetails.days != "" && BookingDetails.timeslot == "" ? (
              <div className="flex flex-col justify-center items-center my-5 ">
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
                        className={`p-2 text-center text-base text-white rounded shadow transition-all duration-200 ease-in-out ${
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
              <div className="flex flex-col justify-center items-center my-5">
                {/* <h3 className='tracking-widest text-gray-600 text-lg my-1'>Your Detalis</h3> */}

                <form onSubmit={HandleFormSubmit} className="md:min-w-[400px]">
                  <div className="mb-6">
                    {/* <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label> */}
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="mb-6">
                    {/* <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label> */}
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter Your Address"
                    />
                  </div>
                  <div className="mb-6">
                    <select
                      className="form-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="state"
                      // onChange={(e)=> UserInputChange(e)}
                      onChange={(e) => {
                        setBookingDetails({
                          ...BookingDetails,
                          state: e.target.value,
                        });
                      }}
                      id="state"
                      required>
                      <option selected>Select Your State</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
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
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
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

                  <div className="flex flex-col justify-center items-center">
                    <button
                      type="submit"
                      onClick={HandleFormSubmit}
                      className="p-2 text-center text-base bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out ">
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
        ""
      )}

      {finalsubmission ? (
        <div className="flex flex-col items-center text-xl text-blue-600 my-5">
          <img src="booked.png" className="w-52" />
          <p className="px-2 text-md">
            {/* {BookedStatus} */}
            Appointment Booked Successfully.We will contact you shortly!
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SlotBooking;
