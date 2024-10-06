import Image from 'next/image'
import React from 'react'
import { RiUserLine } from 'react-icons/ri'

type TestimonialProps = {
  content: string
  author: string
  role: string,
  img?: string
}

const TestimonialCard = ({ content, author, role, img }: TestimonialProps) => {
  return (
    <div className='w-[285px] sm:w-[400px]'>
      <p className='text-lg sm:text-xl mb-5 w-full text-gray-200'>{content}</p>
      <div className='flex items-center gap-2'>
        {img ? 
          <Image
            width={1920}
            height={1280}
            src={img}
            alt=''
            className='w-10 h-10 object-cover rounded-full'
          />
          : 
          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center
          justify-center text-lg text-gray-500">
            <RiUserLine />
          </div>
        }

        <div className="">
          <p className='text-base font-bold text-tertiary'>{author}</p>
          <p className='text-sm text-neutral'>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
