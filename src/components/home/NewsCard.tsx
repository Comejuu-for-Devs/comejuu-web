import Image from 'next/image'
import React from 'react'

export default function NewsCard({ title, content }) {
  return (
    <div className='flex gap-4 w-full'>
      <Image
        width={1920}
        height={1280}
        src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
        className='w-[150px] h-[120px] object-cover rounded-2xl' />
      <div className='w-[426px] space-y-4'>
        <p className='text-black font-bold text-xl'>{title}</p>
        <p className='text-xs text-neutral-dark'>{content}</p>
      </div>
    </div>
  )
}

