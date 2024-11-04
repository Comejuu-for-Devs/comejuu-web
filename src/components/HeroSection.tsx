"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ApplyNowButton from "./ApplyNowButton";
import { useRouter } from "next/navigation";

const HeroSection = ({
  title,
  buttonLink,
  img,
}: {
  title: string;
  buttonText?: string;
  buttonLink: string;
  img: StaticImageData;
}) => {
  const router = useRouter();
  return (
    <div className="relative w-full h-[60vh]">
      <Image
        width={1920}
        height={1280}
        src={img ?? ""}
        alt=""
        className="asbolute w-full h-full object-cover rounded-xl"
      />

      <div className="absolute top-0 bg-black/80 h-full w-full z-10">
        <div className="container py-20 h-full flex flex-col gap-10 justify-center">
          <h1 className="font-secondary text-2xl w-full  sm:text-4xl font-black tracking-tight text-white">
            {title}
          </h1>

          <ApplyNowButton
            onClick={() => {
              router.push(buttonLink);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
