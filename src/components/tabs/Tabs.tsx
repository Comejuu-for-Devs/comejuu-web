'use client'

import React, { useState } from 'react'

type TabsProps = {
  renderControls: (isActive: (i: number) => boolean, setActiveTab: React.Dispatch<React.SetStateAction<number>>) => React.ReactNode
  renderContent: (isActive: (i: number) => boolean) => React.ReactNode
}

const Tabs: React.FC<TabsProps> = ({
  renderControls,
  renderContent
}) => {
  const [activeTab, setActiveTab] = useState(1)

  const isActive = (i: number) => activeTab === i

  return (
    <div className='space-y-5'>
      <div className="w-full overflow-x-auto pb-5">
        {renderControls(isActive, setActiveTab)}
      </div>

      {renderContent(isActive)}
    </div>
  )
}

export default Tabs