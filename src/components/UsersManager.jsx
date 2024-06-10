import React, { useEffect, useState } from "react";
import BaseUnlogged from "./Panels/BaseUnlogged";
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "./../services/AuthService";
import BaseLogged from "./Panels/BaseLogged";
import SearchBar from "./SearchBar";
import UserCard from "./UI/UserCard";
import UserService from "../services/UserService";

const UsersManager = (props) => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    UserService.GetAllUsers().then((result) => {
        setUsers(result);
    });
  }, [])

  const [query, setQuery] = useState("");

  return (
    <BaseLogged SearchBar={
        <SearchBar setQuery={setQuery}>
        <button onClick={() => {navigate("/userConstructor")}} className="flex btn btn-info text-white">Создать пользователя</button>
        </SearchBar>
    }>
    <div className="p-5">
        { 
            users.filter(user => {
              if(query == ""){
                return user;
              }else if (user.name.toLowerCase().includes(query.toLowerCase())){
                return user
              }
            }).map((user) => {
                return <UserCard cardInfo={user} setUsers={setUsers} users={users}></UserCard>
            })
        }
    </div>

    </BaseLogged>
  );
};
export default UsersManager;
