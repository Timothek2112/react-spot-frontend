import * as xlsx from "xlsx/xlsx.mjs";
import * as xls from "exceljs";
import { saveAs } from 'file-saver';
//const { PDFNet } = require('@pdftron/pdfnet-node');
export default class ReportService {
  static CreateExcelReport(survey) {
    const wb = new xls.Workbook();
    
    let columns = [];
    
    const ws = wb.addWorksheet('1');
    columns = [
      { header: 'Группа', key: 'group', width: 30 }
    ];

    survey.questions.forEach((element) => {
      columns.push({header: element.title, key: element.title, width: 30});
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
    })

    ws.addRow();
    
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

    wb.xlsx.writeBuffer().then(async function (data) {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      // const buf = await (PDFNet?.Convert.office2PDF(data));
      // const doc = await (PDFNet?.PDFDoc.createFromBuffer(buf));
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = survey.title + " - Отчет.xlsx";
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
    // const workbook = xlsx.utils.book_new();

    // const sheetName = "Отчет";
    // const sheetData = [
    //   [
    //     "Вопрос",
    //     "Варианты ответа",
    //     "Сколько раз выбирали",
    //     "Процентное соотношение",
    //   ],
    // ];

    // survey.questions.forEach((element) => {
    //   sheetData.push([element.title]);
    //   if (!element.isOpen) {
    //     element.answerVariants.forEach((variant) => {
    //       const timesSelected = survey.answers.filter(
    //         (p) => p.answerVariantId == variant.id && p.questionId == element.id
    //       ).length;
    //       const persent =
    //         Math.round(
    //           (timesSelected /
    //             survey.answers.filter((p) => p.questionId == element.id)
    //               .length) *
    //             100 *
    //             100
    //         ) / 100;
    //       sheetData.push([
    //         "",
    //         variant.title,
    //         timesSelected,
    //         persent.toString() + "%",
    //       ]);
    //     });
    //   } else {
    //     survey.answers
    //       .filter((answer) => {
    //         return answer.questionId == element.id;
    //       })
    //       .map((el) => {
    //         sheetData.push(["", el.openAnswer]);
    //       });
    //   }
    // });

    // const worksheet = xlsx.utils.aoa_to_sheet(sheetData);
    // xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    // const fileName = survey.title + " - Отчет.xlsx";
    // const file = xlsx.writeFile(workbook, fileName);
    
  }



  static CreatePDFReport(survey){
    const wb = new xls.Workbook();
    wb.xlsx.writeBuffer().then(async function (data) {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = survey.title + " - Отчет.pdf";
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  }
}

