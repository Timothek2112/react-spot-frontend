import React, { useEffect, useState } from "react";
import Question from "./../../../models/Question";

const AnswerVariant = ({
  Data,
  setData,
  question = new Question(),
  variant = {},
}) => {
  const [title, setTitle] = useState(variant.title);

  useEffect(() => {
    variant.title = title;
    let copy = Object.assign([], Data);

    copy.forEach((element, i) => {
      element.answerVariants.forEach((answerVariant, index) => {
        if (answerVariant.id == variant.id) {
          element.answerVariants[index] = variant;
        }
      });
    });

    setData(copy);
  }, [title]);

  function Remove() {
    const copy = Object.assign([], Data);

    copy.forEach((element, i) => {
      if (question.id == element.id) {
        element.answerVariants.forEach((curVariant, index) => {
          if (variant.id == curVariant.id) {
            element.answerVariants.splice(index, 1);
          }
        });
      }
    });

    setData(copy);
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl border-2">
      <div className="card-body w-full ">
        <div className="items-center w-full">
          <div className="text-primary text-xl font-bold">
            Вариант ответа
            <button onClick={Remove} className="float-right">
              <i className="fa-solid fa-xmark fa-2xl"></i>
            </button>
          </div>
          <textarea
            type="text"
            placeholder="Текст варианта ответа"
            className="input w-full border-1 border-accent mt-5"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default AnswerVariant;
