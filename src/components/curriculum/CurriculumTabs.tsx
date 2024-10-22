'use client'

import React from 'react'

import Tabs from '@/components/tabs/Tabs'
import ApproachCard from '@/components/curriculum/ApproachCard'

import { excellenceBeyondClassroomItems } from '@/data'

const CurriculumExcellenceTabs = () => {
  return (
    <Tabs
      renderControls={(isActive, setActiveTab) => {
        return (
          <div className='flex w-max'>
            {excellenceBeyondClassroomItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i+1)}
                className={`px-5 py-3 border ${isActive(i+1) ? 'bg-primary text-white' : ''}
                text-sm`}
              >
                {item.title}
              </button>
            ))}
          </div>
        )
      }}
      renderContent={(isActive) => {
        return (
          <div className="">
            {excellenceBeyondClassroomItems.filter((_, i) => isActive(i+1)).map((item, i) => (
              <ApproachCard
                key={i}
                title={item.title}
                description={item.description}
                imgHeight='250px'
              /> 
            ))}
          </div>
        )
      }}
    />
  )
}

export default CurriculumExcellenceTabs