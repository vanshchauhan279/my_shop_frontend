import React from "react";

const SideProperties = ({heading, headArr}) => {
    console.log(headArr)
  return (
    <div className="border-t border-r border-b border-gray-200 pb-2">
      <h1 className="font-medium mb-3">{heading}</h1>
      <div className="mb-2 overflow-y-auto h-[300px]">
        {headArr.map((element, index) => (
          <div className="" key={index}>
            <input type="checkbox" id="brand" className="inline-flex mr-2" />
            <label htmlFor="brand" className="font-thin capitalize">{element}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideProperties;
