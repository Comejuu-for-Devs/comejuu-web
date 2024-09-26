import React from 'react'
import { RiCircleFill } from 'react-icons/ri'

import { events } from '@/data'
import EventCard from '@/components/home/EventCard'
import NewsCard from './NewsCard'
import Image from 'next/image'

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

const NewsEvents = () => {
  return (
    <section className='py-20'>
      <div className="container space-y-10">
        <div className="flex items-center gap-3">
          <RiCircleFill className='text-tertiary' />
          <h2 className="text-3xl font-secondary tracking-[-.1px] font-bold text-primary">News & Events</h2>
        </div>

        <div className="">
          <h5 className="text-primary text-base font-bold">Upcoming events</h5>

          <hr className='my-5' />

          <div className="w-full overflow-x-auto pb-5">
            <div className="flex gap-3 w-max">
              {events.map((event, i) => (
                <EventCard
                  key={i}
                  title={event.title}
                  date={event.date}
                  time='10.00 AM'
                />
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <h5 className="text-primary text-base font-bold">Latest News</h5>

          <hr className='my-5' />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-5 w-full'>
              <Image
                width={1920}
                height={1280}
                src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full h-[300px] object-cover rounded-xl'
              />

              <div className='w-full space-y-3'>
                <p className='text-black font-bold text-xl sm:text-2xl'>Title of News Items</p>
                <p className='text-sm text-neutral-dark'> Fifth-graders honed their communication, problem-solving, and team-building skills through collaborative outdoor activities during a visit to The EDGE, located on George Mason University’s science and technology campus. The hands-on activities helped our students grow as a team as they prepare for Middle School next year.</p>
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
      </div>
    </section>
  )
}

export default NewsEvents
