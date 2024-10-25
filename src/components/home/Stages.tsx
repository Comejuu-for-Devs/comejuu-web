"use client";
import React from "react";

import StageCard from "@/components/home/StageCard";
import { useEffect, useState } from "react";

const Stages = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
     const checkIfMobile = () => {
       setIsMobile(window.innerWidth <= 768);
     };

     checkIfMobile();
     window.addEventListener("resize", checkIfMobile);

     return () => window.removeEventListener("resize", checkIfMobile);
   }, []);
  return (
    <section className="pb-20 overflow-x-auto">
      <div className="container space-y-10">
        <h2
          className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
          text-primary"
        >
          CBC curriculum offered
        </h2>

        <div className={isMobile ? "overflow-x-auto" : "overflow-x-hidden"}>
          <div className="flex w-max">
            <StageCard
              sectionId="pre-school"
              name="Pre school"
              bgStyles="bg-primary"
              textStyles="text-white"
              level="playgroup, pp1, pp2"
            />
            <StageCard
              sectionId="primary-school"
              name="Primary school"
              bgStyles="bg-secondary"
              textStyles="text-white"
              level="grade 1 - 6"
            />
            <StageCard
              sectionId="junior-secondary"
              name="Junior secondary"
              bgStyles="bg-tertiary"
              textStyles="text-primary"
              level="grade 7 - 9"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stages;
