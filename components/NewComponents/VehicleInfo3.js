import { useState, useEffect, useRef } from "react";
import BlogGrid from "@/components/NewComponents/BlogGrid";
import TextField from "@mui/material/TextField";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";
import PopularBrands from "../SellPageModal/PopularBrand";
import SelectModel from "../SellPageModal/SelectModel";
import SelectYear from "../SellPageModal/SelectYear";
import SelectVariant from "../SellPageModal/SelectVarient";
import SelectStates from "../SellPageModal/SelectStates";
import SelectKm from "../SellPageModal/SelectKm";
import SelectFuelType from "../SellPageModal/SelectFuelType";
import SelectOwner from "../SellPageModal/SelectOwner";
import SlotBooking from "./SlotBooking";
import Image from "next/image";
import { getCarValuation } from "@/common/common";

// import InputMask from 'inputmask';

const VehicleInfo = () => {
  const [value, setValue] = useState("1");
  const [screen, setScreen] = useState(1);
  const [OtpSend, setOtpSend] = useState(false);
  const [OTPVerify, setOTPVerify] = useState(false);
  const [OTPNumber, setOTPNumber] = useState("");
  const [ExpectedPrice, setExpectedPrice] = useState([0, 0]);
  const [userNumber, setUserNumber] = useState("");
  const [last_id, setlast_id] = useState(null);
  const [verifyNum, setVerifyNum] = useState(false);
  const [BookSlot, setBookSlot] = useState(false);
  const bookingRef = useRef();
  const inputRef = useRef();
  const [carNumber, setCarNumber] = useState("");
  const [BookedStatus, setBookedStatus] = useState(true);
  const [validationerror, setValidationerror] = useState(false);
  // console.log(BookedStatus);
  const [validNumber, setValidNumber] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [carInfo, setCarInfo] = useState({
    brand: {
      id: "",
      name: "",
      image: "",
    },
    model: {
      id: "",
      name: "",
    },
    variant: {
      id: "",
      name: "",
    },
    year: "",
    ownerShip: "",
    fuelType: "",
    kmDriven: "",
    location: "",
  });
  const tabs = [
    {
      label: "KM Driven",
      value: "7",
    },
  ];

  const customTab = (label, val) => {
    return (
      <Tab
        className="rounded-md m-1"
        label={label}
        value={val}
        style={
          value == val
            ? {
                backgroundColor: "#f38102",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
              }
            : {
                color: "black",
              }
        }
      />
    );
  };

  const selectedPillArray = [
    "",
    carInfo.brand.name,
    carInfo.model.name,
    carInfo.year,
    carInfo.fuelType,
  ];

  const selectedPill = (value, tabValue) => {
    // value = value.split(" ").slice(0,2);
    return (
      value && (
        <>
          <div className="px-1 bg-[#E9F6FF] col-span-1 rounded-md flex items-center ">
            <div>
              <button
                onClick={() => {
                  setValue(tabValue);
                }}
                className="mx-2">
                <CloseIcon className="text-sm" />
              </button>
            </div>
            <div>
              <p className="text-xs font-bold">{value}</p>
            </div>
          </div>
        </>
      )
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(carInfo, "From useEffect");
    if (carNumber === "") {
      setValue("2");
    }
  }, [carInfo.brand]);

  const sendOtp = async (data) => {
    const fetchData = await fetch("https://api.unificars.com/api/sendotp", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonRes = await fetchData.json();
    return jsonRes;
  };

  const HandleGetOtp = async () => {
    if (userNumber == "") {
      setValidationerror("Phone number is required!");
    }
    if (carNumber === "") {
      getCarValuation(carInfo, setExpectedPrice);
    }
    if (userNumber.length < 10) {
      setValidationerror("Invalid Phone Number");
    }

    // console.log("ytesting");
    if (userNumber != "" && userNumber.length == 10) {
      setValidationerror("");
      const data = {
        ...carInfo,
        mobile_number: userNumber,
        brand: carInfo.brand.name,
        model: carInfo.model.name,
        varient: carInfo.variant.name,
        scrap: true,
      };
      const res = await sendOtp(data);
      if (res.code == 200) {
        setOtpSend(true);
        setIsDisabled(true);
      }
    }
  };

  // const getCarValuation = async () => {
  //   const data = {
  //     year: carInfo.year,
  //     model_name: carInfo.variant.name,
  //     id: carInfo.model.id,
  //   };
  //   // console.log(data, "data object from evaluation");
  //   try {
  //     const valuation = await fetch(
  //       "https://api.unificars.com/api/getvarientmodelamount",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     const value = await valuation.json();
  //     if (value.code == 200) {
  //       const response = value.data;
  //       console.log(response, "response object from evaluation");
  //       let calculatedyear = 15;
  //       if (carInfo.fuelType === "DIESEL") {
  //         calculatedyear = 10;
  //       }
  //       let calculation = response / calculatedyear;
  //       console.log(calculation);
  //       let remainingyears =
  //         carInfo.year + calculatedyear - new Date().getFullYear();
  //       console.log(remainingyears);
  //       let expectedprice = Math.round(calculation * remainingyears);
  //       let expectedprice1 = Math.round(calculation * remainingyears) + 100240;
  //       console.log([expectedprice, expectedprice1]);
  //       setExpectedPrice([expectedprice, expectedprice1]);
  //     }
  //   } catch (error) {}
  // };

  const HandleVerifyOTP = async () => {
    setValidationerror(" ");

    if (OTPNumber != "") {
      const data = {
        ...carInfo,
        otp: OTPNumber,
        mobile_number: userNumber,
        brand: carInfo.brand.name,
        model: carInfo.model.name,
        varient: carInfo.variant.name,
      };
      console.log(JSON.stringify(data));

      const fetchData = await fetch(
        "https://api.unificars.com/api/customerrequestverify",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const jsonRes = await fetchData.json();
      if (jsonRes.code == 200) {
        setOTPVerify(true);
        setlast_id(jsonRes.last_id);
        // setBookSlot(false);
        // setBookedStatus(true);

        if (carNumber === "") {
          getCarValuation(carInfo, setExpectedPrice);
        }
      } else {
        setValidationerror(jsonRes.status);
      }
    } else {
      setValidationerror("OTP is required!");
    }
  };

  const HandleEditNumber = () => {
    setOtpSend(false);
    setOTPNumber("");
    setUserNumber("");
    setIsDisabled(false);
  };

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters

    input = input.replace(/(.{2})(?=.)/g, "$1 ");

    // You can add logic to limit the length of the input if needed
    if (input.length > 10) {
      input = input.slice(0, 11) + input.slice(11, 15).trim();
    }

    if (input.length < 16) {
      setCarNumber(input.toUpperCase());
    }
  };

  const submitCarNumber = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (carNumber.length == 13) {
        setValidNumber(false);

        let number = carNumber.split(" ").join("");

        // console.log(number, "number");
        const response = await fetch(
          "https://crm.unificars.com/api/checkvehiclnumber",
          {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              vehicle_number: number,
            }),
          }
        );

        // const response = await fetch(
        //   "https://api.emptra.com/vehicleRegistrations",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       secretKey:
        //         "MeCeLbdwp5KCuFuuCcQIuUKDTw5xyHPJT91zovHRmA5d6jBxAficW5kIP1DGvhNXL",
        //       clientId:
        //         "d0d3422ec6d0ae9e4ed989dda9425204:b94cec676f7fb97bf04173cc262aeb9f",
        //     },
        //     body: JSON.stringify({
        //       vehicleNumber: number,
        //       blacklistCheck: true,
        //     }),
        //   }
        // );

        const data = await response.json();
        console.log("chalja", data.data);
        if (data?.data?.code == 100) {
          // Setting Up Brand Logo here

          const fetchBrand = await fetch(
            "https://api.unificars.com/api/getwebrands",
            {
              method: "POST",
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            }
          );
          const jsonRes = await fetchBrand.json();
          if (jsonRes.code == 200) {
            const brands = jsonRes.data;

            brands.map((brand) => {
              // console.log(brands, "sss");
              const brandName = brand.brand_name.split(" ");
              for (let val of brandName) {
                for (let mfg of data.data.result.vehicleManufacturerName.split(
                  " "
                )) {
                  if (mfg.toLowerCase() === val.toLowerCase()) {
                    setCarInfo({
                      ...carInfo,
                      brand: {
                        id: brand.id,
                        name: brand.brand_name,
                        image: brand.image,
                      },
                      model: { name: data.data.result.model.split(" ")[1] },
                      year: data.data.result.vehicleManufacturingMonthYear.split(
                        "/"
                      )[1],
                      variant: { name: data.data.result.model },
                      fuelType: data.data.result.type,
                      location: data.data.result.regAuthority,
                      ownerShip: data.data.result.ownerCount,
                    });
                  }
                }
              }
            });

            setValue("7");
            setScreen(2);
            setValidNumber(true);
          }
        } else if (data?.data === null) {
          const response = await fetch(
            "https://api.emptra.com/vehicleRegistrations",
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
                vehicleNumber: number,
                blacklistCheck: true,
              }),
            }
          );

          const data = await response.json();

          if (data.code == 100) {
            // Setting Up Brand Logo here
            const fetchBrand = await fetch(
              "https://api.unificars.com/api/getwebrands",
              {
                method: "POST",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );
            const jsonRes = await fetchBrand.json();
            if (jsonRes.code == 200) {
              const brands = jsonRes.data;

              brands.map((brand) => {
                // console.log(brands, "sss");
                const brandName = brand.brand_name.split(" ");
                for (let val of brandName) {
                  for (let mfg of data.result.vehicleManufacturerName.split(
                    " "
                  )) {
                    if (mfg.toLowerCase() === val.toLowerCase()) {
                      setCarInfo({
                        ...carInfo,
                        brand: {
                          id: brand.id,
                          name: brand.brand_name,
                          image: brand.image,
                        },
                        model: { name: data.result.model.split(" ")[1] },
                        year: data.result.vehicleManufacturingMonthYear.split(
                          "/"
                        )[1],
                        variant: { name: data.result.model },
                        fuelType: data.result.type,
                        location: data.result.regAuthority,
                        ownerShip: data.result.ownerCount,
                      });
                    }
                  }
                }
              });

              setValue("7");
              setScreen(2);
              setValidNumber(true);
            }
          } else {
            setValidNumber(true);
            console.error("Response Was not right from API");
          }
        } else {
          setValidNumber(true);
          console.error("Response Was not right from API");
        }
      } else {
        setValidNumber(true);
      }
    } catch (error) {
      setValidNumber(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const [hideAnimation, setHideAnimation] = useState(false);

  const handleHideAnimation = () => {
    setHideAnimation(!hideAnimation);
  };

  // RETURN STARTS
  return (
    <>
      <div className="bg-blue-custom lg:col-span-2 gap-4 flex flex-col md:w-[100%] z-10 shadow-xl rounded-md">
        {screen === 1 && (
          <div
            className={`p-4 flex flex-col justify-center items-start gap-4 min-h-[200px]`}>
            {/* <h1 className='text-xl text-black my-2 flex items-center'>
                  Enter your car registration number &nbsp;<img src="4xfaster.png" style={{width:'20%'}}/>
              </h1> */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
              <div className="flex flex-wrap w-full gap-2">
                <div className="font-bold text-[#465166] w-full text-field relative">
                  {/* <TextField
                  error={validNumber}
                  id={
                    validNumber
                      ? "outlined-error-helper-text"
                      : "outlined-basic"
                  }
                  label="Search By Car Number"
                  variant="outlined"
                  placeholder="AA 11 AA 1111"
                  type="text"
                  value={carNumber}
                  onChange={handleInputChange}
                  color={validNumber ? "error" : "warning"}
                  ref={inputRef}
                  helperText={validNumber ? "Enter a valid number." : ""}
                  className="w-full"
                /> */}

                  <input
                    type="text"
                    className="w-full p-4 rounded-2xl shadow-lg text-xl outline-none  border border-gray-200"
                    value={carNumber}
                    onChange={handleInputChange}
                    placeholder={hideAnimation ? "DL XX AC XXXX" : ""}
                    ref={inputRef}
                    onBlur={() => {
                      if (carNumber.length === 0) {
                        setHideAnimation(false);
                      }
                    }}
                  />

                  {!hideAnimation && (
                    <div
                      className="absolute top-0 m-auto w-full h-full z-10 flex items-center"
                      onClick={handleHideAnimation}>
                      <div>
                        <h1 className="ml-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl text-gray-500">
                          DL XX AC XXXX
                        </h1>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm p-2 pt-0 text-[#D04848]">
                  {validNumber ? "Please enter a valid number." : ""}
                </p>
              </div>
            </div>

            {loading ? (
              <div className="loader text-sm">Loading...</div>
            ) : (
              <button
                className="bg-blue-500 text-white w-full px-7 py-3 rounded-lg hover:bg-blue-600 text-base font-sans"
                onClick={submitCarNumber}>
                Get Price
              </button>
            )}
            {/* <div className="w-full flex items-center justify-center my-2 place-self-center">
                  <div className="w-full border-t border-gray-500"></div>
                  <span className="mx-5 text-black text-base font-sans"> OR </span>
                  <div className="w-full border-t border-gray-500"></div>
              </div>
              <h1 className='text-xl text-black mt-4'>Choose your model</h1> */}

            {/* <Divider className="w-3/4" />
              <p className="text-md text-[#465166]">or</p>
              <p className="text-xl text-[#465166]">
                {" "}
                Start with your car brand
              </p> */}

            {/* <PopularBrands
                setCarInfo={setCarInfo}
                carInfo={carInfo}
                screen={screen}
                setScreen={setScreen}
                
              /> */}
          </div>
        )}

        {/* className={`${screen === 1 ? 'hidden' : ''}`} */}

        {/* Pills */}
        {(screen === 2 || screen === 3) && carInfo.brand.name && (
          <div className="flex flex-row m-4 text-[#465166] gap-2 items-center justify-between">
            {/* <div className="grid grid-cols-3 gap-2">
                {selectedPillArray.map((item, index) => {
                  return selectedPill(item, index + "");
                })}
              </div> */}
            <div className="flex flex-wrap gap-1 items-center">
              <div>
                <Avatar
                  alt="brand_logo"
                  src={carInfo.brand.image}
                  className="bg-[#E1F0DA]"
                  sx={{ width: 56, height: 56 }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap flex-row gap-1 items-center text-xl">
                  {carInfo.year && <p>{carInfo.year}</p>}

                  {carInfo.model.name && (
                    <p className=" font-bold">{carInfo.model.name}</p>
                  )}

                  {carInfo.fuelType && <p>{"[ " + carInfo.fuelType + " ]"}</p>}
                </div>

                <div>
                  {carInfo.variant.name && (
                    <p className="text-xs">{carInfo.variant.name}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="text-[#EF4040] text-xs"
                onClick={() => {
                  setValue("1");
                  // setScreen(2);
                  setCarInfo({
                    brand: {
                      id: "",
                      name: "",
                      image: "",
                    },
                    model: {
                      id: "",
                      name: "",
                    },
                    variant: {
                      id: "",
                      name: "",
                    },
                    year: "",
                    ownerShip: "",
                    fuelType: "",
                    kmDriven: "",
                    location: "",
                  });
                  setScreen(1);
                  setOTPVerify(false);
                  setOTPNumber(false);
                  setOtpSend(false);
                  setBookedStatus(true);
                  setIsDisabled(false);
                }}>
                EDIT
              </button>
            </div>
          </div>
        )}

        {/* Tabs Div */}
        {screen === 2 && (
          <TabContext value={value} className="m-2">
            <Box>
              <div className="mx-2">
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  scrollButtons="auto"
                  // variant="scrollable"
                  indicatorColor="warning">
                  {tabs.map((tab) => {
                    return customTab(tab.label, tab.value);
                  })}
                </TabList>
              </div>

              {/* <Divider className="w-full mt-2" /> */}
            </Box>
            <div className="w-full h-full">
              <TabPanel value="1">
                <PopularBrands
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  screen={screen}
                  setScreen={setScreen}
                />
              </TabPanel>

              <TabPanel value="7">
                <SelectKm
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  value={value}
                  setValue={setValue}
                  carNumber={carNumber}
                  setScreen={setScreen}
                />
              </TabPanel>
            </div>
          </TabContext>
        )}
        {/* Code For OTP and Car valuation screen */}
        {screen === 3 && (
          <div className="flex flex-col text-[#465166]">
            {!OTPVerify ? (
              <>
                <div className="p-2 m-2 gap-4 flex flex-col ">
                  <h1 className="text-2xl">Enter Your Phone Number</h1>

                  <p className="text-xs mb-3">
                    We will reach you for further queries
                  </p>

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Enter Mobile NUmber"
                    variant="outlined"
                    type="number"
                    disabled={isDisabled}
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                  />

                  {OtpSend ? (
                    <div>
                      {/* <input
                    placeholder="Enter Your OTP"

                    className="w-full p-2 border outline-gray-200 rounded border-gray-200 "
                  /> */}
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Enter OTP"
                        variant="outlined"
                        type="number"
                        color="warning"
                        onChange={(e) => setOTPNumber(e.target.value)}
                        value={OTPNumber}
                      />
                      <span className="text-red-600 mt-[2px] text-sm">
                        {" "}
                        {validationerror}
                      </span>

                      <div className="flex justify-between gap-2 my-4">
                        <button
                          onClick={HandleVerifyOTP}
                          className="w-full p-2 text-base text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out ">
                          Verify OTP
                        </button>
                        <button
                          onClick={HandleEditNumber}
                          className="w-full p-2 text-base text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out ">
                          Edit Number
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <button
                        onClick={HandleGetOtp}
                        className="w-full p-2 text-base text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out ">
                        GET OTP
                      </button>
                    </div>
                  )}
                  <span className="text-red-600 mt-[2px] text-sm">
                    {" "}
                    {validationerror}
                  </span>
                </div>
                <div className="my-6 flex items-center justify-center">
                  <p className=" font-bold text-sm">
                    We respect your privacy and your information is secure with
                    us
                  </p>
                </div>
              </>
            ) : (
              // When OTP is verfied
              <div className="">
                {/* Slot Booking */}
                <div ref={bookingRef}>
                  {!BookSlot ? (
                    <>
                      <SlotBooking
                        last_id={last_id}
                        setBookedStatus
                        BookedStatus
                      />{" "}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                {/* Ends */}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default VehicleInfo;

// onClick={() => {setBookSlot(true); bookingRef.current.scrollIntoView({ behavior: "smooth" }) }
