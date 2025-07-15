import React from 'react'


interface ButtonProps {
  title: string
}
function ButtonConfig2({ title }: ButtonProps) {
  return (
    <button className=' mt-[14.5px] mb-[29.82px] h-[40px] w-full flex justify-center items-center bg-black text-white rounded-lg'>
      {title}
    </button>
  )
}

export default ButtonConfig2
