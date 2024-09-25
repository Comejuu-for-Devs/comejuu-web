import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiMenu2Line } from 'react-icons/ri'

import Navlink from '@/components/layout/Navlink'
import Button from '@/components/Button'

import logo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <nav className='rounded-xl w-full
    fixed top-5 left-0 z-50 flex items-center'>
      {/* LINE */}
      <div className="absolute h-px w-full bg-gray-900/20 left-0" />

      {/* NAV */}
      <div className="relative z-10 container flex items-center justify-between">
        <Link href='/' className='w-max bg-white rounded-xl py-1.5 px-2'>
          <Image
            src={logo}
            width={412}
            height={166}
            alt=''
            className='h-16 w-auto'
          />
        </Link>

        <div className="hidden md:flex items-center gap-3 bg-white/90 py-3 px-5 border
        border-gray-900/20 backdrop-blur-md rounded-full">
          <Navlink name='Home' url='/' />
          <Navlink name='About Comejuu' url='/about' />
          <Navlink name='Curriculum' url='/curriculum' />
          <Navlink name='Admissions' url='/admissions' />
          <Navlink name='Media Room' url='/mediaroom' />
        </div>

        <Button
          size='icon'
          className='justify-center text-base'
        >
          <RiMenu2Line />
        </Button>
      </div>
    </nav>
  )
}

export default Navbar