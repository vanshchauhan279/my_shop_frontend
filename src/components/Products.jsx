import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {   
    const [productArr,setProductArr] = useState([]);
    const product = async ()=>{
        try{
           const res = await axios.get("http://localhost:4000/products",{
            withCredentials: true
           })
            setProductArr(res?.data)
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        product()
    },[])

  return (
    <div className='border-t border-gray-200 pt-3 flex flex-wrap justify-center'>
       {productArr.length > 0 ? (
        productArr.map((product)=>(
             <Productcard key={product._id} productDetail={product}/>
        ))
    ):(
        <h1>Loading !!!!</h1>
       )}
    </div>
  )
}

export default Products
