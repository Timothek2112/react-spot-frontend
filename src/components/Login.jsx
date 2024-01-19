import React, { useState } from "react";
import BaseUnlogged from "./Panels/BaseUnlogged";
import { useNavigate } from "react-router-dom";
import AuthService from "./../services/AuthService";

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const LogIn = () => {
    AuthService.Login(login, password)
      .then((result) => {
        setLogged(result);
      })
      .catch(() => {});
  };

  if (logged) {
    navigate("/controlPanel");
  }

  return (
    <BaseUnlogged>
      <div className="w-full flex flex-col h-screen">
        <div className="m-auto flex flex-col content-center items-center w-1/3">
          <div className=" flex flex-row justify-center items-center">
            <img src="./images/main-logo.jpg" className=" w-[20vh]" />
            <span className="h-min grow text-[10vh] text-primary z-10 ml-[-30px]">
              СПОТ
            </span>
          </div>
          <input
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Имя пользователя"
            className="block input input-bordered  bg-accent w-full mt-[100px]"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
            className="block input input-bordered  bg-accent w-full mt-5"
          />

          <button
            onClick={() => LogIn()}
            className="block btn btn-primary w-44 m-auto text-white mt-5"
          >
            Войти
          </button>
        </div>
      </div>
    </BaseUnlogged>
  );
};
export default Login;
