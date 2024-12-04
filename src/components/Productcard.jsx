import { Link } from "react-router-dom";
import React from "react";

const Productcard = React.memo(({ productDetail }) => {
  const { _id, Img, BrandName, Category, Sizes, MRP, SellPrice, Discount } =
    productDetail;

  return (
    <Link to={`/productview/${_id}`}>
      <div className=" relative card bg-base-100 w-64 shadow-sm mr-4 mb-3 hover: hover:shadow-lg group">
        <figure>
          <img
            src={Img}
            alt="Cloth"
            className="w-full h-48 object-cover mb-4"
          />
        </figure>
        <div className="card-body">
          <div
            className=""
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log("whishlist");
            }}
          >
            <div className="absolute border-1 border-gray-200 p-2 text-center opacity-0 group-hover:opacity-100 w-[80%] text-pink-500 font-medium">
              ❤️ WISHLIST
            </div>
            <div className="group-hover:opacity-0">
              <h2 className="card-title capitalize">{BrandName}</h2>
              <h3>{Category}</h3>
            </div>
          </div>
          <div className="flex justify-between">
            {SellPrice.toLowerCase() != "nan" && <h3>Rs {SellPrice}</h3>}
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
});

export default Productcard;
