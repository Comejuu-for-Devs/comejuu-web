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
// const HeroSection = dynamic(() => import('@/components/HeroSection'), { suspense: true });

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
              title="Where Your Child's Future Takes Flight With Confidence"
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
        <Suspense fallback={<div>Loading Call to Action...</div>}>
          <CallToAction />
        </Suspense>
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
              <Suspense fallback={<div>Loading Staff...</div>}>
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
              </Suspense>
            </div>
          </div>
          {/* LOREM IPSUM SECTION */}
          <div className="container pt-10">
            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              Lorem Ipsum
            </h2>
            <p className="text-base mt-5 sm:text-lg font-light text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
