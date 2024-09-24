import React from 'react'
import { RiCircleFill } from 'react-icons/ri'

import { events } from '@/data'
import EventCard from '@/components/home/EventCard'

const NewsEvents = () => {
  return (
    <section className='py-20'>
      <div className="container space-y-10">
        <div className="flex items-center gap-3">
          <RiCircleFill className='text-tertiary' />
          <h2 className="text-3xl font-secondary tracking-[-.1px] font-bold text-primary">News & Events</h2>
        </div>

        <div className="">
          <h5 className="">Upcoming events</h5>
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
      </div>
    </section>
  )
}

export default NewsEvents