"use client";
import React from 'react'
import dynamic from 'next/dynamic';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Use dynamic imports for components
const TestimonialCard = dynamic(() => import('@/components/home/TestimonialCard'));
const GhostLine = dynamic(() => import('@/components/GhostLine'));

const testimonials = [
  {
    content: "The school has been an incredible place for our child to grow academically and personally. We couldn’t be happier!",
    author : "Jack Daniels",
    role: "Parent",
  },
  {
    content: "The dedication of the teachers and staff is unmatched. Our child feels supported and motivated every day.",
    author : "Jack Daniels",
    role: "Parent",
  },
  {
    content: "The balance between academics and extracurriculars has really helped our child discover new passions and talents.",
    author : "Jack Daniels",
    role: "Parent",
  }
]

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
    <section className='bg-primary py-10 md:py-16 w-full'>
      <div className="container space-y-14">
        <h2 className="font-secondary text-3xl sm:text-4xl w-full font-bold tracking-tight text-white">
          Parents are happy, so will you be
        </h2>

        <GhostLine styles='via-white/30' />
        
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          minimumTouchDrag={100}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
          itemClass="px-2 py-2"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="h-full cursor-pointer">
              <TestimonialCard content={t.content} author={t.author} role={t.role}/>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
