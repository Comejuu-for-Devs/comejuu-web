"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import { StudentLifeCard } from "./StudentLifeCard";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";

const events = [
  {
    title: "Sports & Physical Education",
    date: "April, 1 2024",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    navId: "extracurricular-container",
  },
  {
    title: "Talent Development",
    date: "April, 20 2024",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    navId: "extracurricular-container",
  },
  {
    title: "Pastoral Care",
    date: "May, 6 2024",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    navId: "extracurricular-container",
  },
];

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

const StudentLife = () => {
  const isMobile = useGetWindowWidth();
  return (
    <section className="bg-secondary py-10 w-full">
      <div className="container space-y-10">
        <h2 className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold text-white">
          Student life at Comejuu
        </h2>

        <div className={isMobile ? "overflow-x-auto -mx-4 px-4" : "overflow-x-hidden"}>
          <div className={`flex ${isMobile ? 'flex-col' : 'justify-center items-center'} gap-5`}>
            {events.map((event, i) => (
              <div key={i} className={isMobile ? "w-full" : "w-1/3"}>
                <StudentLifeCard
                  title={event.title}
                  img={event.img}
                  link={`/curriculum#${event.navId}`}
                  linkTitle="Learn More"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
