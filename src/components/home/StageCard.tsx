import React from 'react'

type StageCardProps = {
  name: string
  bgStyles: string
  textStyles: string
  level: string
}

const StageCard: React.FC<StageCardProps> = ({
  name,
  bgStyles,
  textStyles,
  level,
}) => {
  const [first, second] = name.split(' ')

  return (
    <div className={`flex flex-col justify-between p-5 border-2 border-transparent
    h-[300px] sm:h-[400px] ${bgStyles} hover:scale-95 transition cursor-pointer`}>
      {/* <div className="w-20 h-20 rounded-lg bg-gray-300"></div> */}
      <p className={`text-sm uppercase ${textStyles}`}>{level}</p>

      <h3 className={`text-2xl sm:text-4xl font-secondary flex flex-col ${textStyles}`}>
        <span className="font-bold">{first}</span>
        <span className="font-light">{second}</span>
      </h3>
    </div>
  )
}

export default StageCard