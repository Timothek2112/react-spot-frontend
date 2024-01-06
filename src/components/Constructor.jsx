import React, { useState, useEffect } from "react";
import BaseLogged from "./Panels/BaseLogged";
import Card from "./UI/Card";
import CardInfo from "../models/CardInfo";
import ConstructorCard from "./UI/input/ConstructorCard";
import Question from "./../models/Question";
import ConstructorRightPanel from "./Panels/ConstructorRightPanel";
import { Survey } from "../models/Survey";
import { useLocation } from "react-router-dom";
import SurveyService from "../services/SurveyService";
import GroupService from "../services/GroupService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Constructor = ({ survey = new Survey() }, ...props) => {
  const location = useLocation();
  if (!(location.state === null))
    survey = location.state.survey === null ? survey : location.state.survey;
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

  useEffect(() => {
    if (surveyState === null) {
      setSurveyState(survey);
      return;
    }
    survey = surveyState;
    console.log(surveyState);
    setData(surveyState.questions);
    setTitle(surveyState.title);
    setDescription(surveyState.description);
    setStartTime(surveyState.startTime);
    setEndTime(surveyState.endTime);
    setDepartment(surveyState.department);
    setActive(surveyState.active);
    setAccessCode(surveyState.accessCode);
    setGroup(surveyState.group);
  }, [surveyState]);

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
    setSurveyState(surveyState);
    console.log(surveyState);
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
  ]);

  function SaveSurvey() {
    if (surveyState.id == 0) {
      SurveyService.CreateSurvey(surveyState).then((result) => {
        console.log(result);
        setSurveyState(result);
      });
    } else {
      SurveyService.SaveSurvey(surveyState).then((result) => {
        setSurveyState(result);
      });
    }
  }

  function add() {
    let copy = Object.assign([], Data);
    copy.push(new Question());
    setData(copy);
  }

  return (
    <BaseLogged>
      <h5 className="text-primary text-4xl font-bold mt-10">
        Редактирование опроса
      </h5>
      <div className="w-full">
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
        ></ConstructorRightPanel>
        <div className="px-10 pb-10 space-y-2 w-full">
          {!!Data.length &&
            Data.map((element) => (
              <ConstructorCard
                key={element.id}
                Data={Data}
                setData={setData}
                question={element}
              />
            ))}
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
