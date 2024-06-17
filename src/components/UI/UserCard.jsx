import React, { useEffect, useState } from "react";
import CardInfo from "./../../models/CardInfo";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SurveyService from "../../services/SurveyService";
import User from "./../../models/User";
import UserService from "../../services/UserService";

const UserCard = ({ cardInfo = new User(), setUsers, users}) => {
  const [active, setActive] = useState(cardInfo.active);
  const navigate = useNavigate();

  function Delete() {
    let copy = Object.assign([], users);
    UserService.DeleteUser(cardInfo.id);

    copy.forEach((element, index) => {
      if (element.id == cardInfo.id) {
        copy.splice(index, 1);
      }
    });

    setUsers(copy);
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-accent mb-2">
      <div className="card-body">
        <div className="flex flex-row">
          <div className="inline-block w-1/2">
            <h2 className="card-title">{cardInfo.surname} {cardInfo.name} {cardInfo.patronomyc}</h2>
          </div>
        </div>
        <table className="table-auto w-auto">
          <tbody>
            <tr className="flex flex-row mt-5 space-x-5">
              <button
                className="btn btn-active btn-primary text-white "
                onClick={() => {
                  navigate("/userConstructor", { state: { user: cardInfo } });
                }}
              >
                Редактировать
              </button>
              <button
                onClick={() => {
                  if(window.confirm("Вы уверены, что хотите удалить пользователя? Вместе с ним будут удалены все связанные данные.")){
                    Delete();
                  }
                }}
                className="btn btn-error float-right mr-5 text-white w-48"
              >
                Удалить пользователя
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserCard;
