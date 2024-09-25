import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface Props {
  title: string,
  date: string,
  linkTitle: string,
  link: string
}

export const StudentLifeCard = ({ title, date, linkTitle, link }: Props) => {
  return (
    <div className='w-[388px] h-[524px] text-white space-y-6 rounded-2xl'>
      <Image
        width={1920}
        height={1280}
        src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
        className='w-full md:w-[300px] h-[400px] object-cover'
      />

      <div>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='text-base text-[#ccc] font-normal'>{date}</p>
      </div>

      <div className='text-sm font-semibold text-tertiary flex gap-3 items-center'>
        <Link href={link}><span>{linkTitle}</span></Link>
        <HiOutlineArrowNarrowRight />
      </div>
    </div>
  )
}
