import React, { useEffect, useState } from "react";
import { Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import axios, { HttpStatusCode } from "axios";
import AuthService from "./../../services/AuthService";
import Login from "../Login";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    AuthService.checkLogged().then((result) => {
      setIsAuthenticated(result);
      if (result) {
       
      } else {
        navigate("/login");
      }
    });
  }, []);

  return isAuthenticated ? <Outlet /> : <></>;
};

export default PrivateRoute;
