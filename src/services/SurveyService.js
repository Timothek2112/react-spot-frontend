import axios from "axios";
import { Survey } from "../models/Survey";
import Api from "./Api";

class SurveyService {
  static async getAllSurveys() {
    try {
      const response = await Api.get("survey");
      return response.data;
    } catch (ex) {
      console.log(ex);
      return [];
    }
  }

  static async CreateSurvey(survey) {
    try {
      console.log("Creating survey");
      console.log(survey);
      const response = await Api.post("survey", survey);
      console.log("Returned value");
      console.log(response.data);
      return response.data;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  static async SaveSurvey(survey) {
    try {
      console.log("Saving survey");
      console.log(survey);
      const response = await Api.put(`survey/${survey.id}`, survey);
      console.log("Returned survey:");
      console.log(response.data);
      return response.data;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }
}

export default SurveyService;
