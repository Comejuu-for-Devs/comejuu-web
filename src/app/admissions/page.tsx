import React from 'react'
import Link from 'next/link'
import { RiArrowRightLine } from 'react-icons/ri'

import { admissionSteps, events } from '@/data'

import Dots from '@/components/layout/Dots'
import AdmissionStep from '@/components/admissions/AdmissionStep'
// import GhostLine from '@/components/GhostLine'
import Button from '@/components/Button'
import Image from 'next/image'
import Req from '@/components/admissions/Req'
import AdmissionEvent from '@/components/admissions/AdmissionEvent'
import HelpForm from '@/components/admissions/HelpForm'
import ApplicationForm from '@/components/admissions/ApplicationForm'
import FeeCard from '@/components/admissions/FeeCard'
import CallToAction from '@/components/CallToAction'

const Admissions = () => {
  return (
    <section className='page min-h-screen'>
      <Dots />

      <div className="space-y-10 sm:space-y-20">
        {/* HERO */}
        <div className="relative w-full h-[60vh]">
          <Image
            width={1920}
            height={1280}
            src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='asbolute w-full h-full object-cover rounded-xl'
          />


          <div className="absolute top-0 bg-black/80 h-full w-full z-10">
            <div className="container py-20 h-full flex flex-col gap-10 justify-center">
              <h1 className="font-secondary text-4xl w-full  sm:text-6xl font-black tracking-tight text-white">
                Where Your Child&apos;s Future Takes Flight With Confidence
              </h1>

              <Button className='bg-white text-primary w-max'>
                Apply Now
                <RiArrowRightLine />
              </Button>
            </div>
          </div>
        </div>

        {/* REQS */}
        <div className="container space-y-5">
          <h3 className="text-xl sm:text-2xl font-light">Admission requirements</h3>

          <hr />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <Req
              title='Birth certificate'
              description="A copy of your child's birth certificate"
            />
            <Req
              title='Birth certificate'
              description="A copy of your child's birth certificate"
            />
            <Req
              title='Birth certificate'
              description="A copy of your child's birth certificate"
            />
            <Req
              title='Birth certificate'
              description="A copy of your child's birth certificate"
            />
            <Req
              title='Birth certificate'
              description="A copy of your child's birth certificate"
            />
            <Req
              title='Birth certificate'
              description="A copy of your child's birth certificate"
            />
            <Req
              title='Birth certificate'
              description="A copy of your child's birth certificate"
            />
          </div>
        </div>

        {/* STEPS */}
        <div className="bg-primary py-10 rounded-2xl">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-white">
              Our Admission Process
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {admissionSteps.map(step => (
                <AdmissionStep
                  key={step.stepNo}
                  stepNo={step.stepNo}
                  title={step.title}
                  description={step.description}
                /> 
              ))}
            </div>

          </div>
        </div>

        {/* EVENTS */}
        <div className="bg-secondary py-10 rounded-2xl">
          <div className="container space-y-10">
            <h2 className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
            text-white">
              Upcoming events
            </h2>

            <div className="w-full overflow-x-auto pb-5">
              <div className="flex gap-3 w-max">
                {events.map((event, i) => (
                  <AdmissionEvent
                    key={i}
                    title={event.title}
                    date={event.date}
                    time='10.00 AM - 2.00 PM'
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ENQUIRIES */}
        <div className="">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-primary">
              How can we help you today?
            </h2>

            <HelpForm />
          </div>
        </div>

        {/* FIND OUT MORE */}
        <div className="bg-primary py-10 rounded-2xl">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-white">
              Find out more about Comejuu
            </h2>

            <Link
              href='https://www.google.com/maps/place/COMEJUU+PREMIER+ACADEMY/@-1.0314208,36.827764,17z/data=!3m1!4b1!4m6!3m5!1s0x182f33d5fd340753:0x8644a63bf8a98e0a!8m2!3d-1.0314262!4d36.8303443!16s%2Fg%2F1vfhk70s?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              className='block'
            >
              <Button className='bg-white text-primary'>
                Visit us today
                <RiArrowRightLine />
              </Button>
            </Link>
          </div>
        </div>

        {/* APPLICATION */}
        <div className="">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-primary">
              Apply for the 2025 intake
            </h2>

            <ApplicationForm />
          </div>
        </div>

        {/* FEE STRUCTURES */}
        <div className="bg-secondary py-10 rounded-2xl">
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
        </div>

        {/* CTA */}
        <CallToAction />
      </div>
    </section>
  )
}

export default Admissions