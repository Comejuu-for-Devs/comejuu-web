"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CurriculumCorouselProps {
  values: StaticImageData[];
  height?: string;
  className?: string;
}

const CurriculumCorousel: React.FC<CurriculumCorouselProps> = ({
  values,
  height = "h-[89vh]",
  className = "",
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 1,
    },
    largeDesktop: {
      breakpoint: { max: 1600, min: 1280 },
      items: 1,
    },
    laptop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    largeMobile: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative w-full">
      {/* Carousel Section */}
      <div className={`relative w-full md:${height} ${className}`}>
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          customTransition="all 0.5s ease-in-out"
          transitionDuration={500}
          removeArrowOnDeviceType={[]}
          pauseOnHover={false}
          infinite={true}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          className="w-full h-full"
          containerClass="carousel-container"
          itemClass="carousel-item h-full"
          minimumTouchDrag={20}
          dotListClass="custom-dot-list-style"
        >
          {values.map((value, index) => (
            <Image
              className="w-full h-[300px] object-cover rounded-lg"
              key={index}
              src={value}
              alt="school curriculum"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CurriculumCorousel;
