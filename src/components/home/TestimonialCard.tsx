import React from 'react'

function TestimonialCard({ content, author, role }) {
  return (
    <div className='w-[400px]'>
      <p className='text-xl text-primary mb-5 w-full'>{content}</p>
      <div>
        <p className='text-base font-bold text-primary'>{author}</p>
        <p className='text-base text-neutral'>{role}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
