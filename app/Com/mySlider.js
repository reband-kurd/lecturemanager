"use client";
import React, { useState, useRef } from "react";

export default function GoogleDriveSlider() {
  const images = [
    "https://scontent.febl5-1.fna.fbcdn.net/v/t1.6435-9/52771872_442092766531623_4620368393600499712_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=xpvrhSAkMgoQ7kNvgGpRj9E&_nc_ht=scontent.febl5-1.fna&_nc_gid=AccGV5zE8J_Mu9G4BEfwm1-&oh=00_AYAzz03VyQG2rNdWVFcE3NfuWLVb1TJtLKZaPwV5J7RrAg&oe=67261526",
    "https://backend.ethesis.su.edu.krd/Attachment_2022-6-20_1685.jpeg",
    "https://media.discordapp.net/attachments/1241406719800643736/1291514247175475291/IMG_5016.jpg?ex=67005fdf&is=66ff0e5f&hm=790081bda8100a4141966457c220c9b16b5fca3cdcc204fa07d93bd2cfd4f050&=&format=webp&width=762&height=701",
    "https://media.discordapp.net/attachments/1241406719800643736/1241408682638577704/IMG_4505.jpg?ex=6700066e&is=66feb4ee&hm=21654d2af8f0215d4b282b022daabcb045c0ed6542b711e0f73b9eda5f551560&=&format=webp&width=935&height=701",
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
