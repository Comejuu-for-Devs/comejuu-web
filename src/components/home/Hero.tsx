"use client";
import React, { lazy, Suspense } from "react";
import "react-multi-carousel/lib/styles.css";
import Academic_Excellence from "../../../public/images/hero_carousel/academic_excellence.jpg";
import Curiosity_and_Adventure from "../../../public/images/hero_carousel/curiosity_adventure.jpg";
import Character_Development from "../../../public/images/hero_carousel/character_development.jpg";
import Safety_and_Security from "../../../public/images/hero_carousel/safety_security.jpg";
import Moulding_Future_Leaders from "../../../public/images/hero_carousel/moulding_future_leaders.jpg";
import ValueCarousel from "./ValueCarousel";

export const values = [
  {
    title: "Academic Excellence",
    description: "Nurturing minds, fostering growth",
    longDescription:
      "We strive for the highest standards in Kenyan CBC education, inspiring our students to realise their full academic potential.",
    image: Academic_Excellence,
  },
  {
    title: "Curiosity and Adventure",
    description: "Inspiring lifelong learning",
    longDescription:
      "Learning extends beyond the classroom as we encourage our students to be inquisitive and discover the world around them.",
    image: Curiosity_and_Adventure,
  },
  {
    title: "Character Development",
    description: "Building tomorrow's leaders",
    longDescription:
      "We instil strong moral values and ethical principles, shaping our students into responsible, honest, and respectful citizens.",
    image: Character_Development,
  },
  {
    title: "Safety and Security",
    description: "Creating a secure environment",
    longDescription:
      "We prioritise the safety and well-being of our students, creating a secure learning environment that gives parents peace of mind.",
    image: Safety_and_Security,
  },
  {
    title: "Moulding Future Leaders",
    description: "Empowering future leaders",
    longDescription:
      "We empower our students to take ownership of their actions and decisions, fostering their confidence and leadership skills in all situations.",
    image: Moulding_Future_Leaders,
  },
];

const Hero = () => {
  return (
    <section className="relative h-[95vh] w-full">
      <div className="absolute inset-0">
        <Suspense fallback={<div></div>}>
          <ValueCarousel values={values} />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
