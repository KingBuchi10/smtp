import Image from 'next/image'
import React from 'react'

function HomePage() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen bg-white text-black'>
            <div>
                Enter Pin
            </div>
            <div className='mt-4'>
                <input type='text' placeholder='Enter your pin' className='p-2 border rounded' />
            </div>
            <div>
                <Image src="/Assets/cko.png" alt='' width={20} height={20}/>
            </div>
        </div>
    )
}

export default HomePage
