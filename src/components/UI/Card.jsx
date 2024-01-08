import React, { useState } from "react";
import CardInfo from "./../../models/CardInfo";
import { useNavigate } from "react-router-dom";

const Card = ({ cardInfo = new CardInfo() }) => {
  const [active, setActive] = useState(cardInfo.active);
  const navigate = useNavigate();

  function GetUniqRespondentsCount(Answers) {
    const uniq = [];
    Answers.map((element) => {
      if (uniq.includes(element.respondentId)) {
      } else {
        uniq.push(element.respondentId);
      }
    });
    return uniq.length;
  }

  function ParseTime(time) {
    if (time === null) {
      return null;
    } else {
      time = new Date(time);
    }
    return new Date(time).toLocaleString("ru", time);
  }

  const startTime = ParseTime(cardInfo.startTime);
  const endTime = ParseTime(cardInfo.endTime);

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-accent">
      <div className="card-body">
        <div className="flex flex-row">
          <div className="inline-block w-1/2">
            <h2 className="card-title">{cardInfo.title}</h2>
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
              <td className="w-1/2">
                Опрос прошло: {GetUniqRespondentsCount(cardInfo.answers)}
              </td>
              <td className="line-clamp-1">
                Группа/Курс: {cardInfo.group.title}
              </td>
            </tr>
            <tr>
              <td>Дата начала: {startTime}</td>
              <td className="line-clamp-1">Отделение: {cardInfo.department}</td>
            </tr>
            <tr>
              <td>Дата окончания: {endTime}</td>
              <td className="line-clamp-1">
                Создатель:{" "}
                {cardInfo.user.surname +
                  " " +
                  Array.from(cardInfo.user.name)[0] +
                  ". " +
                  (cardInfo.user.patronomyc === null
                    ? ""
                    : Array.from(cardInfo.user.patronomyc)[0] + ".")}
              </td>
            </tr>
            <tr className="flex flex-row mt-5 space-x-5">
              <button
                className="btn btn-active btn-primary text-white "
                onClick={() => {
                  navigate("/constructor", { state: { survey: cardInfo } });
                }}
              >
                Редактировать
              </button>
              <button
                className="btn btn-active btn-primary text-white "
                onClick={() => {
                  navigate("/report", { state: { surveyInfo: cardInfo } });
                }}
              >
                Создать отчет
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Card;
