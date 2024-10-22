import React from 'react'

import StageCard from '@/components/home/StageCard'

const Stages = () => {
  return (
    <section className='pt-10 pb-20 overflow-x-auto'>
      <div className="container space-y-10">
      <h2 className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
          text-primary">
          CBC curriculum offered
        </h2>

        <div className="overflow-x-auto">
          <div className="flex w-max">
            <StageCard
              name='Pre school'
              bgStyles='bg-primary'
              textStyles='text-white'
              level='playgroup, pp1, pp2'
            />
            <StageCard
              name='Primary school'
              bgStyles='bg-secondary'
              textStyles='text-white'
              level='grade 1 - 6'
            />
            <StageCard
              name='Junior secondary'
              bgStyles='bg-tertiary'
              textStyles='text-primary'
              level='grade 7 - 9'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stages