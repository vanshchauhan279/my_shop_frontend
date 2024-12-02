import React from "react";
import { Link } from "react-router-dom";

const Productcard = ({ productDetail }) => {
  const { Img, BrandName, Category, Sizes, MRP, SellPrice, Discount } =
    productDetail;
  console.log(Img);
  return (
    <Link to="/productview">
      <div className="card bg-base-100 w-64 shadow-sm mr-4 mb-3 hover:scale-105 hover:shadow-lg">
        <figure>
          <img
            src={Img}
            alt="Cloth"
            className="w-full h-48 object-cover mb-4"
          />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title capitalize">{BrandName}</h2>
            <h3>{Category}</h3>
          </div>
          <div className="flex justify-between">
            <h3>Rs {SellPrice}</h3>
            <div className="flex">
              {MRP.toLowerCase() != "nan" && <h4>{MRP}</h4>}
              {Discount.toLowerCase() != "nan" && (
                <h4 className="ml-2">({Discount})</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Productcard;
