import React from 'react'
import { RiCircleFill } from 'react-icons/ri'

import NewsCard from './NewsCard'
import Image from 'next/image'
import Button from '../Button'

const news = [
  {
    img: "",
    title: "Title of News Item",
    content: "Fifth-graders honed their communication, problem-solving, and team-building skills through collaborative outdoor activities during a visit to The EDGE, located on George Mason University’s science and technology campus. The hands-on activities helped our students grow as a team as they prepare for Middle School next year."
  },
  {
    img: "",
    title: "Title of News Item",
    content: "Fifth-graders honed their communication, problem-solving, and team-building skills through collaborative outdoor activities during a visit to The EDGE, located on George Mason University’s science and technology campus. The hands-on activities helped our students grow as a team as they prepare for Middle School next year."
  },
  {
    img: "",
    title: "Title of News Item",
    content: "Fifth-graders honed their communication, problem-solving, and team-building skills through collaborative outdoor activities during a visit to The EDGE, located on George Mason University’s science and technology campus. The hands-on activities helped our students grow as a team as they prepare for Middle School next year."
  },
]

const MediaCenter = () => {
  return (
    <section className='py-20'>
      <div className="container space-y-10">
        <div className="flex items-center gap-3">
          <RiCircleFill className='text-tertiary' />
          <h2 className="text-3xl font-secondary tracking-[-.1px] font-bold text-primary">The Latest from Our Corner</h2>
        </div>

        <div className='grid grid-cols-1 gap-8'>
          <div className='flex flex-col md:flex-row md:items-center gap-6 w-full'>
            <Image
              width={1920}
              height={1280}
              src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              className='w-full h-[300px] object-cover rounded-xl'
            />

            <div className='w-full space-y-3'>
              <div className="space-y-3">
                <p className='text-black font-bold text-xl sm:text-2xl'>Title of News Items</p>
                <p className='text-sm text-neutral-dark'> Fifth-graders honed their communication, problem-solving, and team-building skills through collaborative outdoor activities during a visit to The EDGE, located on George Mason University’s science and technology campus. The hands-on activities helped our students grow as a team as they prepare for Middle School next year.</p>
              </div>

              <Button>Read more</Button>
            </div>
          </div>

          <div className="w-full pb-5">
            <div className="flex w-full gap-5 flex-col">
              {news.map((n, i) => (
                <NewsCard
                  key={i}
                  title={n.title}
                  content={n.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaCenter
