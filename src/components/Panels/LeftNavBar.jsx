import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseLogged from "./BaseLogged";
import BaseUnlogged from "./BaseUnlogged";
import AuthService from "../../services/AuthService";

const LeftNavBar = (props) => {
  const [logged, setLogged] = useState(false);
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    console.log("LeftNavBar calls check user");
    AuthService.checkLogged()
      .then((result) => {
        setLogged(result);
      })
      .finally(() => setReady(true));
  }, []);
  if (logged) {
    return <BaseLogged>{props.children}</BaseLogged>;
  } else {
    return <BaseUnlogged>{props.children}</BaseUnlogged>;
  }
};
export default LeftNavBar;
