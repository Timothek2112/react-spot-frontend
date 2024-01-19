import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import AuthService from "../../services/AuthService";

const BaseLogged = (props) => {
  const navigate = useNavigate();

  async function LogOut() {
    await AuthService.LogOut();
    navigate("/login");
  }

  return (
    <div className="text-wrap">
      <div className="sticky top-0 z-10 navbar bg-base-100 w-full h-[100px] flex flex-row border-b-2 bg-primary text-white items-center">
        <img
          src="./images/main-logo.jpg"
          className="h-full ml-3 rounded-xl cursor-pointer hover:scale-95"
          onClick={() => navigate("/controlPanel")}
        ></img>
        <div className="w-full flex flex-row justify-center">
          <div className="w-[40vw]">{props.SearchBar}</div>
        </div>
        <div className="grow text-left">
          <div className="text-xl h-min content-end ml-auto mr-10">
            {localStorage.getItem("surname")}
            <br />
            {localStorage.getItem("name")}
            <br />
            {localStorage.getItem("patronomyc")}
          </div>
          <button className="btn btn-accent mr-5" onClick={() => LogOut()}>
            Выйти
          </button>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default BaseLogged;
