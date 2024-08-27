import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeCarousel = () => {
  return (
    <Carousel
          showStatus={false}
          showArrows={true}
          autoPlay={true}
          swipeable={true}
          dynamicHeight={false}
          swipeScrollTolerance={50}
          preventMovementUntilSwipeScrollTolerance={true}
          emulateTouch={true}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
        >
          <div className="h-48 md:h-96" style={{height:"480px"}}><img src="../carousel/carousel1.webp" className='h-full'/>  </div>
          <div className="h-48 md:h-96" style={{height:"480px"}}> <img src="../carousel/carousel2.webp" className='h-full'/></div>
          <div className="h-48 md:h-96" style={{height:"480px"}}> <img src="../carousel/carousel3.webp" className='h-full'/></div>
          <div className="h-48 md:h-96" style={{height:"480px"}}> <img src="../carousel/abouthero.jpg" className='h-full'/></div>

        </Carousel>
  )
}

export default HomeCarousel