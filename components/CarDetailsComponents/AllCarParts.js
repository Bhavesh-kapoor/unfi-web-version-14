import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { ImageDisplayShow } from "../../ReduxStore/actions/ModalImage";

//import ImageModal from '../ImageModal'; // Adjust the path based on the actual directory structure

const AllCarParts = ({ part }) => {
  const [ModalToggle, setModalToggle] = useState(false);

  // const dispatch = useDispatch()

  const HandleImageClick = (e) => {
    // console.log("first",e)
    dispatch(ImageDisplayShow({ url: e.image[0].image, part: e.name }));
  };

  return (
    <>
      <div className="shadow">
        {/* <div onClick={() => setModalToggle(!ModalToggle)} className={`flex shadow items-center justify-between rounded hover:bg-gray-100 gap-1 p-4 ${ModalToggle ? "bg-gray-200" : ""}`}>
        <h2>{part && part.name ? <h2>{part.name}</h2> : null}</h2>
        <p className=''>{ModalToggle ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
      </div> */}
        <div
          className={`${
            ModalToggle ? "h-auto " : "h-0"
          }  transition-all duration-200 overflow-hidden grid grid-cols-1 gap-4`}>
          {part && part.car_details.length > 0 ? (
            part.car_details.map((e, index) => {
              return (
                <div
                  className="grid grid-cols-1 overflow-hidden shadow px-4 py-2"
                  key={index}>
                  <div className="flex flex-col md:flex-row md:justify-between col-span-2 md:items-center">
                    <div>
                      <p className="flex items-center gap-2 whitespace-nowrap">
                        {e.status != "notok" ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 bg-green-500 rounded-full">
                              <TiTick fill="white" />
                            </span>
                          </span>
                        ) : (
                          <span className="">
                            <RiCloseCircleFill className="text-lg" fill="red" />
                          </span>
                        )}{" "}
                        <span className="ml-3">{e.name ? e.name : ""}</span>
                      </p>
                    </div>
                    <div>
                      <p className="ml-10 mt-2 md:mt-0 md:ml-0">
                        {e.condition ? e.condition : ""}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    {e.image && e.image.length > 0 ? (
                      <p className="w-24 h-12 float-right">
                        <img src={e.image[0].image} />
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <>
              {" "}
              {part && part.subpart.length > 0 ? (
                part.subpart.map((epa, index) => {
                  return epa.car_detail.map((e, i) => {
                    return (
                      <div
                        className="grid grid-cols-1 overflow-hidden shadow px-4 py-2"
                        key={i}>
                        <div className="flex flex-col md:flex-row md:justify-between col-span-2 md:items-center">
                          <div>
                            <p className="flex items-center gap-2 whitespace-nowrap">
                              {e.status == "ok" ? (
                                <span className="flex items-center gap-2">
                                  <span className="w-4 h-4 bg-green-500 rounded-full">
                                    <TiTick fill="white" />
                                  </span>
                                </span>
                              ) : (
                                <span className="">
                                  <RiCloseCircleFill
                                    className="text-lg"
                                    fill="red"
                                  />
                                </span>
                              )}{" "}
                              <span className="ml-3">
                                {e.name ? e.name : ""}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="ml-10 mt-2 md:mt-0 md:ml-0">
                              {e.condition ? e.condition : ""}
                            </p>
                          </div>
                        </div>
                        <div className="mb-4">
                          {e.image && e.image.length > 0 ? (
                            <p
                              className="md:w-36 md:h-24  w-full p-4"
                              onClick={() => HandleImageClick(e)}>
                              <img src={e.image[0].image} />
                            </p>
                          ) : (
                            <></>
                          )}
                          {/* {clickedImage && <ImageModal imageUrl={clickedImage} onClose={handleCloseModal} />} */}
                        </div>
                      </div>
                    );
                  });
                })
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllCarParts;
