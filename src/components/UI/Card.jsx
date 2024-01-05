import React, { useState } from "react";
import CardInfo from "./../../models/CardInfo";
import { useNavigate } from "react-router-dom";

const Card = ({ cardInfo = new CardInfo() }) => {
  const [active, setActive] = useState(cardInfo.active);
  const navigate = useNavigate();
  cardInfo.startTime = new Date(cardInfo.startTime);
  cardInfo.endTime = new Date(cardInfo.endTime);
  let startDay = cardInfo.startTime.getDay();
  let startMonth = cardInfo.startTime.getMonth() + 1;
  let startYear = cardInfo.startTime.getFullYear();
  let startTime =
    (startDay < 10 ? "0" + startDay : startDay.toString()) +
    "." +
    (startMonth < 10 ? "0" + startMonth : startMonth.toString()) +
    "." +
    startYear;

  let endDay = cardInfo.endTime.getDay();
  let endMonth = cardInfo.endTime.getMonth() + 1;
  let endYear = cardInfo.endTime.getFullYear();
  let endTime =
    (endDay < 10 ? "0" + endDay : endDay.toString()) +
    "." +
    (endMonth < 10 ? "0" + endMonth : endMonth.toString()) +
    "." +
    endYear;

  return (
    <div
      onClick={() => {
        navigate("/constructor", { state: { survey: cardInfo } });
      }}
      className="card w-full bg-base-100 shadow-xl"
    >
      <div className="card-body">
        <div className="flex flex-row">
          <div className="inline-block w-1/2">
            <h2 className="card-title">{cardInfo.name}</h2>
            <h2 className="truncate">{cardInfo.description}</h2>
          </div>
          <div className="inline-block w-1/2 text-right content-end items-end h-full">
            <span className="align-middle">Активен:</span>{" "}
            <input
              type="checkbox"
              onChange={(event) => setActive(!active)}
              checked={active}
              className="toggle toggle-md toggle-info align-middle"
            />
          </div>
        </div>
        <table className="table-auto w-auto">
          <tbody>
            <tr>
              <td className="w-1/2">Опрос прошло: {0}</td>
              <td>Группа/Курс: {cardInfo.group.title}</td>
            </tr>
            <tr>
              <td>Дата начала: {startTime}</td>
              <td>Отделение: {cardInfo.department}</td>
            </tr>
            <tr>
              <td>Дата окончания: {endTime}</td>
              <td>Создатель: {cardInfo.user.surname}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Card;
