"use client";
import React from "react";
import { RiCircleFill } from "react-icons/ri";
import EventCard from "@/components/home/EventCard";
import { events } from "@/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NewsEvents = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 3,
    },
    largeDesktop: {
      breakpoint: { max: 1600, min: 1280 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
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
    <section className="py-20">
      <div className="container space-y-10">
        <div className="flex items-center gap-3">
          <RiCircleFill className="text-tertiary" />
          <h2 className="text-3xl font-secondary tracking-[-.1px] font-bold text-primary">
            Upcoming Events
          </h2>
        </div>

        <div className="">
          <Carousel
            responsive={responsive}
            keyBoardControl={true}
            customTransition="all 0.5s ease-in-out"
            transitionDuration={500}
            removeArrowOnDeviceType={["desktop"]}
            infinite={true}
            pauseOnHover={false}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            className="w-full"
            containerClass="carousel-container"
            itemClass="carousel-item ml-[4px] md:ml-0"
          >
            {events.map((event, i) => (
              <EventCard
                key={i}
                title={event.title}
                date={event.date}
                action={event.action}
                link={event.link}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
