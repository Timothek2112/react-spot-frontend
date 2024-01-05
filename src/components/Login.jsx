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
    navigate("/");
  }

  return (
    <BaseUnlogged>
      <div className="w-full flex flex-col h-screen">
        <div className="m-auto space-y-10 content-center w-1/3">
          <input
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Имя пользователя"
            className="block input input-bordered  bg-accent w-full"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Пароль"
            className="block input input-bordered  bg-accent w-full"
          />
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="link link-primary"
          >
            Забыли пароль?
          </a>
          <button
            onClick={LogIn}
            className="block btn btn-primary w-44 m-auto text-white"
          >
            Войти
          </button>
        </div>
      </div>
    </BaseUnlogged>
  );
};
export default Login;
