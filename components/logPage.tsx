import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LogPage() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen bg-white text-black'>
            <div className='flex flex-col items-center justify-center relaitve'>
                <div>
                    Enter Pin
                </div>
                <div className='mt-4'>
                    <input type='text' placeholder='Enter your pin' className='p-2 border rounded' />
                </div>
                <Link href="/home" className='absolute bottom-6 flex'>
                    <Image src="/Assets/cko.png" alt='' width={73} height={29} />
                    <div className='w-[67px] h-[30px] bg-black rounded-lg flex items-center justify-center ml-2'>
                        <div className='text-white'>smtp</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default LogPage
