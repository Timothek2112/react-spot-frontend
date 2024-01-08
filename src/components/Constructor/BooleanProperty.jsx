import React, { useState } from "react";
import DatePicker from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

const BooleanProperty = ({ title, property, setProperty, options }) => {
  return (
    <div className="space-x-4 grid grid-cols-12">
      <div className="col-span-2">
        <span className="align-middle items-center">{title}</span>{" "}
      </div>
      <input
        type="checkbox"
        onChange={() => setProperty(!property)}
        checked={property}
        className="toggle toggle-md toggle-info"
      />
    </div>
  );
};
export default BooleanProperty;
