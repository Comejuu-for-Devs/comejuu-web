import Image from 'next/image'
import React from 'react'
import Dots from '@/components/layout/Dots'
import Hero from '@/app/admissions/Hero'

const Admissions = () => {
  return (
    <section className=' min-h-screen'>
      <Dots />
      <div className="space-y-20">
        <Hero />
        <div className="space-y-16 pb-10">
          <div className="container space-y-16">
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



      </div>
    </section>
  )
}

export default Admissions
