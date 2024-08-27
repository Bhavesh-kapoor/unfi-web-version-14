import Link from "next/link";
import Image from "next/image";
import Rating from "../Rating";
import {
  CarFront,
  MeterIcon,
  UserIcon,
  FuelIcon,
  InfoIcon,
} from "@/common/IconsSvg";
// import FeaturedCars from "../FeaturedCars";

// const responsiveCarouselConfig = {
//   desktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

const AllCars = ({
  carListing,
  gridView,
  imageLink,
  assured,
  folder,
  featuredlist,
}) => {
  return (
    <div>
      <h3 className="text-4xl font-bold pb-5 lg:mt-4">All Cars</h3>

      {/* Uncomment this section if you want to show FeaturedCars */}
      {/* 
      <h3 className="md:px-20 px-6 text-2xl text-[#000] font-black my-2 buyh1fontfamily">
        Featured Cars
      </h3>
      <div className="md:px-4">
        <FeaturedCars featuredlist={featuredlist} desktopItemNum={3} />
      </div> 
      */}

      <div className="grid grid-cols-1 lg:pr-10 md:grid-cols-3 gap-5 mb-10">
        {carListing && carListing.length > 0 ? (
          [...carListing, ...carListing].map((car, index) => (
            <div
              key={index}
              id="carList"
              className="rounded-2xl shadow-md w-full h-full"
            >
              <Link
                href={{
                  pathname: `/cars/${car.lead.brand.replace(
                    / /g,
                    "_"
                  )}-${car.lead.varient.replace(/ /g, "_")}-${car.lead.model
                    .split(" ")
                    .join("")}-${car.lead.registration_in
                    .replace(/ /g, "_")
                    .slice(0, 2)}`.toLowerCase(),
                  query: { id: car.lead.id, assured: assured },
                }}
              >
                <Image
                  className="rounded-t-2xl w-full h-auto object-contain"
                  src={car?.lead?.images[0]?.image}
                  width={400}
                  height={800}
                  priority={1}
                  alt={`${car.lead.brand} ${car.lead.model}`}
                />
              </Link>
              {/*<Carousel
                  responsive={responsiveCarouselConfig}
                  infinite
                  autoPlay
                  autoPlaySpeed={3000}
                  keyBoardControl
                  showDots={false}
                  containerClass="carousel-container"
                  itemClass="carousel-item-padding-40-px"
                >
                  {car.lead.images &&
                    car.lead.images.map((img, idx) => (
                      <Link
                        href={{
                          pathname: `/cars/${car.lead.brand.replace(
                            / /g,
                            "_"
                          )}-${car.lead.varient.replace(
                            / /g,
                            "_"
                          )}-${car.lead.model
                            .split(" ")
                            .join("")}-${car.lead.registration_in
                            .replace(/ /g, "_")
                            .slice(0, 2)}`.toLowerCase(),
                          query: { id: car.lead.id, assured: assured },
                        }}
                        key={idx}
                      >
                        <Image
                          className="rounded-12"
                          src={img.image}
                          width={800}
                          height={800}
                          priority={1}
                          alt={`${car.lead.brand} ${car.lead.model}`}
                        />
                      </Link>
                    ))}
                </Carousel>*/}
              <div className="changeallcartext">
                <Link
                  href={{
                    pathname: `/cars/${car.lead.brand
                      .replace(/ /g, "_")
                      .toLowerCase()}-${car.lead.varient
                      .replace(/ /g, "_")
                      .toLowerCase()}-${car.lead.model
                      .split(" ")
                      .join("")
                      .toLowerCase()}-${car.lead.registration_in
                      .replace(/ /g, "_")
                      .slice(0, 2)
                      .toLowerCase()}`,
                    query: { id: car.lead.id, assured: assured },
                  }}
                  className=""
                >
                  <div className="justify-start items-center">
                    <p className="text-[12px] md:text-sm text-black/100 font-medium font-sans">
                      Unifi Rating
                    </p>
                    <Rating defaultValue={parseInt(car.lead.engine_rating)} />
                  </div>

                  <div className="relative">
                    <h4 className="text-base uppercase line-clamp-2 font-extrabold my-2 font-sans text-start">
                      {car.lead.brand}
                    </h4>
                    <p className="mb-4 md:text-sm text-start space-x-2">
                      <span>{car.lead.model}</span>
                      <span>•</span>
                      <span>{car.lead.transmission}</span>
                    </p>
                  </div>
                </Link>

                <Link
                  href={{
                    pathname: `/cars/${car.lead.brand
                      .replace(/ /g, "_")
                      .toLowerCase()}-${car.lead.varient
                      .replace(/ /g, "_")
                      .toLowerCase()}-${car.lead.model
                      .split(" ")
                      .join("")
                      .toLowerCase()}-${car.lead.registration_in
                      .replace(/ /g, "_")
                      .slice(0, 2)
                      .toLowerCase()}`,
                    query: { id: car.lead.id, assured: assured },
                  }}
                >
                  <div className="flex flex-wrap gap-1 text-xs mt-2">
                    <div className="flex items-center space-x-2 p-2 py-[1px] rounded-md bg-gray-200 opacity-60">
                      <FuelIcon className="p-1" />
                      <span className="font-semibold">
                        {car.lead.engine_type}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 py-[1px] rounded-md bg-gray-200 opacity-60">
                      <MeterIcon className="p-1" />
                      <span className="font-semibold">
                        {parseInt(
                          car.lead.km_driven.split(" ")[0]
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 py-[1px] rounded-md bg-gray-200 opacity-60">
                      <CarFront className="p-1" />
                      <span className="font-semibold">
                        {car.lead.registration_in}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 py-[1px] rounded-md bg-gray-200 opacity-60">
                      <UserIcon className="p-1" />
                      <span className="font-semibold">
                        {car.lead.ownership.split(" ")[0]} Owner
                      </span>
                    </div>
                  </div>

                  <div className="relative pt-3 flex flex-wrap-reverse gap-1 lg:items-center flex-row lg:flex-row">
                    <p className="font-bold font-sans px-2">
                      ₹{" "}
                      {parseInt(car.lead.selling_amount).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                    <div className="group relative hidden lg:block">
                      <InfoIcon className="w-6 h-6 fill-blue-500 text-white cursor-pointer" />
                      <div className="absolute hidden group-hover:block bg-white text-sm shadow-lg p-4 rounded-lg w-64 z-20 -top-48 left-3/4 transform -translate-x-1/2">
                        <ul className="list-disc pl-4">
                          <li>Free ownership transfer</li>
                          <li>Free accessories</li>
                          <li>Comprehensive insurance</li>
                          <li>Certificate pollution certificate</li>
                          <li>
                            Complete warranty up to 2,000 km or 30 days,
                            whichever comes first.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { gridView, assured, folder } = context.query;

  const res = await fetch(
    `https://api.yourservice.com/cars?assured=${assured}`
  );
  const carListing = await res.json();

  return {
    props: {
      carListing,
      gridView: gridView === "true",
      imageLink: "image-link-placeholder",
      assured: assured || null,
      folder: folder || "default-folder",
    },
  };
}

export default AllCars;
