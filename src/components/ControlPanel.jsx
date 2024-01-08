import React, { useEffect, useState } from "react";
import BaseLogged from "./Panels/BaseLogged";
import Card from "./UI/Card";
import CardInfo from "../models/CardInfo";
import SearchBar from "./SearchBar";
import { Navigate, useNavigate } from "react-router-dom";
import SurveyService from "../services/SurveyService";
import { Survey } from "../models/Survey";

const ControlPanel = (props) => {
  const [query, setQuery] = useState("");
  const [surveys, setSurveys] = useState([]);

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

  return (
    <BaseLogged>
      <SearchBar query={query} setQuery={setQuery}>
        <div className="w-min">
          <button
            onClick={() => {
              navigate("/constructor");
            }}
            className="btn btn-info w-full text-white"
          >
            Создать
          </button>
        </div>
      </SearchBar>
      <div className="w-full grid 2xl:grid-cols-2 xl:grid-cols-2 gap-4 p-4 my-10">
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
            .map((card) => <Card key={card.id} cardInfo={card}></Card>)}
      </div>
    </BaseLogged>
  );
};
export default ControlPanel;
