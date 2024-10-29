'use client'
import ApplyNowButton from '@/components/ApplyNowButton';
import React from 'react'
import { useRouter } from 'next/navigation';

const TopSection = () => {
  const router = useRouter();
  return (
    <div className="absolute top-0 bg-black/80 h-full w-full z-10">
      <div className="container py-20 h-full flex flex-col gap-10 justify-center">
        <h1 className="font-secondary text-2xl w-full  sm:text-4xl font-black tracking-tight text-white">
          Press & media
        </h1>
        <ApplyNowButton
          onClick={() => {
            router.push("/admissions");
          }}
        />
      </div>
    </div>
  );
}

export default TopSection