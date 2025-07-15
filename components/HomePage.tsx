import React from 'react'

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

        <div className=''>All Entries</div>

        <div className='flex flex-col-3 gap-5'>
          <div className='w-[260px] h-[150px] bg-gray-100 rounded-lg flex flex-col p-4'>
            dfsdsfds
          </div>

          <div className='w-[260px] h-[150px] bg-gray-100 rounded-lg flex flex-col'>

          </div>

          <div className='w-[260px] h-[150px] bg-gray-100 rounded-lg flex flex-col'>

          </div>
        </div>

      </div>
    </div>
  )
}

export default MainPage
