import React from 'react'
import { StudentLifeCard } from './StudentLifeCard'

const events = [
  {
    title: "Sports & Physical Education",
    date: "April, 1 2024",
    img: "",
    link: ""
  },
  {
    title: "Talent Development",
    date: "April, 20 2024",
    img: "",
    link: "",
  },
  {
    title: "Pastoral Care",
    date: "May, 6 2024",
    img: "",
    link: ""
  }
]
const StudentLife = () => {
  return (
    <section className='bg-secondary py-10 w-full'>
      <div className="container space-y-10">
        <h2 className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold text-white">
          Student life at Comejuu
        </h2>

        <div className="overflow-x-auto pb-5">
          <div className='flex gap-5 w-max'>
            {events.map((event, i) => (
              <StudentLifeCard
                key={i}
                title={event.title}
                date={event.date}
                link={event.link}
                linkTitle='Learn More'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentLife
