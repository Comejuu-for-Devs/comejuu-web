import React, { Suspense } from "react";
import Dots from "@/components/layout/Dots";
import Image from "next/image";
import TopSection from "./components/topSection";

// Dynamic imports
const MediaCenter = React.lazy(() => import("@/components/home/MediaCenter"));

const MediaRoom = () => {
  return (
    <section className="min-h-screen">
      <Dots />
      <div className="">
        <div className="relative w-full h-[60vh]">
          <Image
            width={1920}
            height={1280}
            src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="asbolute w-full h-full object-cover rounded-xl"
          />

          <TopSection />
        </div>

        {/* <h1 className="font-secondary text-6xl w-full sm:w-1/2 sm:text-8xl font-black tracking-tight">
            Press & media
          </h1> */}
        <MediaCenter />
      </div>
    </section>
  );
};

export default MediaRoom;
