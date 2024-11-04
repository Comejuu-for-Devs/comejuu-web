"use client";
import React, { lazy, Suspense } from "react";
import { useRouter } from "next/navigation";

const Button = lazy(() => import("../Button"));
const RiArrowRightLine = lazy(() => import("react-icons/ri").then(module => ({ default: module.RiArrowRightLine })));

const Banner = () => {
  const router = useRouter();
  return (
    <div className="bg-primary text-white pt-20 pb-1">
      <div className="md:container md:mx-auto flex sm:flex-row items-center justify-between gap-2 md:gap-10 px-2">
        <div className="space-y-4 max-w-2xl text-center sm:text-left">
          <h1 className="font-secondary text-left text-xs md:text-lg lg:text-2xl tracking-normal">
            Welcome to a CBC school where dreams spread their wings and land on
            success
          </h1>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Button
            className="md:mt-2 bg-white text-primary w-max h-max flex items-center transition duration-300 ease-in-out"
            onClick={() => {
              router.push("/admissions");
            }}
          >
            <p className="text-left text-xs md:text-base whitespace-nowrap">
              Apply Now
            </p>
            <RiArrowRightLine className="md:ml-2" />
          </Button>
        </Suspense>
      </div>
    </div>
  );
};

export default Banner;
