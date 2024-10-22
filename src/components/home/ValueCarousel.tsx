'use client'

import React, { useState } from 'react'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

import ValueCard from '@/components/home/ValueCard'

import { values } from '@/data'

const ValueCarousel = () => {
  const [idx, setIdx] = useState(0)

  const switchValue = (direction: string) => {
    if (direction === 'f' && idx < values.length - 1) {
      setIdx(idx + 1)
    }

    if (direction === 'b' && idx > 0) {
      setIdx(idx - 1)
    }
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-end">
      <ValueCard
        name={values[idx].name}
        description={values[idx].description}
        idx={idx + 1}
      />
      
      <div className="absolute bottom-0 xl:bottom-20 -translate-y-1/2 flex items-center
      justify-between w-full px-5">
        <button
          onClick={() => switchValue('b')}
          className="h-10 w-10 sm:h-16 sm:w-16 rounded-full flex items-center justify-center border
          border-white/50 text-tertiary text-lg hover:bg-white hover:text-primary
          transition"
        >
          <RiArrowLeftLine />
        </button>

        <button
          onClick={() => switchValue('f')}
          className="h-10 w-10 sm:h-16 sm:w-16 rounded-full flex items-center justify-center border
          border-white/50 text-tertiary text-lg hover:bg-white hover:text-primary
          transition"
        >
          <RiArrowRightLine />
        </button>
      </div>

    </div>

  )
}

export default ValueCarousel