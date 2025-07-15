import React from 'react'
import ButtonConfig from './ButtonConfig'

function MainPage() {
  return (
    <div className='bg-white h-screen w-full text-black'>
      <div className='flex w-full h-[70px] border border-gray-300 items-center justify-between px-4'>
        Home
      </div>

      <div className='flex flex-col items-center w-full h-full p-3'>
        <div className='flex gap-5'>
          <div className='p-3 justify-center w-[400px] h-[150px] bg-gray-100 rounded-lg flex flex-col'>
            <div>Entries</div>
            <div className='text-3xl weight-200 mt-7'>2,560</div>
            <div>Total Stored Enteries</div>
          </div>

          <div className=' p-3 justify-center w-[400px] h-[150px] bg-gray-100 rounded-lg flex flex-col'>
            <div>Entries</div>
            <div className='text-3xl weight-200 mt-7'>2,560</div>
            <div>Total Stored Enteries</div>
          </div>
        </div>

        <div className='my-10'>All Entries</div>

        <div className='grid grid-cols-3 gap-5'>
          <div className='w-[260px] h-[150px] bg-gray-100 rounded-lg flex flex-col p-4'>
            <div className='w-18 h-6 bg-black rounded-full text-white text-[12px] items-center justify-center flex'>
              test.com
            </div>
            <div className='flex mt-3 items-center gap-3'>
              <div>Mark Wang</div>
              <div className='w-10 h-6  rounded-full border border-gray-300 font-bold text-[10px] items-center justify-center flex'>CEO</div>
            </div>
            <div className='text-gray-400 text-[13px]'>info@test.com</div>

            <div className='w-full flex gap-2 mt-3 items-center justify-between'>
              <button className='w-30 rounded-lg h-6 border '>Edit</button>
              <ButtonConfig title='Delete'/>
            </div>
          </div>

           <div className='w-[260px] h-[150px] bg-gray-100 rounded-lg flex flex-col p-4'>
            <div className='w-18 h-6 bg-black rounded-full text-white text-[12px] items-center justify-center flex'>
              test.com
            </div>
            <div className='flex mt-3 items-center gap-3'>
              <div>Mark Wang</div>
              <div className='w-10 h-6  rounded-full border border-gray-300 font-bold text-[10px] items-center justify-center flex'>CEO</div>
            </div>
            <div className='text-gray-400 text-[13px]'>info@test.com</div>

            <div className='w-full flex gap-2 mt-3 items-center justify-between'>
              <button className='w-30 rounded-lg h-6 border '>Edit</button>
              <ButtonConfig title='Delete'/>
            </div>
          </div>

           <div className='w-[260px] h-[150px] bg-gray-100 rounded-lg flex flex-col p-4'>
            <div className='w-18 h-6 bg-black rounded-full text-white text-[12px] items-center justify-center flex'>
              test.com
            </div>
            <div className='flex mt-3 items-center gap-3'>
              <div>Mark Wang</div>
              <div className='w-10 h-6  rounded-full border border-gray-300 font-bold text-[10px] items-center justify-center flex'>CEO</div>
            </div>
            <div className='text-gray-400 text-[13px]'>info@test.com</div>

            <div className='w-full flex gap-2 mt-3 items-center justify-between'>
              <button className='w-30 rounded-lg h-6 border '>Edit</button>
              <ButtonConfig title='Delete'/>
            </div>
          </div>

           <div className='w-[260px] h-[150px] bg-gray-100 rounded-lg flex flex-col p-4'>
            <div className='w-18 h-6 bg-black rounded-full text-white text-[12px] items-center justify-center flex'>
              test.com
            </div>
            <div className='flex mt-3 items-center gap-3'>
              <div>Mark Wang</div>
              <div className='w-10 h-6  rounded-full border border-gray-300 font-bold text-[10px] items-center justify-center flex'>CEO</div>
            </div>
            <div className='text-gray-400 text-[13px]'>info@test.com</div>

            <div className='w-full flex gap-2 mt-3 items-center justify-between'>
              <button className='w-30 rounded-lg h-6 border '>Edit</button>
              <ButtonConfig title='Delete'/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainPage
