import Link from "next/link";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import mobile from "../public/thankyou-mobileImage.png";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { dealerTestimonialData } from "@/common/testimonialData";

const thankyou = () => {
  return (
    <>
      <div className="bg-[#FFFAE7] py-10 rounded-br-[108px]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold md:w-4/5 leading-10">
              Your form has been received.
            </h1>
            <p className="pt-5 pb-8 md:w-3/5 leading-5 font-medium">
              Our executive will contact you within 24 hours
            </p>
            <p className="uppercase font-bold pb-2">Download our app</p>
            <Link
              href={""}
              className="bg-gradient-to-r from-[#FFB648] to-[#E07A02] text-white px-6 py-2 text-lg rounded-lg"
            >
              Download Now
            </Link>
            <div className="flex gap-2 justify-start items-center mt-4">
              <Link
                href={""}
                className="bg-black flex justify-center items-center gap-1 w-fit md:w-1/4 text-white px-2 py-2 rounded-md"
              >
                <FaApple size={25} color="white" />
                <p className="flex flex-col text-left">
                  <span className="text-[7px]">Download on the</span>
                  <span className="text-xs font-semibold">App Store</span>
                </p>
              </Link>
              <Link
                href={""}
                className="bg-black flex justify-center items-center gap-1 w-fit md:w-1/4 text-white px-2 py-2 rounded-md"
              >
                <BiLogoPlayStore size={25} color="white" />
                <p className="flex flex-col text-left">
                  <span className="text-[7px]">GET IT ON</span>
                  <span className="text-xs font-semibold">Google Play</span>
                </p>
              </Link>
            </div>
          </div>
          <Image
            src={mobile}
            alt="mobile-image"
            width={300}
            height={100}
            priority
            unoptimized
          />
        </div>
      </div>
      <TestimonialCarousel testimonialData={dealerTestimonialData} />
    </>
  );
};

export default thankyou;
