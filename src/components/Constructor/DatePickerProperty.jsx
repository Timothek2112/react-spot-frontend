import React, { useState } from "react";
import DatePicker from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

const DatePickerProperty = ({ title, property, setProperty }) => {
  function FormatDate(Date) {}

  return (
    <div className="space-x-4 grid grid-cols-12">
      <div className="col-span-2 flex items-center">
        <span className="text-black items-center">{title}</span>
      </div>
      <div className="h-full flex items-center">
        <DatePicker
          dateFormat="DD.MM.YYYY"
          value={property}
          onChange={setProperty}
          className="border border-primary p-1 rounded-[5px]"
        ></DatePicker>
      </div>
    </div>
  );
};
export default DatePickerProperty;
