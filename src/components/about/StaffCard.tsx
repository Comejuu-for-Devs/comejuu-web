import Image from 'next/image'
import React from 'react'

type StaffCardProps = {
  name: string
  img: string
  role: string
}

const StaffCard = ({
  name,
  img,
  role
}: StaffCardProps) => {
  return (
    <div className='space-y-2 rounded-2xl'>
      <Image
        width={1920}
        height={1280}
        src={img}
        alt=''
        className='w-full h-[200px] object-cover rounded'
      />

      <div>
        <h1 className='text-lg font-semibold'>{name}</h1>
        <p className='text-sm text-gray-500 font-normal'>{role}</p>
      </div>
    </div>
  )
}

export default StaffCard