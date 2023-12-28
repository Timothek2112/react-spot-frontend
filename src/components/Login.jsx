import React, { useState } from "react";
import BaseUnlogged from "./BaseUnlogged";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LogIn = () => {
        console.log(login)
        if(login.length > 0 && password.length > 0)
            navigate("/logged");
        else
            alert("Для теста считаем, что вход успешен, если в логине и пароле написано хоть что-то")
    }

    return(
        <BaseUnlogged>
         <div className="w-full flex flex-col h-screen">
            <div className="m-auto space-y-10 content-center w-1/3">
                <input onChange={e => setLogin(e.target.value)} type="text" placeholder="Имя пользователя" className="block input input-bordered  bg-accent w-full"/>
                <input onChange={e => setPassword(e.target.value)} type="text" placeholder="Пароль" className="block input input-bordered  bg-accent w-full"/>
                <a className="link link-primary">Забыли пароль?</a>
                <button onClick={LogIn} className="block btn btn-primary w-44 m-auto text-white">Войти</button>
            </div>
         </div>
        </BaseUnlogged>
        
    )
}
export default Login;