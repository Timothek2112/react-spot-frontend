import React, { useState } from "react";
import DatePicker from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

const ComboboxPickerProperty = ({
  title,
  property,
  setProperty,
  options,
  defaultTitle,
  required = false
}) => {
  return (
    <div className="space-x-4 grid grid-cols-12">
      <div className="col-span-2 flex items-center">
        <span className="text-black items-center">{title}{!!required && <span className="text-red-500">*</span>}</span>
      </div>
      <div className="h-full flex items-center col-span-10">
        <select
          onChange={(e) => setProperty(e.target.value)}
          value={property.title == "" ? null : property.title}
          className="select select-bordered w-full"
        >
          <option disabled selected>
            {defaultTitle}
          </option>
          {!!(options != null) &&
            options.map((element) => {
              if (element === null) return <></>;
              return <option key={element.id}>{element.title}</option>;
            })}
        </select>
      </div>
    </div>
  );
};
export default ComboboxPickerProperty;
