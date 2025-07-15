import { LogOut, SendIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideBar() {
  return (
    <div className='flex flex-col bg-white h-screen w-[300px] items-center relative'>
      <div className='w-[260px] flex mt-[20px]'>
        <Image src="/Assets/cko.png" alt='' width={58.33} height={23.33} />
        <div className='w-[52.98px] h-[24.59px] bg-black rounded-lg flex items-center justify-center ml-2'>
          <div className='text-white'>smtp</div>
        </div>
      </div>

      <div className='w-[260px] h-screen flex flex-col  mt-[50.63px]'>
        <button className='w-full h-[47px] hover:bg-gray-300 rounded-lg flex items-center mb-2'>
          <SendIcon className='w-[16px] h-[16px] ml-[10px] mr-[15.72px] text-black' />
          <div className='text-black'>Send</div>
        </button>

        <button className='w-full h-[47px] hover:bg-gray-300 rounded-lg flex items-center mb-2'>
          {/* <div className='w-[16px] h-[16px] bg-black ml-[10px] mr-[15.72px]'></div> */}
          <LogOut className='w-[16px] h-[16px] ml-[10px] mr-[15.72px] text-red-700' />
          <div className='text-red-700'>Logout</div>
        </button>
      </div>
    </div>
  )
}

export default SideBar
