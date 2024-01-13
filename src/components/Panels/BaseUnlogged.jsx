import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BaseUnlogged = (props) => {
  const navigate = useNavigate();

  return <div className="text-wrap">{props.children}</div>;
};
export default BaseUnlogged;
