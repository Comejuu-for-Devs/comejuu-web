import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Navlink from '@/components/layout/Navlink'

import logo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <nav className='py-[15px] px-[30px] border rounded-xl w-full md:max-w-screen-lg mx-auto
    fixed top-3 left-1/2 -translate-x-1/2 flex items-center justify-between bg-white/95
    b backdrop-blur z-50'>
      <Link href='/' className='w-max'>
        <Image
          src={logo}
          width={412}
          height={166}
          alt=''
          className='h-12 w-auto'
        />
      </Link>

      <div className="hidden md:flex items-center gap-5">
        <Navlink name='Home' url='/' />
        <Navlink name='About Comejuu' url='/about' />
        <Navlink name='Curriculum' url='/curriculum' />
        <Navlink name='Admissions' url='/admissions' />
        <Navlink name='Media Room' url='/mediaroom' />
      </div>
    </nav>
  )
}

export default Navbar