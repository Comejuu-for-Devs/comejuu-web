import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full bg-black">
      <div className='relative'>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
        <div className="flex gap-5 p-5 relative z-10">
          <Image
            width={1920}
            height={1280}
            src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-[600px] object-cover"
          />
          <Image
            width={1920}
            height={1280}
            src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-[600px] object-cover hidden sm:block"
          />
          <Image
            width={1920}
            height={1280}
            src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-[600px] object-cover"
          />
        </div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-8xl lg:text-[240px] font-light z-30">
          Comejuu
        </h1>
      </div>
      <div className='text-white mx-auto max-w-screen-xl flex flex-col gap-10 sm:flex-row  p-5'>
        <p className='max-w-prose text-lg'>
          We know choosing the right international school in Kenya is a major decision. It goes beyond looking at a school's academic reputation. It is also important to consider the social and extracurricular opportunities available to every student. This will enable you to see what an Comejuu experience means for your whole family.
        </p>
        <div className='flex'>
          <div>
            <p className='text-tertiary max-w-32'>Applications Now Available</p>
          </div>
          <div>
            <p className='text-tertiary'>What's next?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 
