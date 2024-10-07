"use client";
import React, { useState, useRef } from "react";

export default function GoogleDriveSlider() {
  const images = [
    "https://www.rebandhamadameen.tech/IMG_1033.jpg",
    "https://media.discordapp.net/attachments/1241406719800643736/1291514247175475291/IMG_5016.jpg?ex=6704fd1f&is=6703ab9f&hm=ca4ce29f9cd226b869016ec29669d5e45eb2290a6a610ab0d53260e1c0be201f&=&format=webp&width=762&height=701",
    "https://media.discordapp.net/attachments/1241406719800643736/1292899741356527686/IMG_5643.jpg?ex=67056a37&is=670418b7&hm=ba50f7867470ffdb79ae05d3fcebcec38e796a852cb029c373e2237893285b6f&=&format=webp&width=468&height=701",
  ];

  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleSwipe = (e) => {
    if (e.type === "touchstart") {
      touchStartX.current = e.touches[0].clientX;
    } else if (e.type === "touchend") {
      touchEndX.current = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        changeIndex(diff > 0 ? 1 : -1);
      }
    }
  };

  const changeIndex = (direction) => {
    setTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev + direction + images.length) % images.length);
      setTransitioning(false);
    }, 300);
  };

  return (
    <div className="px-4">
      <div
        className="relative rounded-lg overflow-hidden shadow-xl"
        style={{ height: "400px", width: "100%" }}
        onTouchStart={handleSwipe}
        onTouchEnd={handleSwipe}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out ${
            transitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          style={{
            backgroundImage: `url(${images[index]})`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 dark:bg-opacity-30"></div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20 focus:outline-none hidden md:block"
          onClick={() => changeIndex(-1)}
        >
          &#10094;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20 focus:outline-none hidden md:block"
          onClick={() => changeIndex(1)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
