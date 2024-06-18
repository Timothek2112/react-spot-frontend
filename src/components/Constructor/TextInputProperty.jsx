import React, { useState } from "react";

const TextInputProperty = ({ title, property, setProperty, required = false, ...props }) => {
  return (
    <div className="space-x-4 grid grid-cols-12">
      <div className="flex items-center col-span-2">
        <span className="text-black">{title}{!!required && <span className="text-red-500">*</span>}</span>
      </div>
      <input
        type="text"
        placeholder={title}
        className="input input-bordered input-info col-span-10"
        value={property}
        onChange={(e) => setProperty(e.target.value)}
        readOnly={props.readonly}
      />
    </div>
  );
};
export default TextInputProperty;
