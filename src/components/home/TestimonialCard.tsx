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
    <div className='h-full flex flex-col justify-between p-6 bg-gray-800 rounded-lg'>
      <div className='flex-grow overflow-hidden'>
        <p className='text-lg mb-5 text-gray-200 line-clamp-[8]'>{content}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        {img ? 
          <Image
            width={40}
            height={40}
            src={img}
            alt=''
            className='w-10 h-10 object-cover rounded-full'
          />
          : 
          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-lg text-gray-500">
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
