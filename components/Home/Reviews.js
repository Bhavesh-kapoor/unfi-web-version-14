import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 720 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 720, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-gray-50 mt-16 py-12">
      <div className="text-center items-center flex flex-col mb-6">
        <p className="tracking-widest text-gray-600 text-lg">
          THEIR GOOD REVIEWS MOTIVATE US TO DO MORE
        </p>
        <h2 className="text-4xl text-[#f38102] my-2">
          What Our Clients Are Saying
        </h2>
        <img src="/home/title_line.png" />
      </div>
      <div className=" w-11/12 mx-auto">
        <Carousel responsive={responsive}>
          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 ">
            <div>
              <img src="/home/reviews/man.png" className="w-24" />
            </div>
            <div className="flex text-orange-500">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-4">
              {" "}
              Excellent customer service from inquiry till the final settlement
              of the amount, everything is super easygoing.
            </p>
            <h5 className="my-4 text-lg text-blue-950">Abhishek, Agra</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 ">
            <div>
              <img src="/home/reviews/worker.png" className="w-24" />
            </div>
            <div className="flex text-orange-500">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSLine />
            </div>
            <p className="font-medium my-4">
              {" "}
              While selling the cars via Unifi cars you don't need to be
              restless as the whole process is very transparent and prompt.
            </p>
            <h5 className="my-4 text-lg text-blue-950">Geeta, Gujarat</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 ">
            <div>
              <img src="/home/reviews/man.png" className="w-24" />
            </div>
            <div className="flex text-orange-500">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-4">
              {" "}
              The entire process was completely online, and after a few hours,
              we received the Car at home as well.
            </p>
            <h5 className="my-4  text-lg text-blue-950">Snigdha, Delhi</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 ">
            <div>
              <img src="/home/reviews/worker.png" className="w-24" />
            </div>
            <div className="flex text-orange-500">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-4">
              Delighted with the behavior of staff members of Unifi Cars, very
              efficient, customer friendly, soft-spoken, and patient staff.
            </p>
            <h5 className="my-4 text-lg text-blue-950">Partha, Gurgaon</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 ">
            <div>
              <img src="/home/reviews/man.png" className="w-24" />
            </div>
            <div className="flex text-orange-500">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-4">
              I had an awesome and seamless experience in selling my Maruti
              Suzuki ciaz with Unifi Cars they offer the best deals
            </p>
            <h5 className="my-4 text-lg text-blue-950">Snigdha, Delhi</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 ">
            <div>
              <img src="/home/reviews/worker.png" className="w-24" />
            </div>
            <div className="flex text-orange-500">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-4">
              All over the interaction was extremely great and I highly
              recommend Unifi Cars for selling the cars.
            </p>
            <h5 className="my-4  text-lg text-blue-950">Geeta, Gujarat</h5>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
