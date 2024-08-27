import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // for react-responsive-carousel
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import Image from "next/image";

const CarImageCarousel = (props) => {
  const { images, car } = props;

  return (
    <div className="carousel-container">
      <Head>
        <style>
          {`
            .carousel-container {
              display: flex;
              align-items: center;
              justify-content: center;
            }
           
            .thumbnail-container {
              display: flex;
              flex-direction: column;
            }
            .thumbnail {
              width: 100px; /* Adjust thumbnail width as needed */
              margin-bottom: 10px; /* Adjust thumbnail margin as needed */
            }
            `}
        </style>
      </Head>
      <div className="carousel flex-1 md:ml-5">
        <Carousel
          showStatus={false}
          showArrows={true}
          autoPlay={false}
          swipeable={true}
          interval={4000}
          infiniteLoop={true}
          swipeScrollTolerance={50}
          preventMovementUntilSwipeScrollTolerance={true}
          emulateTouch={true}
          dynamicHeight={true}
          thumbWidth={150}
          showIndicators={false}
          renderThumbs={() =>
            images.map((image, index) => (
              <Image width={150} height={150} src={image.image} key={index} />
            ))
          }
        >
          {images ? (
            images.map((image, index) => {
              return (
                <div key={index}>
                  <InnerImageZoom
                    src={image.image}
                    alt={`${car?.lead[0]?.Brand?.replace(
                      / /g,
                      "_"
                    )}-${car?.lead[0]?.varient?.replace(
                      / /g,
                      "_"
                    )}-${car?.lead[0]?.Model?.split(" ").join(
                      ""
                    )}-${car?.lead[0]["Registration In"]
                      .replace(/ /g, "_")
                      .slice(0, 2)}`}
                  />
                </div>
              );
            })
          ) : (
            <img className="h-52 w-full" />
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default CarImageCarousel;
