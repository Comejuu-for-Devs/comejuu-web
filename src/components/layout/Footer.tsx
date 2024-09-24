import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiGithubLogoDuotone } from 'react-icons/pi'
import { RiLinkedinLine, RiTwitterXLine } from 'react-icons/ri'

import logo from '@/assets/logo.png'

const footerData = {
  products: [
    {
      name: 'About',
      url: '/about',
      external: true,
    },
    {
      name: 'Careers',
      url: '/careers',
      external: true,
    },
    {
      name: 'Team',
      url: '/team',
      external: true,
    },
  ],

  company: [
    {
      name: 'How it works',
      url: '/projects',
      external: false,
    },
    {
      name: 'Partners',
      url: '/culture',
      external: false,
    },
    {
      name: 'Members',
      url: '/careers',
      external: false,
    },
    {
      name: 'Blog',
      url: '/blog',
      external: false,
    },
  ],

  resources: [
    {
      name: 'blog',
      url: '/',
      external: false,
    },
    {
      name: 'customers',
      url: '/',
      external: false,
    },
    {
      name: 'community',
      url: '/',
      external: false,
    },
    {
      name: 'events',
      url: '/',
      external: false,
    },
  ],

  contact: [
    {
      name: 'info@comejuupremieracademy.ac.ke',
      url: 'mailto:info@comejuupremieracademy.ac.ke',
      external: false,
    },
    {
      name: '0800 123 456',
      url: 'tel:0800 123 456',
      external: false,
    },
  ],
}

type FooterLinkProps = {
  name: string
  url: string
  external?: boolean
}

type FooterLinkGroupProps = {
  title: string
  links: FooterLinkProps[]
}

const FooterLink = ({ name, url, external }: FooterLinkProps) => {
  return (
    <Link
      href={url}
      className='text-[12px] text-gray-400 hover:text-white hover:underline transition w-max font-primary'
      target={external ? "_blank" : ""}
    >
      {name}
    </Link>
  )
}

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <div className="space-y-2.5 font-secondary">
      <h5 className="text-sm font-medium text-white">{title}</h5>

      <div className="flex flex-col space-y-1">
        {links.map((link, i) => (
          <FooterLink
            key={i}
            name={link.name}
            url={link.url}
            external={link.external}
          />
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='border-t border-white/10 w-full relative z-10 bg-[#222] py-16'>
      <div className="container space-y-16">
        {/* ********* TOP ********* */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3">
            <Link href='/' className='w-max'>
              <Image
                src={logo}
                width={412}
                height={166}
                alt=''
                className='h-12 w-auto'
              />
            </Link>

            <p className="text-gray-300 text-sm">
              Where vital academics meet a deep respect for childhood
            </p>

            <div className="bg-gradient-w-border py-2 flex gap-4 w-max">
              <Link
                href='https://www.linkedin.com/company/afordia-zero'
                className='text-gray-400 hover:text-white transition'
                target="_blank"
              >
                <RiLinkedinLine />
              </Link>

              <Link
                href='https://github.com/Afordia-Zero'
                className='text-gray-400 hover:text-white transition'
                target="_blank"
              >
                <PiGithubLogoDuotone />
              </Link>

              <Link
                href='https://twitter.com/AfordiaZero'
                className='text-gray-400 hover:text-white transition'
                target="_blank"
              >
                <RiTwitterXLine />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-10 flex-wrap">
            <div className='flex gap-10'>
              <FooterLinkGroup
                title='Useful Links'
                links={footerData.products}
              />

              <FooterLinkGroup
                title='Resources'
                links={footerData.company}
              />
            </div>

            <FooterLinkGroup
              title='Contact Us'
              links={footerData.contact}
            />
          </div>
        </div>

        {/* ********* BOTTOM ********* */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center justify-between relative pt-5
        border-t border-white/10">
          <p className="text-[12px] font-medium text-gray-500">
            &copy; {new Date().getFullYear()} Comejuu Premier Academy. All Rights Reserved.
          </p>

          <div className="bg-gradient-w-border py-2 px-3 flex gap-4 w-max">
            <p
              className='text-[12px] text-gray-400 hover:text-white transition'
            >Privacy Policy</p>
            <p
              className='text-[12px] text-gray-400 hover:text-white transition'
            >legal</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
