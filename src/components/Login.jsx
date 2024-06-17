import React, { useState } from "react";
import BaseUnlogged from "./Panels/BaseUnlogged";
import { useNavigate } from "react-router-dom";
import AuthService from "./../services/AuthService";
import * as xls from "exceljs";
import ConvertApi from 'convertapi-js'
import ReportService from "../services/ReportService";

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const LogIn = () => {
    AuthService.Login(login, password)
      .then((result) => {
        setLogged(result);
      })
      .catch(() => {});
  };

  if (logged) {
    navigate("/controlPanel");
  }

  function TestPDF(){
    const wb = new xls.Workbook();
    wb.addWorksheet("1");
    wb.xlsx.writeBuffer().then(async function (data) {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      let dataPdf = await ReportService.CreatePDFReport(new File([blob], "abcd.xlsx"));
      const blobPdf = new Blob([dataPdf.Files[0].FileData], {type: "application/pdf"});
      var csvURL = window.URL.createObjectURL(blobPdf);
      var tempLink = document.createElement('a');
      tempLink.href = csvURL;
      tempLink.setAttribute('download', 'filename.pdf');
      tempLink.click();
      // var reader = new FileReader();
      // reader.readAsDataURL(blob);
      // reader.onloadend = async function() {
      //   var base64data = reader.result;
      //   console.log(base64data);
        
      //   // let convertApi = new ConvertApi('M5ldQiry10iKD7x4');
      //   // let params = convertApi.createParams();
      //   // params.add('File', base64data);
      //   // let result = await convertApi.convert('xlsx', 'pdf', params)
      //   // window.open(result.URL, "_blank", "noopener");
      // }
      // const url = window.URL.createObjectURL(blob);
      // const anchor = document.createElement("a");
      // anchor.href = url;
      // anchor.download = survey.title + " - Отчет.pdf";
      // anchor.click();
      // window.URL.revokeObjectURL(url);
    });
  }

  return (
    <BaseUnlogged>
      <div className="w-full flex flex-col h-screen">
        <div className="m-auto flex flex-col content-center items-center w-1/3">
          <div className=" flex flex-row justify-center items-center">
            <img src="./images/main-logo.jpg" className=" w-[20vh]" />
            <span className="h-min grow text-[10vh] text-primary z-10 ml-[-30px]">
              СПОТ
            </span>
          </div>
          <input
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Имя пользователя"
            className="block input input-bordered  bg-accent w-full mt-[100px]"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
            className="block input input-bordered  bg-accent w-full mt-5"
          />

          <button
            onClick={() => LogIn()}
            className="block btn btn-primary w-44 m-auto text-white mt-5"
          >
            Войти
          </button>
          <button
            onClick={() => TestPDF()}
            className="block btn btn-primary w-44 m-auto text-white mt-5"
          >
            Тест пдф
          </button>
        </div>
      </div>
    </BaseUnlogged>
  );
};
export default Login;
