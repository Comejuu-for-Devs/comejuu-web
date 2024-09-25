import React from 'react'

interface Props {
  content: string,
  author: string,
  role: string
}

function TestimonialCard({ content, author, role }: Props) {
  return (
    <div className='w-[400px]'>
      <p className='text-base text-primary mb-5 w-full'>{content}</p>
      <div>
        <p className='text-base font-bold text-primary'>{author}</p>
        <p className='text-base text-neutral'>{role}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
