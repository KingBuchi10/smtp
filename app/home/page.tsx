import OpeningPage from '@/components/OpeningPage'
import SideBar from '@/components/SideBar'
import React from 'react'

function Home() {
  return (
    <div className='flex max-w-screen'>
      <SideBar />
      <OpeningPage />
    </div>
  )
}

export default Home
