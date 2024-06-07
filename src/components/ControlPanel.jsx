import React, { useEffect, useState, useRef } from "react";
import BaseLogged from "./Panels/BaseLogged";
import Card from "./UI/Card";
import CardInfo from "../models/CardInfo";
import SearchBar from "./SearchBar";
import { Navigate, useNavigate } from "react-router-dom";
import SurveyService from "../services/SurveyService";
import { Survey } from "../models/Survey";
import { ToastContainer, toast } from "react-toastify";

const ControlPanel = (props) => {
  const [query, setQuery] = useState("");
  const [surveys, setSurveys] = useState([]);
  const inputFile = useRef();

  useEffect(() => {
    SurveyService.getAllSurveys().then((result) => {
      console.log(result);
      result.sort(
        (a, b) =>
          new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
      );
      setSurveys(result);
    });
  }, []);

  const navigate = useNavigate();

  function loadFromFile(){
    inputFile.current.click();
  }

  function parseFile(event){
    event.stopPropagation();
    event.preventDefault();
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result);
      const survey = Survey.Parse(JSON.parse(text));
      survey.id = 0;
      survey.makeid(6);
      navigate("/constructor", { state: { survey: survey }});
    };
    reader.readAsText(event.target.files[0])
  }

  return (
    <BaseLogged
      SearchBar={
        <SearchBar query={query} setQuery={setQuery}>
          
            <button
              onClick={() => {
                navigate("/constructor");
              }}
              className="btn btn-info text-white"
            >
              Создать
            </button>
            <button
              onClick={loadFromFile}
              className="btn btn-info text-white"
            >
              Загрузить из шаблона
              </button>
          
        </SearchBar>
      }
    >
      <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={(e) => parseFile(e)}/>
      <div className="w-full grid 2xl:grid-cols-2 xl:grid-cols-2 gap-4 p-5">
        {!!surveys.length &&
          surveys
            .filter((card) => {
              card = Survey.Parse(card);
              if (query === "") {
                return card;
              } else if (
                card.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return card;
              }
            })
            .map((card) => (
              <Card
                key={card.id}
                cardInfo={card}
                setSurveys={setSurveys}
                surveys={surveys}
              ></Card>
            ))}
      </div>
      <ToastContainer />
    </BaseLogged>
  );
};
export default ControlPanel;
