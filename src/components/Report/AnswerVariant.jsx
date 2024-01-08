import React, { useState } from "react";
import CardInfo from "./../../models/CardInfo";
import { useNavigate } from "react-router-dom";
import PieChart from "./PieChart";

const AnswerVariant = (props) => {
  function getSelectSklonenie(n) {
    const leftover = n % 10;
    if (leftover == 1 || leftover == 0 || leftover >= 5) {
      return "Раз";
    } else return "Раза";
  }

  return (
    <div className="">
      <div>
        <b>{props.title}</b> - Выбрали {props.answers.length}{" "}
        {getSelectSklonenie(props.answers.length)} -{" "}
        {Math.round(
          (props.answers.length /
            props.survey.answers.filter(
              (el) => el.questionId == props.question.id
            ).length) *
            100 *
            100
        ) / 100}
        %
      </div>
    </div>
  );
};
export default AnswerVariant;
