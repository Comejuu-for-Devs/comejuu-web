import React from 'react'
import Image from 'next/image'
import { RiArrowRightLine } from 'react-icons/ri'

import Dots from '@/components/layout/Dots'
import Button from '@/components/Button'
import HelpForm from '@/components/admissions/HelpForm'

const Contact = () => {
  return (
    <section className='relative min-h-screen pb-20'>
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
                Leave us a message or ask a question
              </h1>

              <Button className='bg-white text-primary w-max'>
                Get in touch
                <RiArrowRightLine />
              </Button>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="container">
          <HelpForm />
        </div>
      </div>
    </section>
  )
}

export default Contact