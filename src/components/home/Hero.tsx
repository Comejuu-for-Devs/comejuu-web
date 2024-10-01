import React from 'react'
import Image from 'next/image'
import { RiArrowRightLine } from 'react-icons/ri'

import Dots from '@/components/layout/Dots'
import GhostLine from '@/components/GhostLine'
import Button from '@/components/Button'
import ValueCarousel from '@/components/home/ValueCarousel'

const Hero = () => {
  return (
    <section className='min-h-screen w-full page'>
      <Dots />

      <div className="space-y-20 bg-primary rounded-3xl pb-20 h-full">
        <div className="relative container py-10 flex flex-col md:flex-row md:justify-between md:items-end gap-10">
          <h1 className="font-secondary text-6xl w-full md:w-3/4 md:text-8xl font-black tracking-tighter text-white">
            Where dreams spread their wings
          </h1>

          <Button className='md:ml-auto w-max h-max bg-white text-primary'>
            Apply now
            <RiArrowRightLine />
          </Button>
        </div>

        <ValueCarousel />

        <div className="container space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image
              src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={1920}
              height={1280}
              alt=''
              className='object-cover rounded-xl'
            />

            <p className="text-gray-200 text-sm md:text-base">
              Comejuu Premier Academy was started in 2001, and for more than 20 years, we have
              been providing a nurturing environment where your child can learn, grow, and thrive - and the
              results speak for themselves. We nurture not just academic success, but also the character
              and values that will shape your child&apos;s future. We believe in holistic development, guiding
              every child to reach their full potential and embrace the challenges of the modern world.
            </p>
          </div>

          <GhostLine />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h3 className="text-4xl font-secondary font-bold text-white">Karibu Comejuu Premier Academy</h3>
              <p className="text-sm text-gray-300">A Citadel of Excellence for Pre-School, Primary and Junior Secondary</p>
            </div>
            
            <Button className='md:ml-auto w-max bg-white text-primary'>
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