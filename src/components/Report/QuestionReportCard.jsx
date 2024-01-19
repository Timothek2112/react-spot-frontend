import React, { useState } from "react";
import CardInfo from "./../../models/CardInfo";
import { useNavigate } from "react-router-dom";
import PieChart from "./PieChart";
import AnswerVariant from "./AnswerVariant";

const QuestionReportCard = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const overflowIndex = 2;
  return (
    <div className="card shadow-xl h-max border border-accent w-full">
      <div className="card-body">
        <div className="grid grid-cols-12">
          <div className="col-span-8 flex flex-col">
            <h1 className="text-2xl">
              <b>Текст вопроса:</b>{" "}
              <span className="">{props.question.title}</span>
            </h1>
            <div className="text-[18px]">
              {!!!props.question.isOpen && "Варианты ответов:"}
              {!!props.question.isOpen && "Ответы:"}
            </div>
            <div className="grow">
              <div className="flex flex-col justify-center h-full">
                {!!props.question.isOpen &&
                  props.survey.answers
                    .filter((el) => {
                      return el.questionId == props.question.id;
                    })
                    .map((elem, index) => {
                      if (!isExpanded && index > overflowIndex) return;
                      return (
                        <span className="flex flex-row items-center gap-x-2">
                          <div className="bg-black w-[5px] h-[5px]"></div>
                          {(elem.respondent.surname != null
                            ? elem.respondent.surname
                            : "") +
                            " " +
                            (elem.respondent.name != null
                              ? elem.respondent.name
                              : "Аноним") +
                            " " +
                            (elem.respondent.patronomic != null
                              ? elem.respondent.patronomic
                              : "")}{" "}
                          - {elem.openAnswer}
                        </span>
                      );
                    })}
                {!!!isExpanded &&
                  !!props.question.isOpen &&
                  overflowIndex <
                    props.survey.answers.filter((el) => {
                      return el.questionId == props.question.id;
                    }).length && (
                    <a
                      onClick={() => {
                        setExpanded(!isExpanded);
                      }}
                      className="link link-primary w-max"
                    >
                      {"Развернуть"}
                    </a>
                  )}
                {!!isExpanded &&
                  !!props.question.isOpen &&
                  overflowIndex <
                    props.survey.answers.filter((el) => {
                      return el.questionId == props.question.id;
                    }).length && (
                    <a
                      onClick={() => {
                        setExpanded(!isExpanded);
                      }}
                      className="link link-primary w-max"
                    >
                      {"Свернуть"}
                    </a>
                  )}
                {!!!props.question.isOpen &&
                  props.question.answerVariants.map((element) => {
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
            {!!!props.question.isOpen && (
              <PieChart
                question={props.question}
                survey={props.survey}
              ></PieChart>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionReportCard;
