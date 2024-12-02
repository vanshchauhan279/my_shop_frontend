import React from 'react'
import Login from './Login'
import Sidebar from './Sidebar'
import Products from './Products'
import HeroSection from './HeroSection'

const Home = () => {
  return (
    <div className='mb-32 flex'>
      <div className=''>
        <Sidebar/>
      </div>
      <div className='flex-1 ml-1'>
          <HeroSection/>
          <Products/>
      </div>
    </div>
  )
}

export default Home
