import Image from 'next/image'
import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import Dots from '@/components/layout/Dots'
import GhostLine from '@/components/GhostLine'

const About = () => {
  return (
    <section className='page min-h-screen'>
      <Dots />

      <div className="space-y-10 sm:space-y-20">
        <div className="container space-y-10">
          <h1 className="font-secondary text-center text-4xl sm:text-5xl font-bold">
            This is Comejuu
          </h1>

          <div className="space-y-16">
            {/* TOP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col justify-end gap-2">
                <span className="text-6xl font-black text-gray-300">1</span>
                <h2 className="text-3xl sm:text-4xl font-secondary tracking-tight font-medium">
                  Collectively striving to succeed
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-2 items-end">
                <Image
                  width={1920}
                  height={1280}
                  src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  className='w-full h-[300px] object-cover'
                />

                <Image
                  width={1920}
                  height={1280}
                  src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  className='w-full h-[200px] object-cover'
                />
              </div>
            </div>

            {/* BOTTOM */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="space-y-2">
                <h6 className="font-semibold font-secondary text-base sm:text-lg">Immersive Learning</h6>
                <p className="text-sm sm:text-base text-gray-500">Benefit from close-knit residential education and experiential learning in the classroom and beyond.</p>
              </div>

              <div className="space-y-2">
                <h6 className="font-semibold font-secondary text-base sm:text-lg">Talent nurture</h6>
                <p className="text-sm sm:text-base text-gray-500">Benefit from close-knit residential education and experiential learning in the classroom and beyond.</p>
              </div>

              <div className="space-y-2">
                <h6 className="font-semibold font-secondary text-base sm:text-lg">Collaborative environment</h6>
                <p className="text-sm sm:text-base text-gray-500">Benefit from close-knit residential education and experiential learning in the classroom and beyond.</p>
              </div>
            </div>
          </div>
        </div>

        {/* MESSAGE */}
        <div className="bg-primary py-10 rounded-2xl mx-0 sm:mx-8 lg:mx-16">
          <div className="container">
            <div className="flex flex-col gap-5 items-center">
              <RiDoubleQuotesR className='text-3xl sm:text-5xl text-tertiary' />

              <p className="text-base sm:text-lg font-light w-full max-w-3xl text-center text-gray-200">
                At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
              </p>

              <GhostLine styles='via-white/50' />

              <div className="flex flex-col items-center gap-3">
                <Image
                  width={1920}
                  height={1280}
                  src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  className='w-16 h-16 object-cover rounded-full'
                />

                <p className="text-white font-medium">John Doe</p>
                <p className="text-sm text-tertiary">School Principal</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About