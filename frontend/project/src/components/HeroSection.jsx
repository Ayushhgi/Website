import React, { useState, useEffect, useRef } from "react";

const images = [
  {
    url: "/images/hero1.jpg",
    alt: "Campus Aerial View",
    caption: "Discover Your Future with LNCT",
  },
  {
    url: "/images/hero2.jpg",
    alt: "Students Celebrating",
    caption: "Vibrant Student Life",
  },
  {
    url: "/images/hero3.jpg",
    alt: "Modern Labs",
    caption: "State-of-the-Art Infrastructure",
  },
  {
    url: "/images/hero4.jpg",
    alt: "Tech Labs",
    caption: "Cutting-Edge Facilities",
  },
  {
    url: "/images/hero5.jpeg",
    alt: "Tech Labs",
    caption: "Cutting-Edge Facilities",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    stopAutoSlide();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[89vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="absolute top-0 left-0 w-full h-full "
            onError={() => console.error(`Image failed to load: ${image.url}`)}
          />

        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="z-20 absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full bg-gray-900 bg-opacity-70 text-white hover:bg-opacity-90 focus:outline-none"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="z-20 absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full bg-gray-900 bg-opacity-70 text-white hover:bg-opacity-90 focus:outline-none"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
    </section>
  );
};

export default HeroSection;
