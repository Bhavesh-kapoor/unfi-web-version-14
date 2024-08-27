import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineCar } from "react-icons/ai";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GiCarWheel } from "react-icons/gi";
import Link from "next/link";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import Reviews from "@/components/Home/Reviews";
import { FaAngleDoubleRight } from "react-icons/fa";

const docsform = () => {
  // const [UserDetails, setUserDetails] = useState({name:"", email:"",mobile:"" , check:false})
  // const [msg , setMsg] = useState("")
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const UserInputChange=(e)=>{
  //     const {name,value} =e.target
  //     // console.log(name,value)
  //     if(name=="check"){
  //         setUserDetails({...UserDetails,check:!(UserDetails.check)})
  //     }
  //     else{

  //         setUserDetails({...UserDetails,[name]:value})
  //     }
  // }

  // const HandleFormSubmit= async(e)=>{
  //     e.preventDefault()
  //     const {name, email, mobile,otp} = UserDetails

  //     if (otp) {
  //         const dataVerify = await fetch("http://127.0.0.1:8000/api/verifyotp", {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json"
  //             },
  //             body: JSON.stringify({ mobile, otp })
  //         });
  //         const jsonDataVerify = await dataVerify.json();
  //         if (jsonDataVerify.code === 200) {
  //             // Handle verification success
  //             setUserDetails({name:"", email:"",mobile:"", otp:"", check:false})
  //             setMsg(jsonDataVerify.message);
  //             // Do other actions upon successful verification
  //             // setTimeout(() => {
  //             //     router.push('/dealership');
  //             // }, 3000);
  //         } else {
  //             // Handle verification failure
  //             setMsg(jsonDataVerify.message);
  //         }
  //     } else {
  //         if(name!="" && mobile.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)&& email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
  //             const dataSub = await fetch("http://127.0.0.1:8000/api/mobileotpsend",{
  //                 method: "POST",
  //                 headers: {
  //                     "Access-Control-Allow-Origin": "*",
  //                     "Content-Type": "application/json"
  //                 },
  //                 body: JSON.stringify(UserDetails)
  //             })
  //             const jsonData = await dataSub.json()
  //             if(jsonData.code == 200){
  //                 setMsg(jsonData.message)
  //                 // setUserDetails({name:"", email:"",mobile:"", check:false})
  //                 setIsFormSubmitted(true);
  //             }
  //         }
  //     }
  // }

  const [UserDetails, setUserDetails] = useState({
    adharcard: null,
    pancard: null,
    cancelCheque: null,
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const [unc, setUnc] = useState("");
  const [showForm, setShowForm] = useState(true); // Define showForm state variable

  const UserInputChange = (e) => {
    const { name, files } = e.target;
    setUserDetails({
      ...UserDetails,
      [name]: files[0], // store only the first file selected
    });
  };

  useEffect(() => {
    // Get unc parameter from URL when component mounts
    const params = new URLSearchParams(window.location.search);
    const uncParam = params.get("unc");
    if (uncParam) {
      setUnc(uncParam);
    }
  }, []);

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("adharcard", UserDetails.adharcard);
    formData.append("pancard", UserDetails.pancard);
    formData.append("cancelCheque", UserDetails.cancelCheque);
    formData.append("unc", unc);

    try {
      const response = await fetch(
        "https://crm.unificars.com/api/customerdocumensts",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log(responseData.message);

      if (responseData.code == 200) {
        setMsg(responseData.message); // Update msg state with response message
      } else if (responseData.code == 400) {
        setMsg2(responseData.message);
      } else {
        console.error("Form submission failed");
        setMsg("Form submission failed");
        setShowForm(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMsg2("Form submission failed");
    }
  };
  return (
    <div className="pt-32">
      <div className='setmaindiv bg-[url("/background/abtbg.jpg")]'>
        {/* <div><img src='/banner2.png' className="h-[40rem] w-[100rem]"/></div> */}

        {/* {showForm ? ( */}
        <div
          className="setmaindiv2  left-[60%] top-5 right-[5%] mx-auto p-7 rounded"
          style={{ backgroundColor: "#e3810242" }}>
          <h3 className="font-bold text-2xl my-2 capitalize">
            Upload Your{" "}
            <span className="text-orange-500">
              Necessary Document For the Further Process
            </span>
          </h3>
          <div className="">
            <img src={"/title_line.png"} alt="" />
          </div>
          <form
            onSubmit={HandleFormSubmit}
            className="my-5 text-lg font-bold flex flex-col gap-4 text-gray-500"
            id="enquiry">
            <div className="form-grp">
              <label className="flex gap-2 my-2" htmlFor="adharcard">
                Aadhar Card <span className="text-orange-500">*</span>
              </label>
              <input
                required
                type="file"
                onChange={UserInputChange}
                className="p-3 w-full focus:outline-none rounded-xl shadow"
                name="adharcard"
                id="adharcard"
                accept="image/*"
              />
            </div>
            <div className="form-grp">
              <label className="flex gap-2 my-2" htmlFor="pancard">
                Pan Card <span className="text-orange-500">*</span>
              </label>
              <input
                required
                type="file"
                onChange={UserInputChange}
                className="p-3 w-full focus:outline-none rounded-xl shadow"
                name="pancard"
                id="pancard"
                accept="image/*"
              />
            </div>
            <div className="form-grp">
              <label className="flex gap-2 my-2" htmlFor="cancelCheque">
                Cancel Cheque <span className="text-orange-500">*</span>
              </label>
              <input
                required
                type="file"
                onChange={UserInputChange}
                className="p-3 w-full focus:outline-none rounded-xl shadow"
                name="cancelCheque"
                id="cancelCheque"
                accept="image/*"
              />
            </div>

            {/* <button type='submit' className="bg-orange-400 rounded-xl shadow p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300" >Submit</button> */}

            <button
              type="submit"
              disabled={loading}
              className={`bg-orange-400 rounded-xl shadow p-2 border disabled:border-0 border-orange-500 text-white ${
                loading ? "disabled:bg-orange-300" : "disabled:bg-orange-300"
              }`}>
              {loading ? "Submited..." : "Submit"}
            </button>

            <div className="text-green-500">{msg}</div>
            <div className="text-red-500">{msg2}</div>
            {/* {loading && <div>Loading...</div>} */}
          </form>
        </div>
        {/* ) : (
                    <div className='left-[60%] top-5 right-[5%] w-1/2 mx-auto p-7 rounded' style={{ backgroundColor: "#e3810242" }}>
                    <h3 className="font-bold text-2xl my-2 capitalize">Response Message</h3>
                    <div className='text-green-500'>{msg}</div>
                    </div>
                )} */}
      </div>
    </div>

    // </div>
  );
};

export default docsform;
