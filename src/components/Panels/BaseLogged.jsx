import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BaseLogged = (props) => {
  const navigate = useNavigate();

  const navigateToControlPanel = () => {
    navigate("/controlPanel");
  };

  return (
    <div className="text-wrap">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          {props.children}
        </div>
        <div className="drawer-side w-96">
          <ul className="menu p-4 w-96 h-full bg-primary text-base-content flex items-center">
            <div className="flex flex-row align-center items-center">
              <div className="mr-5 mb-5">
                <img
                  className="rounded-xl w-40"
                  src="./images/main-logo.jpg"
                  alt="Логотип"
                />
              </div>
              <div className="text-start text-white text-xl font-bold text-wrap w-1/2">
                {localStorage.getItem("surname")}
                <br />
                {localStorage.getItem("name")}
                <br />
                {localStorage.getItem("patronomyc")}
              </div>
            </div>
            <div className="flex flex-col w-full pl-5">
              <a
                onClick={() => navigate("/")}
                className="w-full link link-hover text-white text-xl font-bold"
              >
                Домой
              </a>
              <a
                onClick={navigateToControlPanel}
                className="w-full link link-hover text-white text-xl font-bold"
              >
                Панель управления
              </a>
              <a className="w-full link link-hover text-white text-xl font-bold">
                Отчеты
              </a>
            </div>
          </ul>
        </div>
      </div>
      {/* <div className="fixed bg-primary left-0 inset-y-0 w-96 h-screen bg-base-200">
        <div className="flex flex-row h-30 align-middle items-center">
          <div className="w-2/5 ml-10 mt-10 mb-10 mr-5">
            <img
              className="rounded-xl w-full"
              src="./images/main-logo.jpg"
              alt="Логотип"
            />
          </div>
          <div className="text-start text-white text-xl font-bold text-wrap w-1/2">
            {localStorage.getItem("surname")}
            <br />
            {localStorage.getItem("name")}
            <br />
            {localStorage.getItem("patronomyc")}
          </div>
        </div>
        <ul className="menu m-1 mx-10 space-y-4 items-start">
          <a
            onClick={() => navigate("/")}
            className="w-full link link-hover text-white text-xl font-bold"
          >
            Домой
          </a>
          <a
            onClick={navigateToControlPanel}
            className="w-full link link-hover text-white text-xl font-bold"
          >
            Панель управления
          </a>
          <a className="w-full link link-hover text-white text-xl font-bold">
            Отчеты
          </a>
        </ul>
      </div>
      <div className="ml-96 flex flex-col justify-items-center">
        
      </div> */}
    </div>
  );
};
export default BaseLogged;
