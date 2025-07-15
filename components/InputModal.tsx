import React from 'react'


interface InputProps {
  title: string,
    placeholder: string
}
function InputModal({ title, placeholder }: InputProps) {
  return (
    <div className='flex flex-col gap-2 text-black'>
      <div>{title}</div>
      <div>
        <input type="text" className='w-[461px] h-[41px] border border-gray-400 rounded-lg p-2' placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default InputModal
