import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BaseLogged = (props) => {
  const navigate = useNavigate();
  return (
    <div className="text-wrap">
      <div className="navbar bg-base-100 w-full h-[100px] flex flex-row border-b-2 bg-primary text-white items-center">
        <img
          src="./images/main-logo.jpg"
          className="h-full mx-5 rounded-xl cursor-pointer hover:scale-95"
          onClick={() => navigate("/controlPanel")}
        ></img>
        <div className="grow text-left">
          <div className="text-xl h-min content-end ml-auto mr-10">
            {localStorage.getItem("surname")}
            <br />
            {localStorage.getItem("name")}
            <br />
            {localStorage.getItem("patronomyc")}
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default BaseLogged;
