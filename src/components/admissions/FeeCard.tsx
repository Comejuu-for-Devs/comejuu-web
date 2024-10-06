import Link from 'next/link'
import React from 'react'

type FeeCardProps = {
  name: string
  period: string
  url: string
}

const FeeCard = ({
  name,
  period,
  url
}: FeeCardProps) => {
  return (
    <Link href={url} className='p-5 flex flex-col justify-end gap-2 border border-white/10
    hover:border-white transition'>
      <h5 className="text-lg sm:text-xl font-bold text-tertiary">
        {name}
      </h5>

      <p className="text-sm text-gray-300">{period}</p>
    </Link>
  )
}

export default FeeCard