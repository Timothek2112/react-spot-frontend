import React, { useEffect, useState } from "react";
import { Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import axios, { HttpStatusCode } from "axios";
import AuthService from "./../../services/AuthService";
import Login from "../Login";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    AuthService.checkLogged()
      .then((result) => {
        setIsAuthenticated(result);
      })
      .finally(() => setReady(true));
  }, []);

  // if (!isReady) {
  //   return (
  //     <span className="absolute loading loading-bars loading-lg left-1/2 top-1/2"></span>
  //   );
  // }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
