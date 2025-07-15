import React from 'react'

interface ButtonProps {
  title: string
}

function ButtonConfig({ title }: ButtonProps) {
  return (
    <div className='w-30 rounded-lg h-6 bg-red-400 flex items-center justify-center'>
      {title}
    </div>
  )
}

export default ButtonConfig
