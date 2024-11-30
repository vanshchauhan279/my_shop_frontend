import React, { useState } from "react";

const HeroSection = () => {
    const [value, setValue] = useState("");
  return (
    <div>
      <div className="flex justify-between mb-8 mt-3 h-6">
        <div className="dropdown dropdown-hover absolute right-0 mt-2 mr-10 ">
          <div tabIndex={0} role="button" className="btn m-1 min-w-[200px] text-left">
           <span className="font-light">Sort by</span> : {value ? value : (
            <img className="w-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gVci2aeT65lDBSzgR0FCGGB28_nwt3NRzw&s"/>)
            }
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=>setValue("Price: High to Low")}>
              <a>Price: High to Low</a>
            </li>
            <li onClick={()=>setValue("Price: Low to High")}>
              <a>Price: Low to High</a>
            </li>
            <li onClick={()=>setValue("Better Discount")}>
              <a>Better Discount</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
