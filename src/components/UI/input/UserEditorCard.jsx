import React, { useState, useEffect } from "react";
import Question from "./../../../models/Question";
import { AnswerVariant as AnswerVariantModel } from "./../../../models/AnswerVariant";
import AnswerVariant from "./AnswerVariant";

const ConstructorCard = ({  }) => {
  const [name, setTitle] = useState();
  const [isOpen, setOpen] = useState(question.isOpen);

  useEffect(() => {
    autoTextArea();
  }, []);

  function autoTextArea() {
    var tx = document.getElementsByTagName("textarea");
    for (var i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );

      tx[i].addEventListener("input", OnInput, false);
    }
  }

  function OnInput() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
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
          placeholder="Фамилия"
          className="input w-full border-1 border-accent"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
        <textarea
          type="text"
          placeholder="Имя"
          className="input w-full border-1 border-accent"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
        <textarea
          type="text"
          placeholder="Отчество"
          className="input w-full border-1 border-accent"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};
export default ConstructorCard;
