import React from 'react'
import Image from 'next/image'
import { RiArrowRightLine } from 'react-icons/ri'

// import Dots from '@/components/layout/Dots'
import Button from '@/components/Button'
import ValueCarousel from '@/components/home/ValueCarousel'

const Hero = () => {
  return (
    <section className='min-h-screen w-full'>
      {/* HERO */}
      <div className="relative w-full h-[80vh] md:h-[70vh]">
        <div className="container py-20 h-full flex flex-col gap-10 justify-center">
          <div className="py-20 h-full flex flex-col sm:flex-row gap-10 relative z-10">
            <h1 className="font-secondary text-4xl w-full  sm:text-6xl font-black tracking-tight text-white">
              Where dreams spread their wings
            </h1>

            <Button className='bg-white text-primary w-max h-max'>
              Enrol for 2025 Academic Year
              <RiArrowRightLine />
            </Button>
          </div>

          <ValueCarousel />
        </div>
      </div>

      <div className="space-y-20 py-20 h-full border-b">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-16">
          <Image
            src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            width={1920}
            height={1280}
            alt=''
            className='object-cover rounded-xl'
          />

          <div className="space-y-5">
            <h3 className="text-4xl font-secondary font-bold text-primary">Karibu Comejuu Premier Academy</h3>

            <p className="text-gray-500 text-sm md:text-base">
              Comejuu Premier Academy was started in 2001, and for more than 20 years, we have
              been providing a nurturing environment where your child can learn, grow, and thrive - and the
              results speak for themselves. We nurture not just academic success, but also the character
              and values that will shape your child&apos;s future. We believe in holistic development, guiding
              every child to reach their full potential and embrace the challenges of the modern world.
            </p>

            <Button className='md:ml-auto w-max bg-primary text-white'>
              Enrol now
              <RiArrowRightLine />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero