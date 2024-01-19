import React, { useState, useEffect } from "react";
import BaseLogged from "./Panels/BaseLogged";
import Card from "./UI/Card";
import CardInfo from "../models/CardInfo";
import ConstructorCard from "./UI/input/ConstructorCard";
import Question from "./../models/Question";
import ConstructorRightPanel from "./Panels/ConstructorRightPanel";
import { Survey } from "../models/Survey";
import { useLocation, useNavigate } from "react-router-dom";
import SurveyService from "../services/SurveyService";
import GroupService from "../services/GroupService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "@material-tailwind/react";

const Constructor = ({ survey = new Survey() }, ...props) => {
  const navigate = useNavigate();
  const location = useLocation();
  if (!(location.state === null))
    survey = location.state.survey === null ? survey : location.state.survey;
  if (survey.accessCode == "") {
    survey.accessCode = makeid(6);
  }
  survey = Survey.Parse(survey);
  console.log(survey);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [surveyState, setSurveyState] = useState(survey);
  const [Data, setData] = useState(surveyState.questions);
  const [title, setTitle] = useState(surveyState.title);
  const [description, setDescription] = useState(surveyState.description);
  const [startTime, setStartTime] = useState(surveyState.startTime);
  const [endTime, setEndTime] = useState(surveyState.endTime);
  const [department, setDepartment] = useState(surveyState.department);
  const [active, setActive] = useState(surveyState.active);
  const [accessCode, setAccessCode] = useState(surveyState.accessCode);
  const [group, setGroup] = useState(
    surveyState.group == null ? null : surveyState.group.title
  );
  const [groups, setGroups] = useState([]);
  const [groupId, setGroupId] = useState(surveyState.groupId);
  if (surveyState.userId == 0) {
    surveyState.userId = localStorage.getItem("userId");
  }
  const [endTimeNeeded, setEndTimeNeeded] = useState(surveyState.endTimeNeeded);

  function makeid(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  useEffect(() => {
    const newGroup = groups.filter((element) => {
      if (group == null) return false;
      if (element.title == group) return true;
      return false;
    })[0];
    if (newGroup != null) setGroupId(newGroup.id);
  }, [group]);

  useEffect(() => {
    GroupService.GetAllGroups()
      .then((result) => {
        setGroups(result);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  useEffect(() => {
    surveyState.title = title;
    surveyState.department = department;
    surveyState.description = description;
    surveyState.startTime = startTime;
    surveyState.endTime = endTime;
    surveyState.active = active;
    surveyState.accessCode = accessCode;
    surveyState.questions = Data;
    surveyState.group = group;
    surveyState.groupId = groupId;
    surveyState.endTimeNeeded = endTimeNeeded;
    if (!surveyState.endTimeNeeded) {
      surveyState.endTime = null;
    }
    setUnsavedChanges(true);
    setSurveyState(surveyState);
  }, [
    title,
    description,
    startTime,
    endTime,
    department,
    active,
    accessCode,
    Data,
    group,
    groupId,
    endTimeNeeded,
  ]);

  function ValidateSurvey(survey) {
    let error = false;

    if (survey.questions.length == 0) {
      toast.warning("Нельзя сохранить опрос без вопросов!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      error = true;
    }

    if (survey.groupId == 0) {
      toast.warning("Перед сохранением необходимо выбрать группу!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      error = true;
    }

    if (survey.title == "") {
      toast.warning("Имя опроса не может быть пустым!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      error = true;
    }

    if (
      (survey.startTime >= survey.endTime || survey.endTime === null) &&
      survey.endTimeNeeded
    ) {
      toast.warning(
        "Время начала опроса должно быть меньше времени окончания!",
        {
          position: toast.POSITION.BOTTOM_LEFT,
        }
      );
      error = true;
    }

    return !error;
  }

  function SaveSurvey() {
    surveyState.questions.forEach((element, i) => {
      if (element.isOpen) {
        element.answerVariants = null;
      }
    });
    if (!ValidateSurvey(surveyState)) return;
    if (surveyState.id == 0) {
      SurveyService.CreateSurvey(surveyState).then((result) => {
        navigate("/constructor", {
          replace: true,
          state: { survey: result },
        });
      });
    } else {
      SurveyService.SaveSurvey(surveyState).then((result) => {
        navigate("/constructor", {
          replace: true,
          state: { survey: result },
        });
      });
    }
    toast.success("Опрос успешно сохранен!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    setUnsavedChanges(false);
  }

  function add() {
    let copy = Object.assign([], Data);
    copy.push(new Question());
    setData(copy);
  }

  function showTitle() {
    if (surveyState.id == 0) {
      return "Редактор опроса";
    } else {
      return "Редактор опроса";
    }
  }

  return (
    <BaseLogged>
      <div className="flex flex-row items-center w-full">
        <h5 className="text-primary text-4xl font-bold m-5 ">{showTitle()}</h5>
        <div className="grow">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-error float-right mr-5 text-white w-48"
          >
            Назад
          </button>
        </div>
      </div>
      <div className="w-full p-5 space-y-5">
        <ConstructorRightPanel
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          startTime={startTime}
          setStartTime={setStartTime}
          endTime={endTime}
          setEndTime={setEndTime}
          department={department}
          setDepartment={setDepartment}
          accessCode={accessCode}
          setAccessCode={setAccessCode}
          active={active}
          setActive={setActive}
          groups={groups}
          group={group}
          setGroup={setGroup}
          SaveSurvey={SaveSurvey}
          endTimeNeeded={endTimeNeeded}
          setEndTimeNeeded={setEndTimeNeeded}
          survey={surveyState}
        ></ConstructorRightPanel>
        <div className="space-y-2 w-full">
          {!!Data.length &&
            Data.map((element) => {
              return (
                <ConstructorCard
                  key={
                    element.innerId === undefined ? element.id : element.innerId
                  }
                  Data={Data}
                  setData={setData}
                  question={element}
                />
              );
            })}
          <button
            onClick={add}
            className="btn btn-primary text-white w-30  mx-auto block"
          >
            Добавить
          </button>
        </div>
      </div>
      <ToastContainer />
    </BaseLogged>
  );
};
export default Constructor;
