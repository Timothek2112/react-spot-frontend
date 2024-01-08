import React, { useState } from "react";
import LeftNavBar from "./Panels/LeftNavBar";
import "react-toastify/dist/ReactToastify.css";
import QuestionReportCard from "./Report/QuestionReportCard";
import { useLocation } from "react-router-dom";
import InfoPanel from "./Report/InfoPanel";

const ReportView = (props) => {
  const location = useLocation();
  const surveyInfo = location.state.surveyInfo;
  return (
    <LeftNavBar>
      <div className="flex flex-row w-full ">
        <div className="  h-full space-y-5 p-10 ">
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
        <div className="w-1/3">
          <InfoPanel survey={surveyInfo}></InfoPanel>
        </div>
      </div>
    </LeftNavBar>
  );
};
export default ReportView;
