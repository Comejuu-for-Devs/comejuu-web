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
    <div className={`flex flex-col justify-between p-5 border-2 border-transparent w-[250px]
    sm:w-[340px] h-[200px] ${bgStyles} hover:scale-95 transition cursor-pointer`}>
      <hr />

      <div className="space-y-5">
        <h3 className={`text-2xl sm:text-3xl font-secondary flex flex-col ${textStyles}`}>
          <span className="font-bold">{first}</span>
          <span className="font-light">{second}</span>
        </h3>

        <p className={`text-sm uppercase ${textStyles}`}>{level}</p>
      </div>
    </div>
  )
}

export default StageCard