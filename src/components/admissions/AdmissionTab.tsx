import React from 'react'

type AdmissionTabSwitchProps = {
  isActive: (i: number) => boolean
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
  name: string
  idx: number
  width?: string
}

const AdmissionTabSwitch: React.FC<AdmissionTabSwitchProps> = ({
  isActive,
  setActiveTab,
  name,
  idx,
}) => {
  return (
    <button
      className={`px-5 py-3 w-[160px] border flex flex-col gap-2 hover:bg-white hover:text-primary
      transition ${isActive(idx) ? 'bg-white text-primary' : 'bg-primary text-white border-white/10'} text-left`}
      onClick={() => setActiveTab(idx)}
    >
      <span className="font-bold text-xl">{idx}</span>
      {name}
    </button>
  )
}

export default AdmissionTabSwitch