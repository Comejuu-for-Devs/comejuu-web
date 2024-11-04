'use client'

import React, { useRef } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'

interface HelpFormProps { 
  prepopulatedText?: string
}

const HelpForm = ({ prepopulatedText }: HelpFormProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    console.log({ name, phone, email, message });
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <Input
        label='Your name *'
        placeholder='e.g. John Doe'
        ref={nameRef}
        name='parentName'
      />

      <Input
        label="Your phone number *"
        placeholder="e.g. 07XXXXXXXX"
        ref={phoneRef}
        name='phone'
      />

      <Input
        label="Your email"
        placeholder="e.g. johndoe@email.com"
        ref={emailRef}
        name='email'
      />

      <Textarea
        label="Write us a message"
        placeholder="e.g. Hi, I want to ask about..."
        ref={messageRef}
        value={prepopulatedText || ''}
        name='message'
      />

      <Button type='submit' className='w-max mt-5'>
        Submit message
        <RiArrowRightLine />
      </Button>
    </form>
  )
}

export default HelpForm