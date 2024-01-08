import React, { useState } from "react";
import SurveyService from "../../services/SurveyService";
import ReportService from "../../services/ReportService";

const InfoPanel = (props) => {
  const survey = props.survey;
  console.log(survey);
  function ParseTime(time) {
    if (time === null) {
      return null;
    } else {
      time = new Date(time);
    }
    return new Date(time).toLocaleString("ru", time);
  }
  let startTime;
  let endTime;
  if (survey != null) {
    startTime = ParseTime(survey.startTime);
    endTime = ParseTime(survey.endTime);
  }
  const uniqRespondents = [];
  !!(survey != null) &&
    survey.answers.map((el) => {
      if (!uniqRespondents.includes(el.respondentId)) {
        uniqRespondents.push(el.respondentId);
        return el.respondentId;
      }
    });
  const respondentsCount = uniqRespondents.length;

  return (
    <div className="card shadow-xl border border-accent mr-10 mt-10 sticky right-0 top-10">
      <div className="card-body">
        <div>
          <b className="text-xl">{!!(survey != null) && survey.title}</b>
        </div>
        <div>{!!(survey != null) && survey.description}</div>
        <div>
          <b>Дата начала опроса:</b> {startTime}
        </div>
        <div>
          <b>Дата окончания опроса:</b> {endTime}
        </div>
        <div>
          <b>Группа:</b> {!!(survey != null) && survey.group.title}
        </div>
        <div>
          <b>Количество ответов:</b>{" "}
          {!!!(survey == null) && survey.answers.length}
        </div>
        <div>
          <b>Количество участников:</b> {respondentsCount}
        </div>
        <div>
          <b>Количество вопросов:</b>{" "}
          {!!(survey != null) && survey.questions.length}
        </div>
        <div>
          <b>Код доступа:</b> {!!(survey != null) && survey.accessCode}
        </div>
        <div className="w-full text-left">
          <div className="dropdown dropdown-hover w-max">
            <div
              tabIndex={0}
              role="button"
              className="btn mt-2 bg-primary text-white"
            >
              Скачать отчет
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-max"
            >
              <li>
                <a onClick={() => ReportService.CreateExcelReport(survey)}>
                  Excel
                </a>
              </li>
              <li>
                <a>PDF</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoPanel;
