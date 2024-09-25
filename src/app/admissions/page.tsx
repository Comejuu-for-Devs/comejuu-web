import React from 'react'
import Dots from '@/components/layout/Dots'

const Admissions = () => {
  return (
    <section className='page min-h-screen'>
      <Dots />

      <div className="space-y-20">
        <div className="container">
          <h1 className="font-secondary text-6xl w-full sm:w-1/2 sm:text-8xl font-black tracking-tight">
            Admissions
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Admissions