import React, { Suspense } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
// Use dynamic imports for components
const Dots = dynamic(() => import("@/components/layout/Dots"), {
  suspense: true,
});
const StaffCard = dynamic(() => import("@/components/about/StaffCard"), {
  suspense: true,
});
const CallToAction = dynamic(() => import("@/components/CallToAction"), {
  suspense: true,
});

import AgriculturalTrainer from "../../../public/images/about_us/agricultural_trainer.jpg";
import LabTechnician from "../../../public/images/about_us/lab_technician.jpg";
import KitchenStaff from "../../../public/images/about_us/kitchen_staff.jpg";
import TeacherStaff from "../../../public/images/about_us/teaching_staff.jpg";
import Image from "next/image";
// const HeroSection = dynamic(() => import('@/components/HeroSection'), { suspense: true });
const staffDetails = [
  {
    img: AgriculturalTrainer,
    role: "Agricultural Trainer",
  },
  {
    img: LabTechnician,
    role: "Lab Technician",
  },
  {
    img: KitchenStaff,
    role: "Kitchen Staff",
  },
];
const About = () => {
  return (
    <section className="min-h-screen pb-20 relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Dots />
      </Suspense>

      <div className="space-y-10 sm:space-y-20">
        <div className="">
          {/* HERO */}

          <HeroSection
            img={TeacherStaff}
            title="Our team is committed to ensuring your child’s future takes flight with confidence"
            buttonText="Fill Admission Form"
            buttonLink="/admissions"
          />

          {/* MESSAGES */}
          <div className="pt-10">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-5">
                <h2 className="font-secondary text-2xl sm:text-3xl w-full sm:w-1/2 font-bold">
                  Message from the director
                </h2>

                <RiDoubleQuotesL className="text-tertiary text-3xl" />
                <p className="text-base sm:text-lg font-light w-full text-gray-500 mb-5">
                  Dear Parents and Guardians,
                </p>
                <p className="text-base sm:text-lg font-light w-full text-gray-500">
                  Thank you for your interest in Comejuu Premier Academy. We
                  proud to have nurtured countless alumni who have gone on to
                  achieve remarkable success in various fields, embodying the
                  skills and values instilled during their time with us. Our
                  commitment to providing a safe and supportive environment
                  ensures that each student can thrive academically and
                  personally. Join us in continuing this legacy of success and
                  character development for your child.
                </p>
              </div>

              <div className="space-y-5">
                <h2 className="font-secondary text-2xl sm:text-3xl w-full sm:w-1/2 font-bold">
                  Message from the principal
                </h2>

                <RiDoubleQuotesL className="text-tertiary text-3xl" />
                <p className="text-base sm:text-lg font-light w-full text-gray-500 mb-5">
                  Dear Students and Parents,
                </p>
                <p className="text-base sm:text-lg font-light w-full text-gray-500">
                  Heer, we deliver a comprehensive CBC curriculum that fosters
                  critical thinking and creativity, preparing our students for
                  the challenges of tomorrow. Our holistic approach ensures that
                  each child develops not only academically but also socially
                  and emotionally, through a rich array of extracurricular
                  activities. We welcome you to our community, where we witness
                  the transformative impact of a well-rounded education every
                  day.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* OUR STAFF */}
        <div className="bg-primary py-16">
          {/* LOREM IPSUM SECTION */}
          <div className="container">
            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              Our Staff
            </h2>
            <p className="text-base mt-5 sm:text-lg font-light text-gray-500">
              We are proud to have a dedicated team of both teaching and
              non-teaching staff, who are committed to fostering a nurturing and
              supportive learning environment. Our experienced educators bring a
              wealth of knowledge and passion to the classroom, guiding students
              to achieve academic excellence and personal growth. Complementing
              our teaching staff, our non-teaching personnel ensure the smooth
              operation of the school, from administrative support to
              maintaining a safe and welcoming campus. Together, they form a
              cohesive community that is devoted to the success and well-being
              of every student.
            </p>
          </div>
          <div className="container mx-auto flex-col items-center justify-center space-y-10 pt-10">
            <div className=" h-[30vh] md:h-[80vh] w-full relative overflow-hidden">
              <Image
                className="object-cover rounded-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                src={TeacherStaff}
                alt="Teaching Staff"
                layout="fill"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Suspense fallback={<div>Loading Staff...</div>}>
                {staffDetails.map((staff, index) => {
                  return (
                    <StaffCard key={index} role={staff.role} img={staff.img} />
                  );
                })}
              </Suspense>
            </div>
            <Suspense fallback={<div>Loading Call to Action...</div>}>
              <CallToAction />
            </Suspense>
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
      </div>
    </section>
  );
};

export default About;
