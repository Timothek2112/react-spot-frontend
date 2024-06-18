import * as xlsx from "xlsx/xlsx.mjs";
import * as xls from "exceljs";
import { saveAs } from 'file-saver';
import ConvertApi from 'convertapi-js'
import Api from "./Api";
import axios, { HttpStatusCode } from "axios";


//const { PDFNet } = require('@pdftron/pdfnet-node');
export default class ReportService {
  static async CreateExcelReport(survey) {
    const wb = new xls.Workbook();
    
    let columns = [];
    
    let ws = wb.addWorksheet('1');
    columns = [
      {header: "Группа", key: "group", width: 10, style: {alignment: {wrapText: true}, border: {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'} 
      }}}
    ];

    survey.questions.forEach((element) => {
      columns.push({header: element.title, key: element.title, width: 10, style: {alignment: {wrapText: true}, border: {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'} 
      }}});
    }) 
    
    const respondentsIds = [];

    survey.answers.forEach((el) => {
      if(respondentsIds.find(resp => resp.id == el.respondentId) == undefined){
        respondentsIds.push(el.respondent);
      }
    })

    ws.columns = columns;

    respondentsIds.forEach((el) => {
      const data = {group: el.group.title};
      let answers = survey.answers.filter((element) => {
        return element.respondent.id == el.id;
      });
      answers.forEach((answer) => {
        const question = survey.questions.find(q => q.id == answer.questionId);
        if(!question.isOpen)
        {
        const answerVariant = question.answerVariants.find(v => v.id == answer.answerVariantId);
        data[question.title] = answerVariant.title;
        }
        else
        {
          data[question.title] = answer.openAnswer;
        }
      })
      ws.addRow(data);
      ws.lastRow.outlineLevel = 1;
      ws.lastRow.alignment = { vertical: 'top', horizontal: 'left', shrinkToFit: true };
      ws.lastRow.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      };
    })

    ws.addRow();
    ws.lastRow.outlineLevel = 1;
    ws.lastRow.alignment = { vertical: 'top', horizontal: 'left', shrinkToFit: true };
    ws.lastRow.border = {
      top: {style:'thin'},
      left: {style:'thin'},
      bottom: {style:'thin'},
      right: {style:'thin'}
    };

    for(let y = 1; y <= ws.columnCount; y++)
      {
        let value = 0;
        let count = 0;
        for(let i = 2; i <= ws.rowCount; i++){
          if(!isNaN(parseInt(ws.getCell(i, y).value))){
            value += parseInt(ws.getCell(i,y).value);
            count++;
          }
          else{
            if(!isNaN(value / count)){
              ws.getCell(i,y).value = value / count;
            }
            break;
          }
        }
    }    
    
    // Вторая страница
    ws = wb.addWorksheet("2");
    columns = [{header: "Измерение", key: "discipline", width: 10},
                   {header: "Среднее", key: "result", width: 10}
    ];

    const results = [];

    survey.answers.forEach((answer) => {
      const question = survey.questions.find(q => q.id == answer.questionId);
      const answerVariant = question.answerVariants.find(v => v.id == answer.answerVariantId);
      
      if(answerVariant == undefined) return;

      let onlyNumbers = true;
      question.answerVariants.forEach((av) => {
        if(isNaN(parseInt(av.title))){
          onlyNumbers = false;
        }
      })
      if(!onlyNumbers) return;
      const split = question.title.split(" - ");
      if(split.lenght == 0) return;
      var result = results.find(r => r.discipline == split[0]);
      if(result == undefined){
        results.push({discipline: split[0], count: 1, sum: parseInt(answerVariant.title)})
        result = results[results.length - 1];
      }
      else{
        result.count += 1;
        result.sum += parseInt(answerVariant.title);
      }
    })

    ws.columns = columns;

    results.forEach((r) => {
      const data = {discipline: r.discipline, result: (r.sum / r.count)};
      ws.addRow(data);
    })
    
    return wb;
  }

  static async CreatePDFReport(survey){

    let wb = new xls.Workbook();
    let ws = wb.addWorksheet("1");
    let columns = [{header: "Измерение", key: "discipline", width: 10, style: {border: {bottom: {style:'thin'}}}},
                   {header: "Среднее", key: "result", width: 10, style: {border: {bottom: {style:'thin'}}}}
    ];

    const results = [];

    survey.answers.forEach((answer) => {
      const question = survey.questions.find(q => q.id == answer.questionId);
      const answerVariant = question.answerVariants.find(v => v.id == answer.answerVariantId);
      
      if(answerVariant == undefined) return;

      let onlyNumbers = true;
      question.answerVariants.forEach((av) => {
        if(isNaN(parseInt(av.title))){
          onlyNumbers = false;
        }
      })
      if(!onlyNumbers) return;
      const split = question.title.split(" - ");
      if(split.lenght == 0) return;
      var result = results.find(r => r.discipline == split[0]);
      if(result == undefined){
        results.push({discipline: split[0], count: 1, sum: parseInt(answerVariant.title)})
        result = results[results.length - 1];
      }
      else{
        result.count += 1;
        result.sum += parseInt(answerVariant.title);
      }
    })

    ws.columns = columns;

    results.forEach((r) => {
      const data = {discipline: r.discipline, result: (r.sum / r.count).toFixed(3)};
      ws.addRow(data);
    })

    // let ws1 = wb.addWorksheet("2");
    // ws.columns = [{header: "Вопрос", key: "question", width: 30, style: {border: {bottom: {style:'thin'}}}},
    //               {header: "Ответы", key: "answers", width: 10, style: {border: {bottom: {style:'thin'}}}}
    // ];

    // survey.answers.forEach((a) => {
    //   let question = survey.questions.find()
    // })

    // wb.xlsx.writeBuffer().then(async function (data) {
    //   const blob = new Blob([data], {
    //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    //   });
      
    //   const url = window.URL.createObjectURL(blob);
    //   const anchor = document.createElement("a");
    //   anchor.href = url;
    //   anchor.download = survey.title + " - Отчет.xlsx";
    //   anchor.click();
    //   window.URL.revokeObjectURL(url);
    // });
    
    // let wb = await ReportService.CreateExcelReport(survey);
    wb.xlsx.writeBuffer().then(async function (data) {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      let dataPdf = await ReportService.ConvertXLSXToPDF(new File([blob], "abcd.xlsx"), "110", "portrait");
      var tempLink = document.createElement('a');
      tempLink.href = "data:application/pdf;base64," + dataPdf.Files[0].FileData;
      tempLink.setAttribute('download', survey.title + " - Отчет.pdf");
      tempLink.click();
    
    });
  }

  static async ConvertXLSXToPDF(base64file, Scale = "50", orientation = "landscape"){
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    var data = new FormData();
    data.append("File", base64file, base64file.name);
    data.append("Timeout", "900");
    data.append("StoreFile", "false");
    data.append("WorksheetActive", "false");
    data.append("ConvertMetadata", "true");
    data.append("ThousandsSeparator", ",");
    data.append("DecimalSeparator", ".");
    data.append("PageOrientation", orientation);
    data.append("PageSize", "default");
    data.append("AutoFit", "true");
    data.append("ClearPrintArea", "false");
    data.append("Scale", Scale);
    data.append("CompressPDF", "false");
    data.append("Pdfa", "false");
    try{
      const response = await axios.post(
        "https://v2.convertapi.com/convert/xlsx/to/pdf?secret=M5ldQiry10iKD7x4",
        data,
        config
      );
      
      return response.data;
    }
    catch(ex){
      console.log(ex);
    }
  }

}

