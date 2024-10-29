"use client";

import React from "react";
import Image from "next/image";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";

export interface ValueSlide {
  title: string;
  description: string;
  longDescription: string;
  image: string;
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

const ValueCarousel: React.FC<ValueCarouselProps> = ({
  values,
  height = "h-[85vh]",
  className = "",
}) => {
  const router = useRouter();
  const isMobile = useGetWindowWidth();

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
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center w-full px-5 md:px-10 md:justify-between md:bottom-10">
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
    <div className={`relative w-full ${height} ${className}`}>
      {/* Static Section */}
      <div className="container absolute mt-20 top-0 left-0 right-0 z-10 flex flex-col sm:flex-row items-center justify-between gap-10">
        <div className="space-y-4 max-w-2xl text-center">
          <h1 className="text-left font-secondary md:mt-2 mt-10 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Where dreams spread their wings
          </h1>
          {/* <p className="text-xl text-white/90 font-light">spread their wings</p> */}
        </div>

        <Button
          className="bg-white text-primary w-max h-max"
          onClick={() => {
            router.push("/admissions");
          }}
        >
          Apply Now
          <RiArrowRightLine />
        </Button>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          customTransition="all 0.5s ease-in-out"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          pauseOnHover={true}
          infinite={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={isMobile ? undefined : <CustomButtonGroup />}
          autoPlay={true}
          autoPlaySpeed={10000}
          className="w-full h-full"
          containerClass="carousel-container h-full"
          itemClass="carousel-item h-full"
        >
          {values.map((value, index) => (
            <div key={index} className="relative h-[85vh] w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={value.image}
                  alt={value.title}
                  layout="fill"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-end">
                <div className="container mx-auto px-5 py-10 md:py-20 flex flex-col h-full justify-end">
                  {/* Bottom Section */}
                  <div className="flex flex-col md:flex-row items-start md:items-end gap-5 md:gap-10">
                    <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-white opacity-20">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <div className="space-y-2 md:space-y-4 max-w-2xl">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/70">
                          {value.description}
                        </p>
                      </div>
                      <p className="text-sm md:text-base text-white/80">
                        {value.longDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ValueCarousel;
