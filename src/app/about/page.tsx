"use client";
import React from "react";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

import Dots from "@/components/layout/Dots";
import StaffCard from "@/components/about/StaffCard";
// import CommunityCard from '@/components/about/CommunityCard'
import CallToAction from "@/components/CallToAction";
import ApplyNowButton from "@/components/ApplyNowButton";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen pb-20 relative">
      <Dots />

      <div className="space-y-10 sm:space-y-20">
        <div className="">
          {/* HERO */}
          <div className="relative w-full h-[60vh]">
            <Image
              width={1920}
              height={1280}
              src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="asbolute w-full h-full object-cover"
            />

            <div className="absolute top-0 bg-black/80 h-full w-full z-10">
              <div className="container py-20 h-full flex flex-col gap-10 justify-center">
                <h1 className="font-secondary text-4xl w-full  sm:text-6xl font-black tracking-tight text-white">
                  Where Your Child&apos;s Future Takes Flight With Confidence
                </h1>

                <ApplyNowButton
                  onClick={() => {
                    router.push(`/admissions`);
                  }}
                />
              </div>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="pt-10">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-5">
                <h2 className="font-secondary text-2xl sm:text-3xl w-full sm:w-1/2 font-bold">
                  Message from the director
                </h2>

                <RiDoubleQuotesL className="text-tertiary text-3xl" />

                <p className="text-base sm:text-lg font-light w-full text-gray-500">
                  At Comejuu, we strive to nurture both academic excellence and
                  personal growth. Our dedicated educators create a supportive,
                  inclusive environment that encourages curiosity, critical
                  thinking, and collaboration. Through engaging lessons and
                  diverse extracurricular activities, we help students discover
                  their passions and develop the skills they need for the
                  future. We’re excited to be part of your child’s journey and
                  look forward to helping them thrive.
                </p>
              </div>

              <div className="space-y-5">
                <h2 className="font-secondary text-2xl sm:text-3xl w-full sm:w-1/2 font-bold">
                  Message from the principal
                </h2>

                <RiDoubleQuotesL className="text-tertiary text-3xl" />

                <p className="text-base sm:text-lg font-light w-full text-gray-500">
                  At Comejuu, we strive to nurture both academic excellence and
                  personal growth. Our dedicated educators create a supportive,
                  inclusive environment that encourages curiosity, critical
                  thinking, and collaboration. Through engaging lessons and
                  diverse extracurricular activities, we help students discover
                  their passions and develop the skills they need for the
                  future. We’re excited to be part of your child’s journey and
                  look forward to helping them thrive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OUR STAFF */}
        <div className="bg-primary py-16">
          <div className="container space-y-10">
            <h2
              className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
            text-white"
            >
              Our Staff
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
              <StaffCard
                name="John Doe"
                role="Teacher"
                img="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <StaffCard
                name="John Doe"
                role="Lab assistant"
                img="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <StaffCard
                name="John Doe"
                role="Guitar teacher"
                img="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <StaffCard
                name="John Doe"
                role="Grounds keeper"
                img="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>

        {/* OUR COMMUNITY */}
        {/* <div className="">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-primary">
              Our Community
            </h2>

            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <CommunityCard
                  title='Parents'
                  bgStyles='bg-primary'
                  textStyles='text-white'
                  img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
                <CommunityCard
                  title='Alumni'
                  bgStyles='bg-secondary'
                  textStyles='text-white'
                  img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
                <CommunityCard
                  title='Supporters'
                  bgStyles='bg-tertiary'
                  textStyles='text-primary'
                  img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* CALL TO ACTION */}
        <CallToAction />
      </div>
    </section>
  );
};

export default About;
