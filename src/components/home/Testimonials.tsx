import React from 'react'
import TestimonialCard from '@/components/home/TestimonialCard'
import GhostLine from "@/components/GhostLine"

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
    <section className='bg-primary py-16 w-full'>
      <div className="container space-y-14">
        <h2 className="font-secondary text-3xl sm:text-4xl w-full font-bold tracking-tight
        text-white">
          Parents are happy, so will you be
        </h2>

        <GhostLine styles='via-white/30' />
        
        <div className="overflow-x-auto pb-10">
          <div className='flex gap-5 w-max'>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} content={t.content} author={t.author} role={t.role}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
