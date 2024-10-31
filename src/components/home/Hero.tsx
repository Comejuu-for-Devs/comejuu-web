"use client";
import React, { lazy, Suspense } from "react";
import "react-multi-carousel/lib/styles.css";

const ValueCarousel = lazy(() => import("@/components/home/ValueCarousel"));

export const values = [
  {
    title: "Excellence",
    description: "Nurturing minds, fostering growth",
    longDescription: "At Comejuu Premier Academy, we strive for excellence in everything we do, inspiring our students to reach their full potential and aim high.",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Integrity",
    description: "Building tomorrow's leaders",
    longDescription: "Honesty and integrity are at the heart of our community, guiding our students to be trustworthy and responsible individuals.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070",
  },
  {
    title: "Respect",
    description: "Unleashing artistic potential",
    longDescription: "We foster a culture of respect for all, where everyone feels valued and appreciated, creating a harmonious learning environment.",
    image: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?q=80&w=2070",
  },
  {
    title: "Compassion",
    description: "Developing athletic champions",
    longDescription: "We encourage our students to be kind and caring, developing empathy and understanding for others.",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Responsibility",
    description: "Empowering future leaders",
    longDescription: "We empower our students to take ownership of their actions and decisions, fostering a sense of responsibility.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Curiosity",
    description: "Inspiring lifelong learning",
    longDescription: "We nurture a love for learning and encourage our students to be inquisitive and explore the world around them with an open mind.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full">
      <div className="absolute inset-0">
        <Suspense fallback={<div>Loading...</div>}>
          <ValueCarousel values={values} />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
