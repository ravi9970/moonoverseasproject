import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote: "This is an amazing product! It changed my life.",
    author: "Customer 1"
  },
  {
    quote: "Excellent service and great quality. Highly recommend!",
    author: "Customer 2"
  },
  {
    quote: "Absolutely fantastic! Will buy again.",
    author: "Customer 3"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="container mx-auto  p-4 md:p-10">
      <div className="relative">
        <div className="testimonial-slider flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide min-w-full p-4 md:p-8 bg-gray-100 flex flex-col justify-center items-center">
              <p className="text-lg md:text-xl italic text-center">"{testimonial.quote}"</p>
              <h3 className="mt-4 text-base md:text-lg font-bold text-center">- {testimonial.author}</h3>
            </div>
          ))}
        </div>
        <button onClick={handlePrev} className="absolute top-1/2 left-2 md:left-0 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-2 md:right-0 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
