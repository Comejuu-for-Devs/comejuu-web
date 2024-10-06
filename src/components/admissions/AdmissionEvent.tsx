import React from 'react'
import Link from 'next/link'

import { getDate } from '@/utils/helpers'

type AdmissionEventProps = {
  title: string
  date: string
  time: string
}

const AdmissionEvent: React.FC<AdmissionEventProps> = ({ title, date, time }) => {
  const { day, monthName } = getDate(date)
  return (
    <div className='p-2 border border-white/10 rounded-xl w-[285px] gap-5 flex flex-col'>
      <div className="bg-tertiary text-primary p-3 w-14 min-w-12 rounded-lg">
        <p className="text-lg font-semibold">{day}</p>
        <p className="text-sm uppercase">{monthName}</p>
      </div>

      <div className="px-3 pb-3">
        <h5 className="text-white font-bold text-xl">{title}</h5>
        <p className="text-gray-300 text-base">{time}</p>
        <Link href='/' className='text-sm underline text-gray-300'>
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default AdmissionEvent