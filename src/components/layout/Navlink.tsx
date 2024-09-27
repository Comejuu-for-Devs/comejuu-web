import React from 'react'
import Link from 'next/link'

type NavlinkProps = {
  name: string
  url: string
  classNames?: string
}

const Navlink: React.FC<NavlinkProps> = ({ name, url, classNames }) => {
  return (
    <Link
      href={url}
      className={`text-sm text-gray-500 hover:text-primary transition pr-3 border-r
      border-gray-200 last:border-0 last:pr-0 ${classNames ?? ''}`}
    >
      {name}
    </Link>
  )
}

export default Navlink