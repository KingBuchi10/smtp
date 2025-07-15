import MainPage from '@/components/homePage'
import SideBar from '@/components/SideBar'
import React from 'react'

function Home() {
  return (
    <div className='flex max-w-screen'>
      <SideBar />
      <MainPage />
    </div>
  )
}

export default Home
