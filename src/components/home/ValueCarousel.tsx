"use client";

import { StaticImageData } from "next/image";
import React, { Suspense, lazy } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export interface ValueSlide {
  title: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
}

interface ValueCarouselProps {
  values: ValueSlide[];
  height?: string;
  className?: string;
}

interface CustomButtonGroupProps {
  next?: () => void;
  previous?: () => void;
  carouselState?: {
    currentSlide: number;
    totalItems: number;
  };
}

const ValueSlide = lazy(() => import("./ValueSlide"));

const ValueCarousel: React.FC<ValueCarouselProps> = ({
  values,
  height = "h-[85vh]",
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

  const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({
    next,
    previous,
  }) => {
    return (
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center w-full px-5 md:px-10 md:justify-between md:bottom-14">
        <button
          onClick={() => previous?.()}
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center border
          border-white/50 text-tertiary text-base sm:text-lg hover:bg-white hover:text-primary transition z-20"
        >
          <RiArrowLeftLine />
        </button>

        <button
          onClick={() => next?.()}
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center border
          border-white/50 text-tertiary text-base sm:text-lg hover:bg-white hover:text-primary transition z-20 ml-8 sm:ml-12 md:ml-0"
        >
          <RiArrowRightLine />
        </button>
      </div>
    );
  };

  return (
    <div className="relative w-full">
      {/* Carousel Section */}
      <div className={`relative w-full ${height} ${className}`}>
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          customTransition="all 0.5s ease-in-out"
          transitionDuration={500}
          removeArrowOnDeviceType={[]}
          pauseOnHover={true}
          infinite={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup />}
          autoPlay={true}
          autoPlaySpeed={5000}
          className="w-full h-full"
          containerClass="carousel-container h-full"
          itemClass="carousel-item h-full"
        >
          {values.map((value, index) => (
            <Suspense fallback={<div></div>} key={index}>
              <ValueSlide value={value} index={index} />
            </Suspense>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ValueCarousel;
