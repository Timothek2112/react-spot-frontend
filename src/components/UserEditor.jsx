import React, { useState, useEffect, useRef } from "react";
import BaseLogged from "./Panels/BaseLogged";
import Card from "./UI/Card";
import CardInfo from "../models/CardInfo";
import ConstructorCard from "./UI/input/ConstructorCard";
import Question from "./../models/Question";
import ConstructorRightPanel from "./Panels/ConstructorRightPanel";
import { Survey } from "../models/Survey";
import { useLocation, useNavigate } from "react-router-dom";
import SurveyService from "../services/SurveyService";
import GroupService from "../services/GroupService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "@material-tailwind/react";
import User from "../models/User";
import TextInputProperty from "./Constructor/TextInputProperty";
import ComboboxPickerProperty from "./Constructor/ComboboxPickerProperty";
import UserService from "../services/UserService";
 
const UserEditor = ({ user = new User() }, ...props) => {

  const location = useLocation();
  if (!(location.state === null))
    user = location.state.user === null ? user : location.state.user;

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [patronomyc, setPatronomyc] = useState(user.patronomyc); 
  const [roleTitle, setRoleTitle] = useState(user.role.title);
  const [roleId, setRoleId] = useState(user.role.id);
  const [roleList, setRoleList] = useState([]);
  const [role, setRole] = useState(user.role);
  const [login, setLogin] = useState(user.login);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    roleList.map((a) => {
      if(a.title == roleTitle){
        setRole(a);
        setRoleId(a.id);
        setRoleTitle(a.title);
      }
    })
  }, [roleTitle])

  useEffect(() => {
    user.name = name;
    user.surname = surname;
    user.patronomyc = patronomyc;
    user.role = role;
    user.roleId = role.id;
    user.login = login;
    user.password = password;
  }, [name, surname, patronomyc, role, login, password])

  useEffect(() => {
    UserService.GetAllRoles().then((result) => {
      setRoleList(result);
    });
  }, [])

  const showTitle = () => {
    if(user.id == 0) return "Создание пользователя";
    else return "Редактирование пользователя";
  }

  const SaveUser = () => {
    if(user.id == 0){
      UserService.CreateUser(user).then((result) => {
        user.id = result.id;
        toast("Успешно создан пользователь");
      }).catch((reason) => {
        toast("Не удалось создать пользователя");
      })
    }
    else{
      UserService.SaveUser(user).then((result) => {
        toast("Пользователь сохранен");
      }).catch(() => {
        toast("Не удалось сохранить пользователя");
      })
    }
  }

  return (
    <BaseLogged>
      <div className="flex flex-row items-center w-full">
        <h5 className="text-primary text-4xl font-bold m-5 ">{showTitle()}</h5>
        <div className="grow">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-error float-right mr-5 text-white w-48"
          >
            Назад
          </button>
        </div>
      </div>
      <div className="w-full p-5 space-y-5">
      <TextInputProperty title="Фамилия" property={surname} setProperty={setSurname}></TextInputProperty>
      <TextInputProperty title="Имя" property={name} setProperty={setName}></TextInputProperty>
      <TextInputProperty title="Отчество" property={patronomyc} setProperty={setPatronomyc}></TextInputProperty>
      <ComboboxPickerProperty title="Роль" property={role} setProperty={setRoleTitle} options={roleList} defaultTitle="Выбор роли"></ComboboxPickerProperty>
      <TextInputProperty title="Логин" property={login} setProperty={setLogin}></TextInputProperty>
      </div>
      <div className="flex justify-center">
      <button
        onClick={() => SaveUser()}
        className="btn btn-active btn-primary w-1/6  text-white"
      >
            Сохранить
        </button>
      </div>
      
      <ToastContainer />
    </BaseLogged>
  );
};
export default UserEditor;
