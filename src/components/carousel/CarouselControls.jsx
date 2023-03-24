import React from 'react'

function CarouselControls({prev, next}) {
  return (
    <>
    <button className='carousel-control left' onClick={prev}>Prev</button>
    <button className='carousel-control right' onClick={next}>Next</button>
      
    </>
  )
}

export default CarouselControls
