import React from 'react'
import Image from 'next/image'
import { RiArrowRightLine } from 'react-icons/ri'

import Button from '@/components/Button'
// import Stage from '@/components/curriculum/Stage'
import Dots from '@/components/layout/Dots'
import ApproachCard from '@/components/curriculum/ApproachCard'
import CallToAction from '@/components/CallToAction'

const Curriculum = () => {
  return (
    <section className='min-h-screen pb-20 relative'>
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
                Where Your Child&apos;s Future Takes Flight With Confidence
              </h1>

              <Button className='bg-white text-primary w-max'>
                Apply Now
                <RiArrowRightLine />
              </Button>
            </div>
          </div>
        </div>

        {/* APPROACH */}
        <div className="container space-y-10">
          <div className="space-y-5">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-2/3 font-bold tracking-tight
            text-primary">
              Our Approach to Teaching & Learning
            </h2>

            <p className="text-lg sm:text-xl font-light">Commitment to Excellence is in our DNA</p>
          </div>

          <div className="overflow-x-auto pb-5">
            <div className="flex gap-2 w-max">
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <ApproachCard
              title='Curriculum'
              description={`
                We provide preschool (Play-group, Pre-Primary
                1, and Pre-Primary 2), lower school (grades 1-3), middle
                school (grades 4-6) and junior secondary (grades 7-9) with day
                and boarding options  
              `}
            />
            <ApproachCard
              title='Academic Excellence'
              description={`
                Comejuu Premier Academy has a
                20-year track record of academic success and strong
                reputation in the County of Kiambu. We strive for academic
                excellence every day, delivering a world-class
                Competency-Based Curriculum (C.B.C.) with a focus on critical
                thinking, problem-solving, creativity and real-world application.
              `}
            />
            <ApproachCard
              title='Modern Facilities'
              description={`
                Our school boasts spacious classrooms,
                a well-equipped library, a modern science laboratory, a library,
                and a computer lab to prepare our students for the digital age.
                This, coupled with our dedicated and experienced teachers,
                equip our students with the knowledge and skills they need to
                succeed in the 21st century.
              `}
            />
          </div>
        </div>

        {/* PRE-SCHOOL */}
        <div className="bg-primary rounded-2xl py-10 sm:py-16">
          <div className="container space-y-10">
            <div className="space-y-5">
              <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
              text-white">
                Pre-school
              </h2>

              <p className="text-sm sm:text-base font-light uppercase text-gray-300">playgroup, pp1, pp2</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-[300px] object-cover'
              />

              <p className="text-base sm:text-lg font-light w-full text-gray-200">
                At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
              </p>
            </div>
          </div>
        </div>         

        {/* PRIMARY SCHOOL */}
        <div className="bg-secondary rounded-2xl py-10 sm:py-16">
          <div className="container space-y-10">
            <div className="space-y-5">
              <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
              text-white">
                Primary School
              </h2>

              <p className="text-sm sm:text-base font-light uppercase text-gray-300">
                grade 1 - 6
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-[300px] object-cover'
              />

              <p className="text-base sm:text-lg font-light w-full text-gray-200">
                At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
              </p>
            </div>
          </div>
        </div>         

        {/* JUNIOR SECONDARY */}
        <div className="bg-tertiary rounded-2xl py-10 sm:py-16">
          <div className="container space-y-10">
            <div className="space-y-5">
              <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
              text-primary">
                Junior Secondary
              </h2>

              <p className="text-sm sm:text-base font-light uppercase text-gray-600">
                grade 7 - 9
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-[300px] object-cover'
              />

              <p className="text-base sm:text-lg font-light w-full text-primary">
                At Comejuu, we strive to nurture both academic excellence and personal growth. Our dedicated educators create a supportive, inclusive environment that encourages curiosity, critical thinking, and collaboration.
                Through engaging lessons and diverse extracurricular activities, we help students discover their passions and develop the skills they need for the future. We’re excited to be part of your child’s journey and look forward to helping them thrive.
              </p>
            </div>
          </div>
        </div>

        {/* EXTRACURRICULAR */}
        <div className="container space-y-10">
          <div className="space-y-5">
            <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-2/3 font-bold tracking-tight
            text-primary">
              Excellence Beyond the Classroom
            </h2>

            <p className="text-lg sm:text-xl font-light">
              Extra-Curricular Activities & Pastoral Care
            </p>
          </div>

          <div className="overflow-x-auto pb-5">
            <div className="flex gap-2 w-max">
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='h-[300px] w-[500px] object-cover rounded-lg'
              />

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ApproachCard
              title='Holistic Development'
              description={`
                We offer a diverse range of extracurricular activities to ignite the
                passion of the students, including sports, drama and talent development in
                ballerina,chess, guitar, scrabble and swimming. We have created a vibrant experience
                that helps them discover their talents, build teamwork skills, develop a love for learning,
                and have a blast!  
              `}
            />
            <ApproachCard
              title='Educational Outings & Trips'
              description={`
                We believe in experiential learning and provide opportunities
                for our students to explore the world beyond the classroom through educational outings
                and trips in every school term.
              `}
            />
            <ApproachCard
              title='A Safe and Supportive Environment'
              description={`
                Ours is a safe and secure environment where your
                child can learn and grow, with a focus on their social, psychological, and emotional
                well-being. Our dedicated staff is always there to support and guide our students. We also
                prioritize the safety and security of our students with a secure perimeter, 24/7 security
                personnel, and a dedicated school nurse. What’s more we are located at Kigumo
                Township, within walking distance from a level 4 hospital, police station and market for
                easy access.
              `}
            />
            <ApproachCard
              title='A Strong Community Spirit'
              description={`
                We believe in building a strong community where parents,
                teachers, and students work together to create a supportive and enriching learning
                experience.
              `}
            />
          </div>
        </div>

        {/* CALL TO ACTION */}
        <CallToAction />
      </div>
    </section>
  )
}

export default Curriculum