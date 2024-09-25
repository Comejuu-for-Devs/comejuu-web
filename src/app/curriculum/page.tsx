import Stage from '@/components/curriculum/Stage'
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

        <div className="space-y-10">
          <Stage
            name='Pre school'
            description='Playgroup & kindergarten'
            img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            content={`
              Our preschool program provides a nurturing environment where young learners begin their educational journey. Through play-based learning and hands-on activities, we focus on developing foundational skills in a fun, creative atmosphere that encourages curiosity and a love for learning.
            `}
          />
          <Stage
            name='Lower school'
            description='grade 1 - 3'
            img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            content={`
              In the lower school, students build on early literacy, numeracy, and social skills while developing a deeper understanding of the world around them. Our curriculum emphasizes active learning, collaboration, and creativity, fostering a strong academic foundation and enthusiasm for discovery.
            `}
          />
          <Stage
            name='Middle school'
            description='grade 4 - 6'
            img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            content={`
              The upper school continues to challenge students with a more structured academic curriculum, encouraging critical thinking and problem-solving skills. With increasing independence, students explore a wide range of subjects, preparing them for the academic rigor of junior high while developing confidence and responsibility.
            `}
          />
          <Stage
            name='Junior secondary'
            description='grade 7 - 9'
            img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            content={`
              In junior high, students experience a dynamic curriculum that prepares them for high school and beyond. With a focus on advanced subjects, leadership opportunities, and personal growth, we guide students to take ownership of their education and develop the skills needed for future success.
            `}
          />
        </div>
      </div>
    </section>
  )
}

export default Curriculum