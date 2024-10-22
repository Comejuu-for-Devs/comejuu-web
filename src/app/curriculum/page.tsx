import React from 'react'
import Image from 'next/image'
import { RiArrowRightLine } from 'react-icons/ri'

import Button from '@/components/Button'
// import Stage from '@/components/curriculum/Stage'
import Dots from '@/components/layout/Dots'
import CallToAction from '@/components/CallToAction'
import CurriculumExcellenceTabs from '@/components/curriculum/CurriculumTabs'
import ApproachTabs from '@/components/curriculum/ApproachTabs'
import Link from 'next/link'

const Curriculum = () => {
  return (
    <section className='min-h-screen pb-20 relative'>
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

        {/* APPROACH */}
        <div className="container space-y-10">
          <div className="space-y-5">
            <h2 className="font-secondary text-3xl sm:text-4xl w-full font-bold tracking-tight
            text-primary">
              Our Approach to Teaching & Learning
            </h2>

            <p className="text-lg sm:text-xl font-light">Commitment to Excellence is in our DNA</p>
          </div>

          {/* IMAGE CAROUSEL */}
          <div className="overflow-x-auto pb-5">
            <div className="flex gap-2 w-max">
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />

            </div>
          </div>

          <ApproachTabs />
        </div>
        
        {/* STAGES */}
        <div className="">
          {/* PRE-SCHOOL */}
          <div className="bg-primary rounded-2xl py-10 sm:py-16">
            <div className="container space-y-10">
              <div className="space-y-5">
                <h2 className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
                text-white">
                  Pre-school
                </h2>

                <p className="text-sm sm:text-base font-light uppercase text-gray-300">playgroup, pp1, pp2</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Image
                  width={1920}
                  height={1280}
                  src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  className='w-full h-[300px] object-cover'
                />

                <div className="space-y-5">
                  <p className="text-base sm:text-lg font-light w-full text-gray-200">
                    At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                    Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
                  </p>

                  <div className="">
                    <Link href={'/admissions#admissionForm'}>
                      <Button className='bg-white text-primary'>Apply now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>         

          {/* PRIMARY SCHOOL */}
          <div className="bg-secondary rounded-2xl py-10 sm:py-16">
            <div className="container space-y-10">
              <div className="space-y-5">
                <h2 className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
                text-white">
                  Primary School
                </h2>

                <p className="text-sm sm:text-base font-light uppercase text-gray-300">
                  grade 1 - 6
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Image
                  width={1920}
                  height={1280}
                  src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  className='w-full h-[300px] object-cover'
                />

                <div className="space-y-5">
                  <p className="text-base sm:text-lg font-light w-full text-gray-200">
                    At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                    Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
                  </p>

                  <div className="">
                    <Link href={'/admissions#admissionForm'}>
                      <Button className='bg-white text-primary'>Apply now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>         

          {/* JUNIOR SECONDARY */}
          <div className="bg-tertiary rounded-2xl py-10 sm:py-16">
            <div className="container space-y-10">
              <div className="space-y-5">
                <h2 className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
                text-primary">
                  Junior Secondary
                </h2>

                <p className="text-sm sm:text-base font-light uppercase text-gray-600">
                  grade 7 - 9
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Image
                  width={1920}
                  height={1280}
                  src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  className='w-full h-[300px] object-cover'
                />

                <div className="space-y-5">
                  <p className="text-base sm:text-lg font-light w-full text-primary">
                    At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                    Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
                  </p>

                  <div className="">
                    <Link href={'/admissions#admissionForm'}>
                      <Button className='bg-white text-primary'>Apply now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXTRACURRICULAR */}
        <div className="container space-y-10">
          <div className="space-y-5">
            <h2 className="font-secondary text-3xl sm:text-4xl w-full sm:w-2/3 font-bold tracking-tight
            text-primary">
              Excellence Beyond the Classroom
            </h2>

            <p className="text-lg sm:text-xl font-light">
              Extra-Curricular Activities & Pastoral Care
            </p>
          </div>

          <div className="overflow-x-auto pb-5">
            <div className="flex gap-2 w-max">
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
            </div>
          </div>

          <CurriculumExcellenceTabs />
        </div>

        {/* CALL TO ACTION */}
        <CallToAction />
      </div>
    </section>
  )
}

export default Curriculum