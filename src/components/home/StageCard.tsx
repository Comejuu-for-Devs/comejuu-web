import React from 'react'

type StageCardProps = {
  name: string
  bgStyles: string
  textStyles: string
}

const StageCard: React.FC<StageCardProps> = ({ name, bgStyles, textStyles }) => {
  const [first, second] = name.split(' ')

  return (
    <div className={`flex flex-col justify-between p-5 rounded-xl border border-gray-100
    h-[250px] ${bgStyles}`}>
      <div className="w-20 h-20 rounded-lg bg-gray-300"></div>

      <h3 className={`text-2xl font-secondary flex flex-col ${textStyles}`}>
        <span className="font-bold">{first}</span>
        <span className="font-light">{second}</span>
      </h3>
    </div>
  )
}

export default StageCard