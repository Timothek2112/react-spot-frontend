import React, { useState } from "react";
import CardInfo from "./../../models/CardInfo";
import { useNavigate } from "react-router-dom";
import PieChart from "./PieChart";
import AnswerVariant from "./AnswerVariant";

const QuestionReportCard = (props) => {
  return (
    <div className="card shadow-xl h-max border border-accent w-full">
      <div className="card-body">
        <div className="grid grid-cols-12">
          <div className="col-span-8 flex flex-col">
            <h1 className="text-2xl">
              <b>Текст вопроса:</b>{" "}
              <span className="">{props.question.title}</span>
            </h1>
            <div className="text-[18px]">Варианты ответов:</div>
            <div className="grow">
              <div className="flex flex-col justify-center h-full">
                {props.question.answerVariants.map((element) => {
                  return (
                    <AnswerVariant
                      title={element.title}
                      answers={props.survey.answers.filter(
                        (answer) =>
                          answer.questionId == props.question.id &&
                          answer.answerVariantId == element.id
                      )}
                      survey={props.survey}
                      question={props.question}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <PieChart
              question={props.question}
              survey={props.survey}
            ></PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionReportCard;
