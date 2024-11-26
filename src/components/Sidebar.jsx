import React from 'react'
import SideProperties from './SideProperties'

const Sidebar = () => {
    const brandArr = ["hello", "Namaste", "This", "MyStore", "Namaste", "This", "MyStore", "Namaste", "This", "MyStore", "Namaste", "This", "MyStore"];
  return (
    <div className='w-72 p-3'>
        <div className='flex justify-between mb-5 mt-3'>
          <h1 className='font-bold'>Filters</h1>
          <h4 className='text-pink-400 font-bold text-sm'>CLEAR ALL</h4>
        </div>      
       <SideProperties heading={"Brand"} headArr={brandArr}/>
    </div>
  )
}

export default Sidebar
