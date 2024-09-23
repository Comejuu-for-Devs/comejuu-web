import React from 'react'
import { RiCircleFill } from 'react-icons/ri'
import GhostLine from '../GhostLine'

const Activities = () => {
  return (
    <section className='py-20 bg-secondary'>
      <div className="container space-y-10">
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div className="flex items-center gap-3">
            <RiCircleFill className='text-tertiary' />
            <h2 className="text-3xl font-secondary tracking-[-.1px] font-bold text-white">Activities</h2>
          </div>

          <p className="text-sm text-gray-300 w-full sm:w-96">Our extracurriculars foster well-rounded students by encouraging growth, leadership, and teamwork through sports, arts, and clubs.</p>
        </div>

        <GhostLine styles='via-white/50' />

        <div className=""></div>
      </div>
    </section>
  )
}

export default Activities
