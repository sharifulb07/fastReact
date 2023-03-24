import React from "react";

function CarouselIndicators({ slides, currentIndex, switchIndex }) {
  return (
    <>
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            className={`carousel-indicator-item ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => switchIndex(index)}
          ></button>
        ))}
      </div>
    </>
  );
}

export default CarouselIndicators;
