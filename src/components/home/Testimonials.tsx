import React from 'react'
import  TestimonialCard from './TestimonialCard'
import  GhostLine from "../GhostLine"

const testimonials = [
  {
    content: "The school has been an incredible place for our child to grow academically and personally. We couldn’t be happier!",
    author : "Jack Daniels",
    role: "Parent",
  },
  {
    content: "The dedication of the teachers and staff is unmatched. Our child feels supported and motivated every day.",
    author : "Jack Daniels",
    role: "Parent",
  },
  {
    content: "The balance between academics and extracurriculars has really helped our child discover new passions and talents.",
    author : "Jack Daniels",
    role: "Parent",
  }
]
const Testimonials = () => {
  return (
    <section className='rounded-2xl py-24 w-full'>
      <div className="container space-y-14">
        <h1 className="font-secondary text-5xl w-1/2 font-bold tracking-tight
          text-primary">
          What parents are saying about us
        </h1>
        <GhostLine/>
        <div className='flex gap-5'>
          {testimonials.map(t => (
            <TestimonialCard content={t.content} author={t.author} role={t.role}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
