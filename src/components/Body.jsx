import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='min-h-screen p-0.5'>
      <Navbar/>
        <div className="">
            <Outlet/>
        </div>
        <div className='mt-10 ml-5 mr-5'>
      <Footer/>
      </div>
    </div>
  )
}

export default Body
