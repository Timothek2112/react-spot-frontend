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

  async function CreateExcelReport(){
    let wb = await ReportService.CreateExcelReport(survey);
    wb.xlsx.writeBuffer().then(async function (data) {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = survey.title + " - Отчет.xlsx";
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  }

  async function CreatePDFReport(){
    let reporturl = await ReportService.CreatePDFReport(survey);
    var tempLink = document.createElement('a');
    tempLink.href = reporturl;
    tempLink.setAttribute('download', survey.title + " - Отчет.pdf");
    tempLink.click();
  }

  return (
    <div className="card shadow-xl border border-accent sticky right-0 top-10">
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
                <a onClick={() => CreateExcelReport()}>
                  Excel
                </a>
                <a onClick={() => CreatePDFReport()}>
                  PDF
                </a>
              </li>
              {/* <li>
                <a>PDF</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoPanel;
