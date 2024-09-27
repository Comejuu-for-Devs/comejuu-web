import React from 'react'
import StageCard from './StageCard'

const Stages = () => {
  return (
    <section className='py-20'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StageCard
          name='Pre school'
          bgStyles='bg-primary'
          textStyles='text-white'
          level='playgroup & kindergarten'
        />
        <StageCard
          name='Lower school'
          bgStyles='bg-secondary'
          textStyles='text-white'
          level='grade 1 - 3'
        />
        <StageCard
          name='Middle school'
          bgStyles='bg-tertiary'
          textStyles='text-primary'
          level='grade 4 - 6'
        />
        <StageCard
          name='Junior secondary'
          bgStyles='bg-gray-100'
          textStyles='text-primary'
          level='grade 7 - 9'
        />
      </div>
    </section>
  )
}

export default Stages