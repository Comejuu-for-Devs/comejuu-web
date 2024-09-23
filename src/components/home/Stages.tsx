import React from 'react'
import StageCard from './StageCard'

const Stages = () => {
  return (
    <section className='py-20 bg-gray-50'>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <StageCard
          name='Pre school'
          bgStyles='bg-primary'
          textStyles='text-white'
        />
        <StageCard
          name='Lower school'
          bgStyles='bg-secondary'
          textStyles='text-white'
        />
        <StageCard
          name='Middle school'
          bgStyles='bg-tertiary'
          textStyles='text-primary'
        />
        <StageCard
          name='Junior secondary'
          bgStyles='bg-white'
          textStyles='text-primary'
        />
      </div>
    </section>
  )
}

export default Stages