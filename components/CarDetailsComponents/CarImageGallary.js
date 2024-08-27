import React from 'react'
import ImageGallery from "react-image-gallery";

const CarImageGallary = (props) => {

    const {images} = props
    // console.log(images)

  return (
    <ImageGallery items={images.image} />
  )
}

export default CarImageGallary