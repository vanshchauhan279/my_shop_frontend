import React from 'react'
import SideProperties from './SideProperties'
import PriceHandle from './PriceHandle'

const Sidebar = () => {
    const brandArr = ["hello", "Namaste", "This", "MyStore", "Namaste", "This", "MyStore", "Namaste", "This", "MyStore", "Namaste", "This", "MyStore"];
    const colorArr = ["Red","YEllow","pink","YEllow","pink"]
  return (
    <div className='w-64 p-3'>
        <div className='flex justify-between mb-5 mt-3'>
          <h1 className='font-bold'>Filters</h1>
          <h4 className='text-pink-400 font-bold text-sm'>CLEAR ALL</h4>
        </div>      
       <SideProperties heading={"Brand"} headArr={brandArr}/>
       <PriceHandle/>
       <SideProperties heading={"Color"} headArr={colorArr}/>
    </div>
  )
}

export default Sidebar
