import React from 'react'

function CarouselItem({slide, startSlide, stopSlide}) {
  return (
    <div className="carousel-item" onMouseEnter={startSlide} onMouseOut={stopSlide}>
    <img src={slide} alt='photos' />
  </div>
  )
}

export default CarouselItem
