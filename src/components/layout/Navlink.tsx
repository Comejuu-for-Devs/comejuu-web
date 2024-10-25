'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavlinkProps = {
  name: string
  url: string
  classNames?: string
}

const Navlink: React.FC<NavlinkProps> = ({ name, url, classNames }) => {
  const pathname = usePathname()
  const isActive = pathname === url
  
  return (
    <Link
      href={url}
      className={`text-sm transition pr-3 border-r border-gray-200 last:border-0 last:pr-0
      relative group
      ${isActive 
        ? 'text-primary font-semibold' 
        : 'text-gray-500 hover:text-primary'
      } ${classNames ?? ''}`}
    >
      {name}
      <span className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary transform origin-left
        transition-transform duration-300 ease-out
        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
      ></span>
    </Link>
  )
}

export default Navlink
