import React, { useState } from "react";

const TextAreaProperty = ({ title, property, setProperty, required = false }) => {
  return (
    <div className="space-x-4 grid h-max grid-cols-12">
      <div className="flex items-center col-span-2">
        <span className="text-black">{title}{!!required && <span className="text-red-500">*</span>}</span>
      </div>
      <textarea
        type="text"
        placeholder="Описание опроса"
        className="input overflow-x-hidden border-primary pt-3 h-max col-span-10"
        onChange={(e) => setProperty(e.target.value)}
        value={property}
      ></textarea>
    </div>
  );
};
export default TextAreaProperty;
