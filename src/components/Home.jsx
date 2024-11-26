import React from 'react'
import Login from './Login'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='mb-32 flex'>
      <Sidebar/>
      <div className='flex items-center w-screen justify-center'>
          <Login/>
      </div>
    </div>
  )
}

export default Home
