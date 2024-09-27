import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiCloseLine } from 'react-icons/ri'

import Button from '@/components/Button'
import Navlink from '@/components/layout/Navlink'

import logo from '@/assets/logo.png'

type MenuProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-50 bg-white/20 backdrop-blur
      ${open ? 'h-screen scale-1' : 'h-0 scale-0'}`}
      onClick={() => setOpen(false)}
    >
      <div className={`absolute right-0 h-full ${open ? 'translate-x-0' : 'translate-x-full'} w-[300px]
      h-screen bg-primary transition duration-300 px-5 py-10`}
      onClick={e => e.stopPropagation()}>
        <Button
          size='icon'
          className='bg-white text-primary text-lg absolute top-2 right-2'
          onClick={() => setOpen(false)}
        >
          <RiCloseLine />
        </Button>

        <div className="space-y-10">
          <div className="">
            <Link href='/' className='w-max'>
              <Image
                src={logo}
                width={412}
                height={166}
                alt=''
                className='h-16 w-auto'
              />
            </Link>
          </div>

          <div className="flex flex-col gap-3" onClick={() => setOpen(false)}>
            <Navlink name='Home' url='/' classNames='text-gray-100 hover:text-tertiary border-none p-0' />
            <Navlink name='About Comejuu' url='/about' classNames='text-gray-100 hover:text-tertiary border-none p-0' />
            <Navlink name='Curriculum' url='/curriculum' classNames='text-gray-100 hover:text-tertiary border-none p-0' />
            <Navlink name='Admissions' url='/admissions' classNames='text-gray-100 hover:text-tertiary border-none p-0' />
            <Navlink name='Media Room' url='/mediaroom' classNames='text-gray-100 hover:text-tertiary border-none p-0' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu