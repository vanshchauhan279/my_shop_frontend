import React, { useState } from "react";

const PriceHandle = () => {
  const [price, setprice] = useState(10000);
  const handlePrice = (e) => {
    setprice(e.target.value);
  };
  return (
    <div className="pb-5 pt-5 border-b border-r border-t border-gray-200">
      <label htmlFor="price" className="block capitalize font-medium pb-2">
        price
      </label>
      <input
        className="thin block mb-2 "
        type="range"
        min="200"
        max={10000}
        onChange={handlePrice}
        id="price"
        value={price}
      />
      <span className="">Upto {price}</span>
    </div>
  );
};

export default PriceHandle;
