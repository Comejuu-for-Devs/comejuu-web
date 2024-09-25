import React from 'react'

type TestimonialProps = {
  content: string
  author: string
  role: string
}

const TestimonialCard = ({ content, author, role }: TestimonialProps) => {
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
