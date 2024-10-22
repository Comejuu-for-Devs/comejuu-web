import React from 'react'

import ErrorMsg from '@/components/ErrorMsg'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  err?: string,
  label: string,
  name: string,
  info?: string,
  placeholder: string,
  type?: string,
  value: string | number,
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>,
  required?: boolean,
  labelStyle?: string
}

const Textarea = (props: TextareaProps) => {
  const { err, label, info, value, ...rest } = props

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={rest.name} className={`capitalize
      text-xs xs:text-sm ${rest.labelStyle && rest.labelStyle}
      ${err && 'text-red-500'}`}>
        {label}
      </label>

      <textarea
        className={`px-3 py-2.5 bg-transparent border rounded-lg text-sm md:text-base
        ${err ? 'border-red-500' : 'border-gray-200'}
        !bg-gray-50 `}
        {...rest}
        defaultValue={value}
      />

      {info && (
        <span className="text-xs text-neutral-500">
          {info}
        </span>
      )}

      {err && <ErrorMsg msg={err} />}
    </div>
  )
}

export default Textarea