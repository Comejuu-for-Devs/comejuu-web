import React from 'react'

type ApproachCardProps = {
  title: string
  description: string
}

const ApproachCard = ({
  title,
  description
}: ApproachCardProps) => {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h6 className="font-semibold font-secondary text-base sm:text-lg">{title}</h6>
        <hr className='w-10 border-tertiary' />
      </div>

      <p className="text-sm sm:text-base text-gray-500">{description}</p>
    </div>
  )
}

export default ApproachCard