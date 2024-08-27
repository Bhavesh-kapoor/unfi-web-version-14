import PopularBrand from "@/components/SellPageModal/PopularBrand";
import React from "react";
import TitleX from "./TitleX";
import SelectModel from "./SelectModel";
import SelectVarient from "./SelectVarient";
import SelectYear from "./SelectYear";
import SelectOwner from "./SelectOwner";
import SelectFuelType from "./SelectFuelType";
import SelectKm from "./SelectKm";
import SelectStates from "./SelectStates";

const SellModal = ({
  setVerifyNum,
  OpenModal,
  setOpenModal,
  UserCar,
  setUserCar,
  UserCarTabArray,
  setUserCarTabArray,
  CurrentTab,
  setCurrentTab,
}) => {
  const HandleDetailBarClick = (e, number) => {
    if (number == 0) {
      setCurrentTab(number);
    } else if (UserCarTabArray[number - 1] != undefined) {
      setCurrentTab(number);
    }
    // setCurrentTab(number)
  };

  return (
    <>
      <div
        className={`fixed bg-black/40 top-0 w-full ${
          OpenModal ? "h-full" : "h-0"
        } transition-all duration-200 flex items-center justify-center`}>
        <div className="bg-white w-5/6 h-5/6 mx-auto overflow-y-auto rounded">
          <div className="overflow-x-scroll sticky bg-white top-0  p-4 z-50">
            <ul className="flex gap-4 text-xl  mb-1 ">
              <li
                className="bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow"
                id="brand"
                onClick={(e) => HandleDetailBarClick(e, "0")}>
                {UserCar.brand.name == "" ? "Brand" : UserCar.brand.name}
              </li>
              <li
                className="bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow"
                id="model"
                onClick={(e) => HandleDetailBarClick(e, "1")}>
                {UserCar.model.name == "" ? "Model" : UserCar.model.name}
              </li>
              <li
                className="bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow"
                id="varient"
                onClick={(e) => HandleDetailBarClick(e, "2")}>
                {UserCar.varient.name == "" ? "Varient" : UserCar.varient.name}
              </li>
              <li
                className="bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow"
                id="year"
                onClick={(e) => HandleDetailBarClick(e, "3")}>
                {UserCar.year == "" ? "Year" : UserCar.year}
              </li>
              <li
                className="bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow"
                id="ownerShip"
                onClick={(e) => HandleDetailBarClick(e, "4")}>
                {UserCar.ownerShip == ""
                  ? "Ownership"
                  : `ownership : ${UserCar.ownerShip}`}
              </li>
              <li
                className="bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow"
                id="fuelType"
                onClick={(e) => HandleDetailBarClick(e, "5")}>
                {UserCar.fuelType == "" ? "Fuel Type" : UserCar.fuelType}
              </li>
              <li
                className="bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow"
                id="kmDriven"
                onClick={(e) => HandleDetailBarClick(e, "6")}>
                {UserCar.kmDriven == "" ? "Km Driven" : UserCar.kmDriven}
              </li>
              <li
                className="bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow mr-4"
                id="location"
                onClick={(e) => HandleDetailBarClick(e, "7")}>
                {UserCar.location == "" ? "Location" : UserCar.location}
              </li>
            </ul>
          </div>
          <div>
            {(() => {
              switch (CurrentTab) {
                case "0":
                  return (
                    <>
                      <TitleX
                        title={"Select your brand"}
                        setOpenModal={setOpenModal}
                        setUserCar={setUserCar}
                        setCurrentTab={setCurrentTab}
                        setUserCarTabArray={setUserCarTabArray}
                      />
                      <PopularBrand
                        UserCarTabArray={UserCarTabArray}
                        OpenModal={OpenModal}
                        setUserCar={setUserCar}
                        UserCar={UserCar}
                        setCurrentTab={setCurrentTab}
                        setOpenModal={setOpenModal}
                      />
                    </>
                  );
                case "1":
                  return (
                    <>
                      <TitleX
                        title={"Select your model"}
                        setOpenModal={setOpenModal}
                        setUserCar={setUserCar}
                        setCurrentTab={setCurrentTab}
                        setUserCarTabArray={setUserCarTabArray}
                      />
                      <SelectModel
                        UserCarTabArray={UserCarTabArray}
                        setUserCar={setUserCar}
                        UserCar={UserCar}
                        setCurrentTab={setCurrentTab}
                      />
                    </>
                  );
                case "2":
                  return (
                    <>
                      <TitleX
                        title={"Select your varient"}
                        setOpenModal={setOpenModal}
                        setUserCar={setUserCar}
                        setCurrentTab={setCurrentTab}
                        setUserCarTabArray={setUserCarTabArray}
                      />
                      <SelectVarient
                        UserCarTabArray={UserCarTabArray}
                        setUserCar={setUserCar}
                        UserCar={UserCar}
                        setCurrentTab={setCurrentTab}
                      />
                    </>
                  );
                case "3":
                  return (
                    <>
                      <TitleX
                        title={"Select your year"}
                        setOpenModal={setOpenModal}
                        setUserCar={setUserCar}
                        setCurrentTab={setCurrentTab}
                        setUserCarTabArray={setUserCarTabArray}
                      />
                      <SelectYear
                        UserCarTabArray={UserCarTabArray}
                        setUserCar={setUserCar}
                        UserCar={UserCar}
                        setCurrentTab={setCurrentTab}
                      />
                    </>
                  );
                case "4":
                  return (
                    <>
                      <TitleX
                        title={"Select your Ownership"}
                        setOpenModal={setOpenModal}
                        setUserCar={setUserCar}
                        setCurrentTab={setCurrentTab}
                        setUserCarTabArray={setUserCarTabArray}
                      />
                      <SelectOwner
                        UserCarTabArray={UserCarTabArray}
                        setUserCar={setUserCar}
                        UserCar={UserCar}
                        setCurrentTab={setCurrentTab}
                      />
                    </>
                  );
                case "5":
                  return (
                    <>
                      <TitleX
                        title={"Select your fuel type"}
                        setOpenModal={setOpenModal}
                        setUserCar={setUserCar}
                        setCurrentTab={setCurrentTab}
                        setUserCarTabArray={setUserCarTabArray}
                      />
                      <SelectFuelType
                        UserCarTabArray={UserCarTabArray}
                        setUserCar={setUserCar}
                        UserCar={UserCar}
                        setCurrentTab={setCurrentTab}
                      />
                    </>
                  );
                case "6":
                  return (
                    <>
                      <TitleX
                        title={"Select your km driven"}
                        setOpenModal={setOpenModal}
                        setUserCar={setUserCar}
                        setCurrentTab={setCurrentTab}
                        setUserCarTabArray={setUserCarTabArray}
                      />
                      <SelectKm
                        UserCarTabArray={UserCarTabArray}
                        setUserCar={setUserCar}
                        UserCar={UserCar}
                        setCurrentTab={setCurrentTab}
                      />
                    </>
                  );
                case "7":
                  return (
                    <>
                      <TitleX
                        title={"Select your location"}
                        setOpenModal={setOpenModal}
                        setUserCar={setUserCar}
                        setCurrentTab={setCurrentTab}
                        setUserCarTabArray={setUserCarTabArray}
                      />
                      <SelectStates
                        setOpenModal={setOpenModal}
                        UserCarTabArray={UserCarTabArray}
                        setUserCar={setUserCar}
                        UserCar={UserCar}
                        setCurrentTab={setCurrentTab}
                        setVerifyNum={setVerifyNum}
                      />
                    </>
                  );
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellModal;
