import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";

function Carousel({ slides, interval, controls, indicators, autoPlay }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };
  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  };
  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem
            slide={slide}
            key={index}
            startSlide={startSlideTimer}
            stopSlide={stopSlideTimer}
          />
        ))}
      </div>
      {indicators && (
        <CarouselIndicators
          slides={slides}
          currentIndex={currentSlide}
          switchIndex={switchIndex}
        />
      )}
      {controls && <CarouselControls prev={prev} next={next} />}
    </div>
  );
}

export default Carousel;
