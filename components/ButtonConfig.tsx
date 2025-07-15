import React from 'react'

interface ButtonProps {
  title: string
}

function ButtonConfig({ title }: ButtonProps) {
  return (
    <button className='w-30 rounded-lg h-6 bg-red-400 flex items-center justify-center'>
      {title}
    </button>
  )
}

export default ButtonConfig
