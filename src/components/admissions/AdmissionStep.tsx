import React from 'react'

type AdmissionStepProps = {
  stepNo: number
  title: string
  description: string
}

const AdmissionStep: React.FC<AdmissionStepProps> = ({
  stepNo,
  title,
  description
}) => {
  return (
    <div className='space-y-5'>
      <span className="text-6xl sm:text-7xl text-tertiary font-bold">{stepNo}</span>
      <h5 className="text-lg sm:text-xl font-bold font-secondary text-primary">
        {title}
      </h5>

      <p className="text-sm sm:text-base text-gray-500">{description}</p>
    </div>
  )
}

export default AdmissionStep