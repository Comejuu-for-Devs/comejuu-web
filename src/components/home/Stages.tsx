"use client";
import React from "react";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";
import dynamic from 'next/dynamic';

// Dynamically import the StageCard component
const StageCard = dynamic(() => import('@/components/home/StageCard'));

const Stages = () => {
  const isMobile = useGetWindowWidth();
  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fff;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f5f5f5;
          border-radius: 10px;
          height: 1px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
      <section className="pb-20 overflow-x-auto">
        <div className="container space-y-10">
          <h2
            className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
          text-primary"
          >
            CBC curriculum offered
          </h2>

          <div
            className={`${
              isMobile ? "overflow-x-auto" : "overflow-x-hidden"
            } custom-scrollbar`}
          >
            <div className="flex w-max">
              <StageCard
                sectionId="pre-school"
                name="Pre school"
                bgStyles="bg-primary"
                textStyles="text-tertiary"
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
    </>
  );
};

export default Stages;
