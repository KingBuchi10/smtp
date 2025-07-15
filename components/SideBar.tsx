"use client";
import { Modal } from '@mui/material';
import { House, LogOut, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import InputModal from './InputModal';
import ButtonConfig from './ButtonConfig';
import ButtonConfig2 from './ButtonConfig2';

function SideBar() {
  const [Open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=' flex-col bg-white h-screen w-[300px] items-center relative border-r border-gray-300 hidden md:flex'>
      <div className='w-[260px] flex mt-[20px] ml-[20px]'>
        <Image src="/Assets/cko.png" alt='' width={58.33} height={23.33} />
        <div className='w-[52.98px] h-[24.59px] bg-black rounded-lg flex items-center justify-center ml-2'>
          <div className='text-white'>SMTP</div>
        </div>
      </div>

      <div className='w-[260px] h-screen flex flex-col  mt-[50.63px]'>
        <button className='w-full h-[47px] hover:bg-gray-300 rounded-lg flex items-center mb-2 bg-gray-300'>
          <House className='w-[16px] h-[16px] ml-[10px] mr-[15.72px] text-black' />
          <div className='text-black'>Home</div>
        </button>

        <button className='w-full h-[47px] hover:bg-gray-300 rounded-lg flex items-center mb-2 bg-black' onClick={handleOpen}>
          {/* <div className='w-[16px] h-[16px] bg-black ml-[10px] mr-[15.72px]'></div> */}
          <Plus className='w-[16px] h-[16px] ml-[10px] mr-[15.72px] ' />
          <div className=''>Add entry</div>

        </button>

        <button className='w-full h-[47px] hover:bg-gray-300 rounded-lg flex items-center mb-2'>
          {/* <div className='w-[16px] h-[16px] bg-black ml-[10px] mr-[15.72px]'></div> */}
          <LogOut className='w-[16px] h-[16px] ml-[10px] mr-[15.72px] text-red-700' />
          <div className='text-red-700'>Logout</div>
        </button>
      </div>

      <Modal open={Open} onClose={handleClose} className='flex justify-end'>
        <div className='bg-white w-[500px] px-[19.5px] rounded-lg'>
          <div className='text-black text-[15px] font-bold mt-[27.86px] mb-[40.05px] justify-center flex'>
            <div>Add New Entry</div>
          </div>
          <div className='flex flex-col gap-4'>
            <InputModal title="Name" placeholder="Enter name" />
            <InputModal title="Email" placeholder="Enter email" />
            <InputModal title="Employee's name" placeholder="Employee's name" />

          </div>

          <ButtonConfig2 title='Add' />

          <div className='text-black'>Bulk Upload</div>

          <div className='mb-[29.91px] w-full h-[99px] border border-gray-300 mt-2 rounded-lg flex justify-center items-center text-black'>
            <div>Choose a file</div>
          </div>

          <div>
            <div className='text-black'>2,200 Entries Found</div>
          </div>

          <div className='border border-gray-300 w-full h-30'></div>

          <div className='flex mt-[19px] gap-[10px] items-center justify-center'>
            <button className='w-[235px] h-[34px] bg-black rounded-lg'>Add Entries</button>
            <button className='w-[235px] h-[34px] bg-red-500 rounded-lg'>Clear Enteries</button>

          </div>
        </div>
      </Modal>
    </div>


  )
}

export default SideBar

