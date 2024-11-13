"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiCircleFill } from "react-icons/ri";
import CallToAction from "../CallToAction";

// Use dynamic imports for components
const TestimonialCard = dynamic(
  () => import("@/components/home/TestimonialCard")
);
const GhostLine = dynamic(() => import("@/components/GhostLine"));

const testimonials = [
  {
    content:
      "The school has been an incredible place for our child to grow academically and personally. We couldn’t be happier!",
    author: "Esther W.",
    role: "Parent",
  },
  {
    content:
      "The dedication of the teachers and staff is unmatched. Our child feels supported and motivated every day.",
    author: "Kenneth N.",
    role: "Parent",
  },
  {
    content:
      "The balance between academics and extracurriculars has really helped our child discover new passions and talents.",
    author: "Purity M.",
    role: "Parent",
  },
  {
    content:
      "The school has been a great place for our child to learn and grow. The teachers are dedicated and the facilities are top-notch.",
    author: "Amos K.",
    role: "Parent",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <section className="bg-primary py-10 md:py-16 w-full">
      <div className="container space-y-14">
        <div className="gap-3 flex flex-row items-center justify-center">
          <RiCircleFill className="text-tertiary" />
          <h2 className="font-secondary text-xl md:text-3xl w-full font-bold tracking-tight text-white">
            Parents of Comejuu students come happy and leave happier
          </h2>
        </div>

        <GhostLine styles="via-white/30" />

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={8000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          minimumTouchDrag={100}
          pauseOnHover={false}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
          itemClass="ml-[9px] md:ml-0"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="h-full cursor-pointer">
              <TestimonialCard
                content={t.content}
                author={t.author}
                role={t.role}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <Suspense fallback={<div>Loading Call to Action...</div>}>
        <div className="pt-10 m-5">
          <CallToAction />
        </div>
      </Suspense>
    </section>
  );
};

export default Testimonials;
