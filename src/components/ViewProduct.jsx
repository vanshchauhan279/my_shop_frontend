import React from 'react'

const ViewProduct = () => {
    const productDetail = async()=>{
        try{
             const res = await axios.get()
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className='min-h-screen'>
        hello, there you see product.
    </div>
  )
}

export default ViewProduct
