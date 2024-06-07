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
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-7 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
        <li><a onClick={() => navigate("/controlPanel")}>Панель управления</a></li>
        <li><a onClick={() => navigate("/usersManager")}>Управление пользователями</a></li>
        <li><a onClick={() => navigate("/constructor")}>Создать опрос</a></li>
      </ul>
    </div>
        <img
          src="./images/main-logo.jpg"
          className="h-full ml-3 rounded-xl cursor-pointer hover:scale-95"
          onClick={() => navigate("/controlPanel")}
        ></img>
        <div className="w-full flex flex-row justify-center">
          {props.SearchBar}
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
