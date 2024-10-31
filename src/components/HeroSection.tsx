'use client'
import Image from 'next/image';
import React from 'react'
import ApplyNowButton from './ApplyNowButton';
import { useRouter } from 'next/navigation';

const HeroSection = ({ title, buttonText, buttonLink }: { title: string, buttonText?: string, buttonLink: string }) => {
  const router = useRouter();
  return (
    <div className="relative w-full h-[60vh]">
      <Image
        width={1920}
        height={1280}
        src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
}

export default HeroSection