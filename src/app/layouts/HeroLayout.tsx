// components/Hero.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HeroProps {
  backgroundImage: StaticImageData | string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageAlt?: string;
  className?: string;
  showButton?: boolean;
}

function Hero({
  backgroundImage,
  title,
  description,
  buttonText = "Daftar Sekarang",
  buttonLink = "#",
  imageAlt = "Hero Background",
  className = "",
  showButton = true
}: HeroProps) {
  return (
    <div className={`relative bg-blue-500 h-screen md:h-screen ${className}`}>
      <Image
        src={backgroundImage}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="opacity-100 transition-opacity duration-500"
        priority
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full md:max-w-4xl md:px-4 ">
        <h1 className="text-4xl font-extrabold mb-4 sm:text-6xl text-white">
          {title}
        </h1> 
        <p className="text-lg mb-6 sm:text-base text-white">
          {description}
        </p>
        {showButton && (
          <a href={buttonLink}>
            <button className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              {buttonText}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;