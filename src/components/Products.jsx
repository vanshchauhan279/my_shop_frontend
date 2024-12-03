import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Products = () => {
  const [productArr, setProductArr] = useState([]);
  const [page,setPage] = useState(0);
  const [pagechange,setPagechange] = useState(false)
  const limit = 50;
  const navigate = useNavigate();

  const handleNext = ()=>{
    setPage((prev)=>prev+1);
    // navigate(`/?page=${page}`)
    setPagechange(true)
  }
  const handlePrev = ()=>{
    setPage((prev)=>prev-1)
    //  navigate(`/?page=${page}`)
     setPagechange(true)
  } 

  const product = async () => {
    try {
      const res = await axios.get("http://localhost:4000/products",{
        params: {
            page: page,
            limit: limit
        }
      }, {
        withCredentials: true,
      });
      setProductArr(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    product();
    setTimeout(()=>{
       window.scrollTo({ top: 0});
       setPagechange(false)
    },1000)
  }, [page]);

  return (
    <div className="  flex flex-wrap justify-center">
      <div className="flex flex-wrap justify-center pt-5  pb-8">
      {productArr.length > 0 ? (
        productArr.map((product) => (
          <Productcard key={product._id} productDetail={product} />
        ))
      ) : (
        <h1>Loading !!!!</h1>
      )}
      </div>

      <div className="flex mt-5">
        <div className="m-5">{pagechange && (<span className="loading loading-spinner text-secondary"></span>)}</div>
        <h1 className="mr-20 mt-6"> <span className="font-medium">Page:</span> {page} of 200</h1>
        <div className="join mr-20 mt-4 ">
          {page>0 ? (<button className="join-item btn" onClick={(prev)=>handlePrev(prev)}>«</button>): (
            <button className="btn" disabled="disabled">«</button>
          )}
          <button className="join-item btn">Page {page}</button>
          {page<200 ? (<button className="join-item btn" onClick={(prev)=>handleNext(prev)}>»</button>): (
            <button className="btn" disabled="disabled">»</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
