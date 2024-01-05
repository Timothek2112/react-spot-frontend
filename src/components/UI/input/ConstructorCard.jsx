import React, { useState, useEffect } from "react";
import Question from "./../../../models/Question";
import { AnswerVariant as AnswerVariantModel } from "./../../../models/AnswerVariant";
import AnswerVariant from "./AnswerVariant";

const ConstructorCard = ({ Data, setData, question = new Question() }) => {
  const [title, setTitle] = useState(question.title);
  const [isOpen, setOpen] = useState(question.isOpen);

  function Remove() {
    let copy = Object.assign([], Data);

    copy.forEach((element, index) => {
      if (element.id == question.id) {
        copy.splice(index, 1);
      }
    });

    setData(copy);
  }

  function AddAnswerVariant() {
    let newVariant = null;

    if (question.answerVariants.length > 0) {
      newVariant = new AnswerVariantModel();
      newVariant.id =
        question.answerVariants[question.answerVariants.length - 1].id + 1;
    } else {
      newVariant = new AnswerVariantModel();
    }

    question.answerVariants.push(newVariant);
    let copy = Object.assign([], Data);

    copy.forEach((element, i) => {
      if (element.id == question.id) {
        copy[i] = question;
      }
    });

    setData(copy);
  }

  function renderButton() {
    if (!isOpen) {
      return (
        <button
          onClick={AddAnswerVariant}
          className="btn btn-primary text-white p-0 w-36"
        >
          Добавить вариант ответа
        </button>
      );
    }
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl border-2">
      <div className="card-body w-full ">
        <div className="text-primary text-xl font-bold">
          Редактирование вопроса
          <button onClick={Remove} className="float-right">
            <i className="fa-solid fa-xmark fa-2xl"></i>
          </button>
        </div>

        <div className="items-center w-full">
          <div className="form-control w-max float-left">
            <label className="label cursor-pointer">
              <span className="label-text">Открытый вопрос?</span>
              <input
                type="checkbox"
                checked={isOpen}
                onChange={(event) => {
                  setOpen(!isOpen);
                }}
                className="checkbox checkbox-primary mx-2"
              />
            </label>
          </div>
        </div>
        <textarea
          type="text"
          placeholder="Текст вопроса"
          className="input w-full border-1 border-accent"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
        <div className="flex flex-col space-y-4 items-center">
          <div className="space-y-2 w-full">
            {!!!isOpen &&
              !!(question != null) &&
              !!(question.answerVariants != null) &&
              !!question.answerVariants.length &&
              question.answerVariants.map((element) => {
                return (
                  <AnswerVariant
                    key={element.id}
                    Data={Data}
                    setData={setData}
                    question={question}
                    variant={element}
                  ></AnswerVariant>
                );
              })}
          </div>
          {renderButton()}
        </div>
      </div>
    </div>
  );
};
export default ConstructorCard;