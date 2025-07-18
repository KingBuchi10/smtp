import React from 'react'
import ButtonConfig from './ButtonConfig'
import Image from 'next/image'

function OpeningPage() {
  return (
    <div className='bg-white min-h-screen w-full text-black'>
      <div className='hidden md:flex w-full h-[70px] border-b border-gray-300 items-center justify-between px-4'>
        Home
      </div>

      <div className=' md:hidden w-full h-[70px] border-b border-gray-300 items-center justify-center flex px-4'>
        <Image src="/Assets/cko.png" alt='' width={50} height={20} />
      </div>

      {/* <div className='flex flex-col items-center w-full h-full p-3'>
        <div className='lg:flex gap-5 hidden'>
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

        <div className='lg:hidden flex justify-between w-full'>
          <div className='w-42 h-25 bg-gray-100 rounded-lg p-2'>
            <div className='text-[15px]'>Entries</div>
            <div className='text-xl font-bold my-2 '>2,500</div>
            <div className='text-[15px]'>Total Stores Entries</div>
          </div>

          <div className='w-42 h-25 bg-gray-100 rounded-lg p-2'>
            <div className='text-[15px]'>Domain</div>
            <div className='text-xl font-bold my-2 '>500</div>
            <div className='text-[15px]'>Total Domains</div>
          </div>
        </div>

        <div className='my-10 flex justify-between items-center w-full'>
          <div>All Entries</div>
          <button className='lg:hidden w-20 h-8 bg-black rounded-lg text-white text-center flex items-center justify-center text-[15px]'>Add Entry</button>
          </div>


          <div className='lg:hidden w-full h-70 border'>
            dgdgdgs
          </div>

          <button className='lg:hidden flex rounded-full w-40 h-9 bg-black text-white text-center justify-center items-center mt-10'>Edit</button>

        <div className='hidden lg:grid grid-cols-3 gap-5'>
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

      </div> */}

      <div className='flex justify-center border p-2 h-full'>
        <div className='relative h-250'>
          <div className='flex justify-between gap-5'>
            <div className='p-3 justify-center xl:w-[400px] xl:h-[150px] md:w-[260px] md:h-[150px] bg-gray-100 rounded-lg flex flex-col w-42 h-25'>
              <div>Entries</div>
              <div className='text-3xl font-bold mt-'>2,560</div>
              <div>Total Stored Enteries</div>
            </div>

            <div className='w-42 h-25 p-3 justify-center xl:w-[400px] xl:h-[150px] md:w-[260px] md:h-[150px] bg-gray-100 rounded-lg flex flex-col'>
              <div>Domains</div>
              <div className='text-3xl font-bold mt-'>500</div>
              <div>Total Stored Domains</div>
            </div>
          </div>
          <div className='my-10 flex justify-between items-center w-full'>
            <div>All Entries</div>
            <button className='lg:hidden w-20 h-8 bg-black rounded-lg text-white text-center flex items-center justify-center text-[15px]'>Add Entry</button>
          </div>

          <div className='justify-center relative grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-col'>
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
                <ButtonConfig title='Delete' />
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
                <ButtonConfig title='Delete' />
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
                <ButtonConfig title='Delete' />
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
                <ButtonConfig title='Delete' />
              </div>

            </div>
          </div>
          <button className='bottom-0 left-25 md:left-50 lg:hidden absolute rounded-full w-40 h-10  bg-black text-white text-center justify-center items-center '>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default OpeningPage
