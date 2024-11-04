"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import { StudentLifeCard } from "./StudentLifeCard";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";
import Sports from "../../../public/images/student_life/sports.jpg";
import Physical_Education from "../../../public/images/student_life/physical_education.jpg";
import Music from "../../../public/images/student_life/music.jpg";
import Wholesome_Meals from "../../../public/images/student_life/wholesome_meals.jpg";
import School_Transport from "../../../public/images/student_life/school_transport.jpg";
import Board_Games from "../../../public/images/student_life/board_games.jpg";
const events = [
  {
    title: "Physical Education",
    date: "April, 1 2024",
    img: Physical_Education,
    navId: "extracurricular-container",
  },
  {
    title: "Sports",
    date: "April, 20 2024",
    img: Sports,
    navId: "extracurricular-container",
  },
  {
    title: "Board Games",
    date: "May, 6 2024",
    img: Board_Games,
    navId: "extracurricular-container",
  },
  {
    title: "Music",
    date: "May, 15 2024",
    img: Music,
    navId: "extracurricular-container",
  },
  {
    title: "Wholesome Meals",
    date: "May, 30 2024",
    img: Wholesome_Meals,
    navId: "extracurricular-container",
  },
  {
    title: "School Transport",
    date: "June, 10 2024",
    img: School_Transport,
    navId: "extracurricular-container",
  },
];

const StudentLife = () => {
  const isMobile = useGetWindowWidth();
  return (
    <section className="bg-tertiary py-10 w-full">
      <div className="container space-y-10">
        <h2 className="font-primary text-2xl md:text-3xl w-full  font-bold text-primary">
          Student life at Comejuu is vibrant and holistic
        </h2>

        <div
          className={
            isMobile ? "overflow-x-auto -mx-4 px-4" : "overflow-x-hidden"
          }
        >
          <div
            className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-5`}
          >
            {events.map((event, i) => (
              <div key={i} className="w-full">
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
