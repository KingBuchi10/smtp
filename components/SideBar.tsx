"use client";
import { Modal } from '@mui/material';
import {  House, LogOut, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import InputModal from './InputModal';
import ButtonConfig2 from './ButtonConfig2';

function SideBar() {
  const [Open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='hidden sm:flex flex-col bg-white min-h-screen xl:w-[300px] w-[85px] p-[20px] border-r border-gray-300'>
      <div className='flex'>
        <div><Image src="/Assets/cko.png" alt='' width={58.33} height={23.33} className='' /></div>
        <div className='hidden xl:flex w-[52.98px] h-[24.59px] bg-black rounded-lg flex items-center justify-center ml-2'>
          <div className='text-white '>SMTP</div>
        </div>
      </div>

      <div className='mt-[50.63px]'>
        <button className='w-full h-[47px] hover:bg-gray-300 rounded-lg flex items-center mb-2 bg-gray-300'>
          <House className='w-[16px] h-[16px] ml-[10px] mr-[15.72px] text-black' />
          <div className='text-black hidden xl:block'>Home</div>
        </button>
        <button className='w-full h-[47px] hover:bg-gray-300 rounded-lg flex items-center mb-2 bg-black' onClick={handleOpen}>
          {/* <div className='w-[16px] h-[16px] bg-black ml-[10px] mr-[15.72px]'></div> */}
          <Plus className='w-[16px] h-[16px] ml-[10px] mr-[15.72px] ' />
          <div className=' hidden xl:block'>Add entry</div>
        </button>

        <button className='w-full h-[47px] hover:bg-gray-300 rounded-lg flex items-center mb-2'>
          {/* <div className='w-[16px] h-[16px] bg-black ml-[10px] mr-[15.72px]'></div> */}
          <LogOut className='w-[16px] h-[16px] ml-[10px] mr-[15.72px] text-red-700' />
          <div className='text-red-700 hidden xl:block'>Logout</div>
        </button>
      </div>

      <Modal open={Open} onClose={handleClose} className='flex justify-end m-1'>
        <div className='bg-white w-[500px] h-full px-[19.5px] rounded-lg text-black'>
          <span className='flex justify-center mt-[27.86px] text-[15px] font-bold mb-[40.05px]'>Add Entry</span>

          <div className='flex flex-col gap-2'>
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
           <div className='border border-gray-300 w-full h-20'></div>

          <div className='flex mt-[19px] gap-[10px] items-center justify-center'>
            <button className='w-[235px] h-[34px] bg-black rounded-lg text-white'>Add Entries</button>
            <button className='w-[235px] h-[34px] bg-red-500 rounded-lg'>Clear Enteries</button>

          </div> 
        </div>
      </Modal>
    </div>
  )
}

export default SideBar

