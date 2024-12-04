import React, {useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  const [detail,setDetail] = useState({});
  const { id } = useParams();
  const [sizeArr,setSizeArr] = useState([])
  console.log(sizeArr)

  const productDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/product/${id}`, {
        withCredentials: true,
      });
      setDetail(res?.data)
      setSizeArr(res?.data?.Sizes?.split(','));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) {
      productDetail();
    }
  }, [id]);


  return (
   <div className="min-h-screen flex m-3 mb-5 pb-5 mt-5">
    <div className="h-full w-[50%]">
        <img src={detail.Img} alt="saree image" />
    </div>
   <div className="h-full">
     <h1 className="font-bold ml-10 mt-10 text-3xl capitalize pl-5">{detail?.BrandName}</h1>
     <h2 className="font-light ml-10 mb-5 text-2xl capitalize pl-5">{detail?.Category}</h2>
     <h2 className="font-middle pb-3 ml-10 mt-10 text-3xl capitalize pl-5">Size Available</h2>
     {sizeArr.filter((size)=>!size.includes("Size")).map((size,index)=>(
        <h2 key={index} className="font-light ml-10 mb-2 text-2xl capitalize pl-5">{size}</h2>
     ))}
      <div className="ml-12 justify-between">
            {detail?.SellPrice?.toLowerCase() != "nan" && <h3><span className="font-medium mr-2">Price:</span> Rs{detail.SellPrice}</h3>}
            <div className="flex justify-between mt-5">
              {detail?.MRP?.toLowerCase() != "nan" && <h4><span className="font-medium mr-2">MRP:</span>{detail.MRP}</h4>}
              {detail?.Discount?.toLowerCase() != "nan" && (
                <h4 className="ml-5"><span className="font-medium mr-2">Discount:</span>({detail.Discount})</h4>
              )}
            </div>
          </div>
     
   </div>
       
   </div>
)};

export default ViewProduct;
