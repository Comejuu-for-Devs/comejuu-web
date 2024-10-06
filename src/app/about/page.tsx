import React from 'react'
import Image from 'next/image'
import { RiArrowRightLine } from 'react-icons/ri'

import Dots from '@/components/layout/Dots'
import Button from '@/components/Button'
import StaffCard from '@/components/about/StaffCard'
import CommunityCard from '@/components/about/CommunityCard'
import CallToAction from '@/components/CallToAction'

const About = () => {
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

        {/* DIRECTOR'S MESSAGE */}
        <div className="bg-primary rounded-2xl py-10 sm:py-16">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-white">
              Message from the director
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <p className="text-base sm:text-lg font-light w-full text-gray-200">
                At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
              </p>

              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-[300px] object-cover'
              />
            </div>
          </div>
        </div>

        {/* OUR STAFF */}
        <div className="rounded-2xl py-10 sm:py-16">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-primary">
              Our Staff
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
              <StaffCard
                name='John Doe'
                role='Teacher'
                img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
              <StaffCard
                name='John Doe'
                role='Lab assistant'
                img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
              <StaffCard
                name='John Doe'
                role='Guitar teacher'
                img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
              <StaffCard
                name='John Doe'
                role='Grounds keeper'
                img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
          </div>
        </div>
        

        {/* PRINICIPAL'S MESSAGE */}
        <div className="bg-secondary rounded-2xl py-10 sm:py-16">
          <div className="container space-y-10">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
            text-white">
              Message from the Principal
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <p className="text-base sm:text-lg font-light w-full text-gray-200">
                At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
              </p>

              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-[300px] object-cover'
              />
            </div>
          </div>
        </div>

        {/* OUR COMMUNITY */}
        <div className="rounded-2xl py-10 sm:py-16">
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
        </div>

        {/* CALL TO ACTION */}
        <CallToAction />
      </div>
    </section>
  )
}

export default About