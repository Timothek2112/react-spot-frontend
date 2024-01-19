import React, { useState } from "react";
import LeftNavBar from "./Panels/LeftNavBar";
import "react-toastify/dist/ReactToastify.css";
import QuestionReportCard from "./Report/QuestionReportCard";
import { useLocation, useNavigate } from "react-router-dom";
import InfoPanel from "./Report/InfoPanel";

const ReportView = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const surveyInfo = location.state.surveyInfo;
  return (
    <LeftNavBar>
      <div className="flex flex-col w-full p-5 space-y-5">
        <div className="w-full flex flex-row items-center justify-center">
          <span className="text-5xl font-bold text-primary grow">Отчет</span>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-error float-right text-white w-48"
          >
            Назад
          </button>
        </div>
        <div className="flex flex-row space-x-5 w-full">
          <div className="h-full space-y-5 w-3/5">
            {!!!(surveyInfo == null) &&
              !!!(surveyInfo.questions == null) &&
              surveyInfo.questions.map((element) => {
                return (
                  <QuestionReportCard
                    key={element.id}
                    question={element}
                    survey={surveyInfo}
                  />
                );
              })}
          </div>
          <div className="w-2/5">
            <InfoPanel survey={surveyInfo}></InfoPanel>
          </div>
        </div>
      </div>
    </LeftNavBar>
  );
};
export default ReportView;
