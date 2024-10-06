'use client'

import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'

const HelpForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <Input
        label='Your name *'
        placeholder='e.g. John Doe'
        value={''}
        onChange={() => {}}
        name='parentName'
      />

      <Input
        label="Your child's name *"
        placeholder="e.g. John Doe Jr"
        value={''}
        onChange={() => {}}
        name='childName'
      />

      <Input
        label="Your child's current grade *"
        placeholder="e.g. 1"
        value={''}
        onChange={() => {}}
        name='grade'
      />

      <Input
        label="Your phone number *"
        placeholder="e.g. 07XXXXXXXX"
        value={''}
        onChange={() => {}}
        name='phone'
      />

      <Input
        label="Your email"
        placeholder="e.g. johndoe@email.com"
        value={''}
        onChange={() => {}}
        name='email'
      />

      <Textarea
        label="Tell us your issue"
        placeholder="e.g. Hi, I want to ask about..."
        value={''}
        onChange={() => {}}
        name='message'
      />

      <Button type='submit' className='w-max'>
        Submit message
        <RiArrowRightLine />
      </Button>
    </form>
  )
}

export default HelpForm