import React from 'react'
import Image, { StaticImageData } from 'next/image'

type ApproachCardProps = {
  title: string
  description: string;
  img?: StaticImageData;
  imgHeight?: string;
};

const ApproachCard = ({
  title,
  description,
  img,
}: ApproachCardProps) => {
  return (
    <div className="space-y-3">
      <Image
        width={1920}
        height={1280}
        src={img ? img : 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        alt=''
        className={`h-[300px] md:h-[500px] w-full object-cover rounded-lg`}
      />

      <div className="space-y-2">
        <h6 className="font-semibold font-secondary text-base sm:text-lg">{title}</h6>
        <hr className='w-10 border-tertiary' />
      </div>

      <p className="text-sm sm:text-base text-gray-500">{description}</p>
    </div>
  )
}

export default ApproachCard