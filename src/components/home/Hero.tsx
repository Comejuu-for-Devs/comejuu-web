import React from 'react'
import Image from 'next/image'
import { RiArrowRightLine } from 'react-icons/ri'

import Dots from '@/components/layout/Dots'
import GhostLine from '@/components/GhostLine'
import Button from '@/components/Button'

const Hero = () => {
  return (
    <section className='relative min-h-screen w-full pb-20'>
      <Dots />

      <div className="space-y-20">
        <div className="relative container pt-36">
          <h1 className="font-secondary text-5xl w-1/2 font-bold tracking-tight
          ">
            Where dreams spread their wings
          </h1>
        </div>

        <div className="mx-0 lg:mx-16">
          <div className="relative h-[50vh] overflow-hidden rounded-2xl">
            <Image
              src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={1920}
              height={1280}
              alt=''
              className='absolute w-full h-full object-cover'
            />
          </div>
        </div>

        <div className="container space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image
              src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={1920}
              height={1280}
              alt=''
              className='object-cover rounded-xl'
            />

            <p className="text-gray-500 text-sm md:text-base">
              Comejuu Premier Academy fosters purposeful inquiry-based and social-emotional learning for children in preschool through grade 8 in a joyful, connected community. We empower all students as curious, confident, and resilient leaders, thinkers, and creators. Since our founding in 1942, our impact has been evident in the unique accomplishments and meaningful contributions of our students, graduates, and educators.
            </p>
          </div>

          <GhostLine />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <h3 className="text-4xl font-secondary font-bold">Welcome to Comejuu Premier Academy</h3>
            
            <Button className='md:ml-auto w-max'>
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