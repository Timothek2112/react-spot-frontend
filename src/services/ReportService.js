import * as xlsx from "xlsx/xlsx.mjs";

export default class ReportService {
  static CreateExcelReport(survey) {
    const workbook = xlsx.utils.book_new();

    const sheetName = "Отчет";
    const sheetData = [
      [
        "Вопрос",
        "Варианты ответа",
        "Сколько раз выбирали",
        "Процентное соотношение",
      ],
    ];

    survey.questions.forEach((element) => {
      sheetData.push([element.title]);
      element.answerVariants.forEach((variant) => {
        const timesSelected = survey.answers.filter(
          (p) => p.answerVariantId == variant.id && p.questionId == element.id
        ).length;
        const persent =
          Math.round(
            (timesSelected /
              survey.answers.filter((p) => p.questionId == element.id).length) *
              100 *
              100
          ) / 100;
        console.log(variant);
        console.log(timesSelected);
        console.log(
          survey.answers.filter((p) => p.questionId == element.id).length
        );
        sheetData.push([
          "",
          variant.title,
          timesSelected,
          persent.toString() + "%",
        ]);
      });
    });

    const worksheet = xlsx.utils.aoa_to_sheet(sheetData);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    const fileName = survey.title + " - Отчет.xlsx";
    xlsx.writeFile(workbook, fileName);
  }
}
