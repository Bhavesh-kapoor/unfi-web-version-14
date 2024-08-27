import { CheckIcon, CloseIcon } from "@/common/IconsSvg";
import Image from "next/image";
import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Car210PointsModal({ showModal, setShowModal, carDetails }) {
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);

  const HandleCloseModal = () => {
    setShowModal(false);
  };

  console.log("car details in car details modal", carDetails);

  return (
    <div
      className={`fixed bottom-0 flex justify-center items-center ${
        showModal ? "h-full" : "h-0"
      } overflow-hidden bg-black/50 z-40 transition-all duration-500 w-full`}
    >
      <div className="bg-white p-4 rounded-xl shadow relative">
        <div
          className="absolute cursor-pointer top-4 right-4"
          onClick={() => HandleCloseModal()}
        >
          <CloseIcon className="text-xl" />
        </div>

        <p className="text-xl font-bold">Car Details</p>
        <div className="flex w-full items-center justify-center mt-4 gap-12">
          {carDetails &&
            carDetails.map((car, index) => (
              <div key={car.id}>
                <button
                  className={`${
                    selectedCarIndex === index && "bg-orange-500 text-white"
                  } font-bold py-2 px-4 rounded-lg`}
                  onClick={() => setSelectedCarIndex(index)}
                >
                  {car.name}
                </button>
              </div>
            ))}
        </div>

        <div className="mt-4 flex flex-col items-center h-[70vh] max-w-[67vw] border rounded-xl overflow-auto p-2">
          {selectedCarIndex === 1
            ? carDetails[selectedCarIndex].subpart.map((subpart, index) => (
                <div
                  className="flex flex-col items-center justify-start border gap-4 w-full p-4 mb-2 rounded-xl last:mb-0"
                  key={index}
                >
                  <p className="font-bold text-lg text-start w-full">
                    {subpart.name}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {subpart.car_detail.map(
                      (detail, index) =>
                        detail.image &&
                        detail.image.map((image, index) => (
                          <div
                            key={index}
                            className="w-[200px] border rounded-xl px-2"
                          >
                            <p className="p-2">{detail.name}</p>
                            <Zoom>
                              <Image
                                priority
                                src={image.image}
                                alt={"Parts image"}
                                width={250}
                                height={250}
                                className="rounded-xl object-cover h-[200px] w-[200px]"
                              />
                            </Zoom>

                            <div className="flex flex-wrap justify-between p-2">
                              <p>{detail.condition}</p>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>
              ))
            : carDetails &&
              carDetails[selectedCarIndex].car_details.map((detail, index) => (
                <div className="w-full p-4 py-2 space-y-4" key={index}>
                  <div className="flex items-center justify-start gap-4">
                    <CheckIcon className="text-green-500 w-10" />
                    <p className="font-bold w-full">{detail.name}</p>

                    <p className="p-2 bg-gray-200 rounded-lg w-full">
                      {detail.video ? (
                        <video
                          width="320"
                          height="240"
                          controls
                          preload="none"
                          className="rounded-lg mx-auto"
                        >
                          <source src={detail.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        detail.condition || "N/A"
                      )}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Car210PointsModal;
