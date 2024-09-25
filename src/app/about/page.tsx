import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='page min-h-screen'>
      <div className="container space-y-20">
        <h1 className="font-secondary text-center text-4xl sm:text-5xl font-bold">
          This is Comejuu
        </h1>

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex items-end">
              <h2 className="text-3xl sm:text-4xl font-secondary tracking-tight">Collectively striving to succeed</h2>
            </div>

            <div className="grid grid-cols-2 gap-2 items-end">
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-[250px] object-cover'
              />

              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-[150px] object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About