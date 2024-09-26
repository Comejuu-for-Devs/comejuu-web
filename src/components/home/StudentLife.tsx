import React from 'react'
import { StudentLifeCard } from './StudentLifeCard'

const events = [
  {
    title: "Football day",
    date: "April, 1 2024",
    img: "",
    link: ""
  },
  {
    title: "Computer lab adventures",
    date: "April, 20 2024",
    img: "",
    link: "",
  },
  {
    title: "Camping 101",
    date: "May, 6 2024",
    img: "",
    link: ""
  }
]
const StudentLife = () => {
  return (
    <section className='bg-primary rounded-2xl py-20 w-full'>
      <div className="container space-y-10">
        <h1 className="font-secondary text-4xl sm:text-5xl w-full sm:w-1/2 font-bold tracking-tight
          text-white">
          Student life at Comejuu
        </h1>

        <div className="overflow-x-auto">
          <div className='flex gap-5 w-max'>
            {events.map((event, i) => (
              <StudentLifeCard key={i} title={event.title} date={event.date} link={event.link} linkTitle='Discover More' />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentLife
