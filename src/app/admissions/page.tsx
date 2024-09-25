import Image from 'next/image'
import React from 'react'

const Admissions = () => {
  return (
    <section className='page min-h-screen'>
      <div className="space-y-20">
        <div className='mt-20'>
          <div className='flex gap-5 p-5 absolute top-20 w-full'>
            <Image
              width={1920}
              height={1280}
              src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              className='w-full h-[400px] object-cover'
            />
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
              className='w-full h-[300px] object-cover'
            />

          </div>
          <h1 className="font-secondary text-center text-4xl sm:text-[240px] font-light">
            Comejuu
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Admissions
