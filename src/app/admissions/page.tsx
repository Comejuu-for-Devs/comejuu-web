import React from "react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { events } from "@/data";
import Dots from "@/components/layout/Dots";
// import GhostLine from '@/components/GhostLine'
import Button from "@/components/Button";
import Req from "@/components/admissions/Req";
import AdmissionEvent from "@/components/admissions/AdmissionEvent";
// import HelpForm from '@/components/admissions/HelpForm'
import ApplicationForm from "@/components/admissions/ApplicationForm";
import AdmissionStepsTab from "@/components/admissions/AdmissionStepsTab";
// import ApplicationForm from '@/components/admissions/ApplicationForm'
// import FeeCard from '@/components/admissions/FeeCard'
// import CallToAction from '@/components/CallToAction'
import HeroSection from "@/components/HeroSection";

const Admissions = () => {
  return (
    <section className="min-h-screen">
      <Dots />

      <div className="space-y-10 sm:space-y-20">
        {/* HERO */}
        <HeroSection
          title="Where Your Child&apos;s Future Takes Flight With Confidence"
          buttonText="Fill Admission Form"
          buttonLink="#admissionForm"
        />

        {/* REQS */}
        <div className="container space-y-5">
          <h3 className="text-xl sm:text-2xl font-light">
            Admission requirements
          </h3>

          <hr />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <Req
              title="Birth certificate"
              description="A copy of your child's birth certificate"
            />
            <Req
              title="Birth certificate"
              description="A copy of your child's birth certificate"
            />
            <Req
              title="Birth certificate"
              description="A copy of your child's birth certificate"
            />
            <Req
              title="Birth certificate"
              description="A copy of your child's birth certificate"
            />
            <Req
              title="Birth certificate"
              description="A copy of your child's birth certificate"
            />
            <Req
              title="Birth certificate"
              description="A copy of your child's birth certificate"
            />
            <Req
              title="Birth certificate"
              description="A copy of your child's birth certificate"
            />
          </div>
        </div>

        <div className="">
          {/* STEPS */}
          <div className="bg-primary py-16">
            <div className="container space-y-10">
              <h2
                className="font-secondary text-3xl sm:text-4xl w-full font-bold tracking-tight
              text-white"
              >
                Our Admission Process
              </h2>

              <AdmissionStepsTab />
            </div>
          </div>

          {/* EVENTS */}
          <div className="bg-secondary py-16">
            <div className="container space-y-10">
              <h2
                className="font-secondary text-3xl sm:text-4xl w-full font-bold tracking-tight
              text-white"
              >
                Upcoming events
              </h2>

              <div className="w-full overflow-x-auto pb-5">
                <div className="flex gap-3 w-max">
                  {events.map((event, i) => (
                    <AdmissionEvent
                      key={i}
                      title={event.title}
                      date={event.date}
                      time="10.00 AM - 2.00 PM"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ENQUIRIES */}
        <div className="" id="admissionForm">
          <div className="container space-y-10">
            <h2
              className="font-secondary text-3xl sm:text-4xl w-full font-bold tracking-tight
            text-primary"
            >
              Apply for 2025 Intake Now
            </h2>

            <ApplicationForm />
          </div>
        </div>

        {/* FIND OUT MORE */}
        <div className="bg-primary py-10">
          <div className="container space-y-10">
            <h2
              className="font-secondary text-3xl sm:text-4xl w-full font-bold tracking-tight
            text-white"
            >
              Find out more about Comejuu
            </h2>

            <Link
              // href='https://www.google.com/maps/place/COMEJUU+PREMIER+ACADEMY/@-1.0314208,36.827764,17z/data=!3m1!4b1!4m6!3m5!1s0x182f33d5fd340753:0x8644a63bf8a98e0a!8m2!3d-1.0314262!4d36.8303443!16s%2Fg%2F1vfhk70s?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'
              href="/contact"
              // target='_blank'
              className="block"
            >
              <Button className="bg-white text-primary">
                Visit us today
                <RiArrowRightLine />
              </Button>
            </Link>
          </div>
        </div>

        {/* APPLICATION */}
        {/* <div className="">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-primary">
              Apply for the 2025 intake
            </h2>

            <ApplicationForm />
          </div>
        </div> */}

        {/* FEE STRUCTURES */}
        {/* <div className="bg-secondary py-10 rounded-2xl">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-white">
              Fee structures
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <FeeCard name='Grade 1' period='2025 - 2026 Fee Structure' url='#'/>
              <FeeCard name='Grade 2' period='2025 - 2026 Fee Structure' url='#'/>
              <FeeCard name='Grade 3' period='2025 - 2026 Fee Structure' url='#'/>
              <FeeCard name='Grade 4' period='2025 - 2026 Fee Structure' url='#'/>
              <FeeCard name='Grade 5' period='2025 - 2026 Fee Structure' url='#'/>
              <FeeCard name='Grade 6' period='2025 - 2026 Fee Structure' url='#'/>
              <FeeCard name='Grade 7' period='2025 - 2026 Fee Structure' url='#'/>
              <FeeCard name='Grade 8' period='2025 - 2026 Fee Structure' url='#'/>
              <FeeCard name='Grade 9' period='2025 - 2026 Fee Structure' url='#'/>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        {/* <CallToAction /> */}
      </div>
    </section>
  );
};

export default Admissions;
