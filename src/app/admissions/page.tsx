import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

import { admissionSteps } from '@/data'

import Dots from '@/components/layout/Dots'
import AdmissionStep from '@/components/admissions/AdmissionStep'
import GhostLine from '@/components/GhostLine'
import Button from '@/components/Button'

const Admissions = () => {
  return (
    <section className='page min-h-screen'>
      <Dots />

      <div className="space-y-20">
        <div className="container space-y-10">
          <div className="space-y-10">
            <h1 className="font-secondary text-6xl w-full sm:w-1/2 sm:text-8xl font-black tracking-tight">
              Apply now
            </h1>

            <div className="h-px bg-gray-300 w-10"></div>
          </div>

          <div className="space-y-10">
            <p className="text-xl sm:text-2xl font-light">
              Admissions at Comejuu is a simple six-step process designed to ensure a smooth and transparent experience for families. From your initial inquiry to enrollment, we’re here to guide you every step of the way. Explore our admission steps below to learn how to join the Comejuu community.
            </p>

            <GhostLine />

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

          <Button className='w-max h-max'>
            Start application
            <RiArrowRightLine />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Admissions