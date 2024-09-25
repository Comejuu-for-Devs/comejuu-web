import Dots from '@/components/layout/Dots'
import React from 'react'

const Curriculum = () => {
  return (
    <section className='page min-h-screen'>
      <Dots />

      <div className="space-y-20">
        <div className="container space-y-10">
          <h1 className="font-secondary text-5xl text-wrap w-full sm:w-1/2 sm:text-8xl font-black tracking-tight">
            The Comejuu Curriculum
          </h1>

          <div className="h-px bg-gray-300 w-10"></div>

          <p className="text-lg sm:text-xl font-light !leading-[150%]">
            Our curriculum is designed to provide a well-rounded education that supports both academic excellence and personal growth. Through a blend of core subjects, creative exploration, and hands-on learning, students develop critical thinking, problem-solving, and collaborative skills. We emphasize individualized learning, ensuring each student is challenged and supported at every stage of their educational journey. With a focus on nurturing curiosity and building confidence, our curriculum prepares students for the next level of their academic and personal development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Curriculum