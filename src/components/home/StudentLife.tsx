import React from 'react'
import { StudentLifeCard } from './StudentLifeCard'

const events = [
  {
    title: "Footbal day",
    date: "April, 1 2024",
    img: "",
    link: ""
  },
  {
    title: "Computer day adventures",
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
    <section className='bg-primary rounded-2xl py-24 w-full'>
      <div className="container space-y-14">
        <h1 className="font-secondary text-5xl w-1/2 font-bold tracking-tight
          text-white">
          Student life at Comejuu
        </h1>
        <div className='flex gap-5'>
          {events.map((event, i) => (
            <StudentLifeCard key={i} title={event.title} date={event.date} link={event.link} linkTitle='Discover More' />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudentLife
