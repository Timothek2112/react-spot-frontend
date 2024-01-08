import { Popover } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TextInputProperty from "../Constructor/TextInputProperty";
import DatePickerProperty from "../Constructor/DatePickerProperty";
import TextAreaProperty from "../Constructor/TextAreaProperty";
import ComboboxPickerProperty from "../Constructor/ComboboxPickerProperty";
import BooleanProperty from "../Constructor/BooleanProperty";

const ConstructorRightPanel = (props) => {
  const navigate = useNavigate();

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

  function ShowEndTime() {
    if (props.endTimeNeeded) {
      return (
        <DatePickerProperty
          title="Дата окончания опроса:"
          property={props.endTime}
          setProperty={props.setEndTime}
        ></DatePickerProperty>
      );
    }
  }

  return (
    <div className="card space-y-4 shadow-xl m-10 border border-accent">
      <div className="card-body">
        <TextInputProperty
          title={"Имя опроса:"}
          property={props.title}
          setProperty={props.setTitle}
        ></TextInputProperty>
        <TextAreaProperty
          title="Описание опроса:"
          property={props.description}
          setProperty={props.setDescription}
        ></TextAreaProperty>
        <ComboboxPickerProperty
          title="Группа:"
          property={props.group}
          setProperty={props.setGroup}
          options={props.groups}
          defaultTitle="Выбор группы"
        ></ComboboxPickerProperty>
        <TextInputProperty
          title={"Отделение:"}
          property={props.department}
          setProperty={props.setDepartment}
        ></TextInputProperty>
        <DatePickerProperty
          title="Дата начала опроса:"
          property={props.startTime}
          setProperty={props.setStartTime}
        ></DatePickerProperty>
        {ShowEndTime()}
        <BooleanProperty
          title="Дата окончания необходима:"
          property={props.endTimeNeeded}
          setProperty={props.setEndTimeNeeded}
        ></BooleanProperty>
        <TextInputProperty
          title="Код доступа"
          readonly={true}
          property={props.accessCode}
        ></TextInputProperty>
        <BooleanProperty
          title="Активен:"
          property={props.active}
          setProperty={props.setActive}
        ></BooleanProperty>
        <div className="flex justify-center space-x-5">
          <button
            onClick={props.SaveSurvey}
            className="btn btn-active btn-primary w-1/5 text-white"
          >
            Сохранить
          </button>
          <button
            onClick={() =>
              navigate("/report", {
                state: { surveyInfo: props.survey },
              })
            }
            className="btn btn-active btn-primary w-1/5 text-white"
          >
            Создать отчет
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConstructorRightPanel;
