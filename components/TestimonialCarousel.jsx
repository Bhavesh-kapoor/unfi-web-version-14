import { StarIcon } from "@/common/IconsSvg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const fillData = [
  {
    id: 1,
    name: "Raghav Sharma",
    location: "New Delhi",
    carName: "Honda City",
    stars: 5,
    text: "I have recently purchased a used car from Unifi Cars. Their customer service and delivery process were just amazing.",
  },
  {
    id: 2,
    name: "Tarun Mittal",
    location: "Gurugram",
    carName: "Maruti Suzuki Swift",
    stars: 5,
    text: "I visited Unifi Cars to buy a car, and now I am fully satisfied with my car-buying process. The process is hassle-free. I am happy with their service.",
  },
  {
    id: 3,
    name: "Ashok Kapoor",
    location: "Delhi NCR",
    carName: "Hyundai i10",
    stars: 5,
    text: "I bought my first car from them. The deal was fairly priced, and their all-used car is in good condition, and their team was very supportive too.",
  },
  {
    id: 4,
    name: "Bhumika",
    location: "Delhi NCR",
    carName: "Hyundai i10",
    stars: 5,
    text: "I'm happy with the car I bought. It's in excellent condition and very comfortable. I found their car buying process smooth.",
  },
  {
    id: 5,
    name: "Rohan Rajput",
    location: "Ghaziabad",
    carName: "Hyundai i10",
    stars: 5,
    text: "The car I bought is in very good condition and comfortable, too. I really like their customer service. Moreover, I found fair pricing here.",
  },
];

function TestimonialCarousel({ testimonialData }) {
  const testimonials = testimonialData || fillData;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
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
      items: 1.25,
    },
  };

  return (
    <div className="bg-white w-full my-16">
      <div className="text-center items-center flex flex-col mb-8 px-4">
        <h3 className="text-2xl md:text-4xl font-bold text-[#000] my-2">
          What Our Clients Are Saying
        </h3>
        <p className="customgryfnt text-lg font-normal">
          Their good reviews motivate us to do more
        </p>
      </div>
      <div className=" w-11/12 mx-auto">
        <Carousel
          responsive={responsive}
          arrows={false}
          autoPlay={true}
          infinite={true}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-white shadow border-2 rounded-3xl p-4 md:p-6 mr-2 h-full max-w-[500px]">
              <div>
                <div className="flex justify-between items-center w-full flex-wrap gap-2">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.location}</p>
                </div>
                <h5 className="my-2 text-sm text-blue-950">
                  {testimonial.carName}
                </h5>
                <div className="flex text-orange-500 my-3">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                      {index < testimonial.stars ? (
                        <StarIcon className="fill-orange-500" />
                      ) : (
                        <StarIcon className="text-gray-400" />
                      )}
                    </span>
                  ))}
                </div>

                <p className="font-medium my-2">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
